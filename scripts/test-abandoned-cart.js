require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const Stripe = require('stripe');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function testAbandonedCart() {
  // Step 1: Query Supabase for most recent checkout
  console.log('🔍 Querying Supabase for jordan@oracleboxing.com...\n');

  const { data: checkouts, error } = await supabase
    .from('initiate_checkouts')
    .select('*')
    .eq('email', 'jordan@oracleboxing.com')
    .order('date', { ascending: false })
    .limit(1);

  if (error) {
    console.log('❌ Supabase error:', error);
    return;
  }

  if (!checkouts || checkouts.length === 0) {
    console.log('❌ No checkout found for jordan@oracleboxing.com');
    return;
  }

  const checkout = checkouts[0];
  console.log('📦 Found checkout:');
  console.log('   Name:', checkout.first_name, checkout.last_name);
  console.log('   Email:', checkout.email);
  console.log('   Phone:', checkout.phone);
  console.log('   Date:', checkout.date);
  console.log('   Payment Intent ID:', checkout.payment_intent_id);
  console.log('');

  if (!checkout.payment_intent_id) {
    console.log('❌ No payment_intent_id found - this checkout was before the update');
    return;
  }

  // Step 2: Check Stripe for payment status
  console.log('🔍 Checking Stripe payment status...\n');

  const paymentIntent = await stripe.paymentIntents.retrieve(checkout.payment_intent_id);
  console.log('💳 PaymentIntent status:', paymentIntent.status);
  console.log('');

  if (paymentIntent.status === 'succeeded') {
    console.log('✅ Payment COMPLETED - no abandoned cart webhook needed');
    return;
  }

  // Step 3: Check 14-day cooldown
  const COOLDOWN_DAYS = 14;
  if (checkout.phone) {
    const cooldownDate = new Date(Date.now() - COOLDOWN_DAYS * 24 * 60 * 60 * 1000).toISOString();

    const { data: recentWebhooks, error: webhookError } = await supabase
      .from('abandon_webhooks_sent')
      .select('id, sent_at')
      .eq('phone', checkout.phone)
      .gte('sent_at', cooldownDate)
      .limit(1);

    if (webhookError) {
      console.log('⚠️ Warning: Could not check cooldown:', webhookError.message);
    } else if (recentWebhooks && recentWebhooks.length > 0) {
      console.log(`⏸️ SKIPPED - Already sent abandon text to ${checkout.phone} on ${recentWebhooks[0].sent_at}`);
      console.log(`   Cooldown: ${COOLDOWN_DAYS} days`);
      return;
    }
  }

  // Step 4: Send abandoned cart webhook
  console.log('🛒 Payment NOT completed - sending abandoned cart webhook...\n');

  const recoveryParams = new URLSearchParams({
    fn: checkout.first_name || '',
    ln: checkout.last_name || '',
    email: checkout.email || '',
    phone: checkout.phone || '',
  });
  const recoveryUrl = `https://oracleboxing.com/sms?${recoveryParams.toString()}`;

  const webhookPayload = {
    type: 'abandon',
    first_name: checkout.first_name,
    last_name: checkout.last_name,
    email: checkout.email,
    phone: checkout.phone,
    recovery_url: recoveryUrl,
    payment_intent_id: checkout.payment_intent_id,
    checkout_date: checkout.date,
  };

  console.log('📤 Sending webhook payload:');
  console.log(JSON.stringify(webhookPayload, null, 2));
  console.log('');

  const response = await fetch(process.env.MAKE_NOTIFICATION_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(webhookPayload),
  });

  if (response.ok) {
    console.log('✅ Abandoned cart webhook sent successfully!');

    // Record that we sent this webhook (for cooldown tracking)
    if (checkout.phone) {
      const { error: insertError } = await supabase
        .from('abandon_webhooks_sent')
        .insert({
          phone: checkout.phone,
          email: checkout.email,
          payment_intent_id: checkout.payment_intent_id,
          sent_at: new Date().toISOString(),
        });

      if (insertError) {
        console.log('⚠️ Warning: Could not record webhook sent:', insertError.message);
      } else {
        console.log('📝 Recorded webhook sent for cooldown tracking');
      }
    }
  } else {
    console.log('❌ Webhook failed:', response.status, await response.text());
  }
}

testAbandonedCart().catch(console.error);
