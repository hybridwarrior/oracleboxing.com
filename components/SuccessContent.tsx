'use client'

import { useEffect, useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { Upsell } from './Upsell'
import { Product } from '@/lib/types'
import { getProductById } from '@/lib/products'
import { useAnalytics } from '@/hooks/useAnalytics'
import { useCurrency } from '@/contexts/CurrencyContext'
import { formatPrice } from '@/lib/currency'

interface SuccessContentProps {
  sessionId: string
}

/**
 * Get tracking cookie data (returns empty object if no consent/cookie)
 */
function getTrackingCookie(): any {
  if (typeof document === 'undefined') return {};

  const cookies = document.cookie.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);

  const obTrackCookie = cookies['ob_track'];
  if (!obTrackCookie) return {};

  try {
    return JSON.parse(decodeURIComponent(obTrackCookie));
  } catch {
    return {};
  }
}

/**
 * Generate a unique event ID for deduplication
 */
function generateEventId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Get Facebook Click ID (fbclid) from cookies
 */
function getFbclid(): string | null {
  if (typeof document === 'undefined') return null;

  const cookies = document.cookie.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    acc[key] = decodeURIComponent(value);
    return acc;
  }, {} as Record<string, string>);

  return cookies['fbclid'] || null;
}

export function SuccessContent({ sessionId }: SuccessContentProps) {
  const [session, setSession] = useState<any>(null)
  const [upsellProduct, setUpsellProduct] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { trackPurchase } = useAnalytics()
  const { currency } = useCurrency()

  useEffect(() => {
    async function fetchSession() {
      try {
        // Fetch session data from Stripe
        const response = await fetch(`/api/session?session_id=${sessionId}`);
        const sessionData = await response.json();

        console.log('Session data:', sessionData);
        setSession(sessionData);

        // Send Purchase event to Facebook (browser + CAPI)
        await sendPurchaseEvent(sessionData);

        // Show tracksuit upsell for all purchases
        const tracksuit = getProductById('tracksuit')
        console.log('🔍 Tracksuit product:', tracksuit)
        setUpsellProduct(tracksuit || null)

        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching session:', error)
        setIsLoading(false)
      }
    }

    async function sendPurchaseEvent(sessionData: any) {
      try {
        console.log('🔍 Session data received for Purchase tracking:', {
          has_amount_total: !!sessionData.amount_total,
          has_line_items: !!sessionData.line_items,
          line_items_count: sessionData.line_items?.data?.length || 0,
          has_customer_details: !!sessionData.customer_details,
          sessionData_keys: Object.keys(sessionData),
        });

        // Get cookie data (empty if no consent)
        const cookieData = getTrackingCookie();

        // Use cookie event_id or generate new one
        const eventId = cookieData.event_id || generateEventId();

        // Get fbclid from cookies
        const fbclid = getFbclid();

        // Extract purchase data from session
        const amountTotal = sessionData.amount_total ? sessionData.amount_total / 100 : 0;
        const currency = sessionData.currency?.toUpperCase() || 'USD';

        // Extract product IDs from line items
        const contentIds = sessionData.line_items?.data?.map((item: any) => {
          const product = item.price?.product;
          return typeof product === 'object' ? product.id : product;
        }).filter(Boolean) || [];

        // Build contents array with quantities and prices
        const contents = sessionData.line_items?.data?.map((item: any) => ({
          id: typeof item.price?.product === 'object' ? item.price.product.id : item.price?.product,
          quantity: item.quantity || 1,
          item_price: item.price?.unit_amount ? item.price.unit_amount / 100 : 0,
        })) || [];

        // Extract metadata for Vercel Analytics
        const metadata = sessionData.metadata || {};
        const products = contentIds; // Use Stripe product IDs as product identifiers
        const funnelType = metadata.funnel_type || 'unknown';
        const orderBumps = metadata.add_ons_included ? metadata.add_ons_included.split(',') : [];
        const hasOrderBumps = orderBumps.length > 0;

        console.log('📊 Sending Purchase event:', {
          event_id: eventId,
          value: amountTotal,
          currency,
          content_ids: contentIds,
          contents_count: contents.length,
          products,
          funnel_type: funnelType,
          has_order_bumps: hasOrderBumps,
          order_bumps: orderBumps,
          has_customer_email: !!(sessionData.customer_details?.email || sessionData.customer_email || sessionData.customerEmail),
        });

        // 1. Send browser-side Facebook Pixel Purchase event
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Purchase', {
            value: amountTotal,
            currency,
            content_ids: contentIds,
            content_type: 'product',
            num_items: contents.length,
          }, {
            eventID: eventId
          });
          console.log('📱 Browser Purchase event sent with event_id:', eventId);
        } else {
          console.warn('⚠️ Facebook Pixel not loaded - browser Purchase event not sent');
        }

        // 2. Send server-side CAPI Purchase event
        fetch('/api/facebook-purchase', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            event_id: eventId,
            value: amountTotal,
            currency,
            content_ids: contentIds,
            contents,
            customer_email: sessionData.customer_details?.email || sessionData.customer_email || sessionData.customerEmail,
            customer_phone: sessionData.customer_details?.phone,
            cookie_data: cookieData,
            fbclid,
            session_url: `https://oracleboxing.com/success/${sessionId}`,
          }),
          keepalive: true,
        }).then(async response => {
          if (response.ok) {
            const result = await response.json();
            console.log('✅ CAPI Purchase event sent successfully:', result);
          } else {
            const error = await response.json();
            console.error('❌ CAPI Purchase event failed:', response.status, error);
          }
        }).catch((error) => {
          console.error('❌ Failed to send CAPI Purchase event:', error);
        });

        // 3. Send Vercel Analytics Purchase event
        trackPurchase({
          value: amountTotal,
          currency,
          transaction_id: sessionId,
          products,
          product_count: products.length,
          funnel_type: funnelType as any,
          has_order_bumps: hasOrderBumps,
          order_bumps: orderBumps,
        });
        console.log('✅ Vercel Analytics Purchase event sent');

      } catch (error) {
        console.error('Error sending Purchase event:', error);
      }
    }

    fetchSession()
  }, [sessionId])

  if (isLoading) {
    return (
      <section className="py-20 text-center">
        <div className="animate-pulse">Loading...</div>
      </section>
    )
  }

  return (
    <section className="py-8 sm:py-16">
      <div className="mx-auto">
        {/* Stacked layout: Order details on top, Upsell below */}
        <div className="space-y-12">

          {/* TOP: Order Details */}
          <div className="space-y-6">
            {/* Compact Header */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Thank you for your purchase, {session?.customerName || 'Customer'}.
              </h1>
            </div>

            {/* Compact Order Summary */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 max-w-xl mx-auto">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="font-semibold text-gray-900 py-1">Product</td>
                    <td className="text-right text-gray-900 py-1">{session?.productPurchased}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-gray-900 py-1">Amount</td>
                    <td className="text-right font-bold text-gray-900 py-1">{session?.amountPaid}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Simple Notice */}
            <div className="text-center max-w-xl mx-auto">
              <p className="text-sm text-gray-600">
                We will email you a copy of this receipt and further instructions to {session?.customerEmail || 'your email'}.
              </p>
            </div>
          </div>

          {/* BOTTOM: Tracksuit Upsell */}
          <div>
            {upsellProduct && (
              <Upsell
                product={upsellProduct}
                sessionId={sessionId}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
