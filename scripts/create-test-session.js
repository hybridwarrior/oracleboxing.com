const fs = require('fs');
const path = require('path');

// Read .env.local file
const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const STRIPE_SECRET_KEY = envContent
  .split('\n')
  .find(line => line.startsWith('STRIPE_SECRET_KEY='))
  ?.split('=')[1]
  ?.trim();

const stripe = require('stripe')(STRIPE_SECRET_KEY);

async function createTestSession() {
  try {
    console.log('Creating test checkout session...\n');

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Oracle Boxing Bundle (Test)',
              description: 'Test order for success page preview',
            },
            unit_amount: 39700, // $397.00
          },
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000',
      metadata: {
        product_metadata: 'obm',
        order_type: 'bundle',
      },
      customer_email: 'test@example.com',
    });

    console.log('✅ Test session created successfully!\n');
    console.log('Session ID:', session.id);
    console.log('\n📍 Success page URLs:\n');
    console.log(`Main: http://localhost:3000/success?session_id=${session.id}`);
    console.log(`Alt:  http://localhost:3000/success/${session.id}`);
    console.log('\n💳 To complete the test payment, use:');
    console.log('Card: 4242 4242 4242 4242');
    console.log('Exp:  Any future date');
    console.log('CVC:  Any 3 digits');
    console.log('\nCheckout URL:', session.url);
    console.log('\n');
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.type === 'StripeAuthenticationError') {
      console.log('\n⚠️  Make sure STRIPE_SECRET_KEY is set in .env.local');
    }
  }
}

createTestSession();
