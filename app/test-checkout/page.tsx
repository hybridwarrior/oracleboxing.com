'use client'

import { useState } from 'react'
import { Loader2 } from 'lucide-react'

export default function TestCheckoutPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    setIsLoading(true)

    try {
      const response = await fetch('/api/test-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price_id: 'price_1SafJDQNEdHwdojXb8O3QkxX',
          product_name: 'Test Boxing Coaching',
        }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('No checkout URL returned')
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Failed to create checkout session')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Test Checkout
        </h1>
        <p className="text-gray-600 mb-6">
          Test the tracksuit upsell flow after purchasing coaching.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h2 className="font-bold text-gray-900 mb-2">Test Product</h2>
          <p className="text-sm text-gray-700 mb-1">Boxing Coaching Session</p>
          <p className="text-2xl font-bold text-gray-900">$100.00</p>
        </div>

        <button
          onClick={handleCheckout}
          disabled={isLoading}
          className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Creating checkout...
            </>
          ) : (
            'Checkout - $100'
          )}
        </button>

        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-xs text-gray-700">
            <strong>Test Flow:</strong>
            <br />1. Click checkout to create Stripe session
            <br />2. Complete payment (use test card: 4242 4242 4242 4242)
            <br />3. Get redirected to success page
            <br />4. See tracksuit upsell with one-click purchase
            <br />5. Click "Buy" on tracksuit
            <br />6. Get redirected to Shopify with discount code
          </p>
        </div>
      </div>
    </div>
  )
}
