'use client'

import { useState } from 'react'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollHero } from '@/components/tracksuit/ScrollHero'
import { ColorSelector } from '@/components/tracksuit/ColorSelector'
import { SizeSelector } from '@/components/tracksuit/SizeSelector'
import { SizeGuideModal } from '@/components/tracksuit/SizeGuideModal'
import { getProductById } from '@/lib/products'
import { tracksuitConfig, TracksuitColor, TracksuitSize, getRemainingStock } from '@/lib/tracksuit-config'
import { useCart } from '@/contexts/CartContext'
import { useRouter } from 'next/navigation'
import { ArrowRight, Check, Truck, Shield, Package } from 'lucide-react'
import { fbTrack } from '@/lib/fbpixel'

export default function TracksuitPage() {
  const router = useRouter()
  const { addItem } = useCart()

  const [selectedColor, setSelectedColor] = useState<TracksuitColor>('Black')
  const [selectedSize, setSelectedSize] = useState<TracksuitSize>('M')
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  const product = getProductById('tracksuit')!
  const remainingStock = getRemainingStock()

  const handleBuyNow = async () => {
    setIsAddingToCart(true)

    // Track AddToCart event
    fbTrack('AddToCart', {
      content_name: product.title,
      content_ids: [product.id],
      content_type: 'product',
      value: product.price,
      currency: 'GBP',
    })

    // Add to cart with metadata (no variant object needed, just metadata)
    addItem(product, undefined, {
      tracksuit_color: selectedColor,
      tracksuit_size: selectedSize,
      tracksuit_sku: `ORA-TS-${selectedColor.substring(0, 3).toUpperCase()}-${selectedSize}`,
      presale_cohort: 'BF-Presale-2025',
    })

    // Redirect to checkout
    router.push('/checkout')
  }

  return (
    <>
      {/* Hero Section with Scroll Animations */}
      <ScrollHero />

      {/* Product Selection Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left: Image Gallery */}
            <div className="space-y-6">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-sm">Product Image Placeholder</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg" />
                ))}
              </div>
            </div>

            {/* Right: Product Selector */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Oracle Boxing Tracksuit
                </h1>
                <p className="text-2xl text-gray-300 mb-6">£115 + Shipping</p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="bg-gray-800 text-white border-gray-700">
                    <Package className="w-3 h-3 mr-1" />
                    Ships Before Christmas
                  </Badge>
                  <Badge variant="outline" className="bg-gray-800 text-white border-gray-700">
                    <Shield className="w-3 h-3 mr-1" />
                    Limited to 50 Units
                  </Badge>
                  <Badge variant="outline" className="bg-red-900/50 text-red-200 border-red-800">
                    {remainingStock} of 50 Remaining
                  </Badge>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  Heavyweight 100% cotton tracksuit designed for boxers who move with quiet confidence.
                  Built as armour — for those who live by the discipline of boxing.
                </p>
              </div>

              {/* Color Selector */}
              <ColorSelector selectedColor={selectedColor} onColorChange={setSelectedColor} />

              {/* Size Selector */}
              <SizeSelector selectedSize={selectedSize} onSizeChange={setSelectedSize} />

              {/* Size Guide */}
              <SizeGuideModal />

              {/* Buy Button */}
              <Button
                onClick={handleBuyNow}
                disabled={isAddingToCart}
                size="lg"
                className="w-full bg-white text-black hover:bg-gray-200 text-lg py-6 font-semibold"
              >
                {isAddingToCart ? 'Processing...' : 'Buy Now'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              {/* Trust signals */}
              <div className="flex items-center gap-6 text-sm text-gray-400 pt-4 border-t border-gray-800">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4" />
                  <span>Free UK Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Quality Inspected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pre-Order Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Why Pre-Order Now
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Limited Stock</h3>
              <p className="text-gray-400">
                When the main sale opens mid-January, there's no guarantee you'll get one — 50 units max, no restock.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Ships First</h3>
              <p className="text-gray-400">
                Pre-orders ship before Christmas — you'll wear it while everyone else waits.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Lock Your Size</h3>
              <p className="text-gray-400">
                If you want a specific colour and size, this is your only shot to lock it in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Intent Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Designed as Armour
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Boxing changes how you move — and how the world responds to you.
                  The Oracle Boxing tracksuit was built to reflect that energy: confidence without arrogance.
                </p>
                <p>
                  The silhouette is clean, the branding subtle, the fabric uncompromising.
                  It's for boxers who carry themselves with quiet certainty — not flash.
                </p>
                <p>
                  Premium heavyweight cotton. Breathable, not fluffy. Built to outlast every cheap gym set you've ever owned.
                  Supporting real boxers and real craftsmanship.
                </p>
              </div>
            </div>
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg" />
          </div>
        </div>
      </section>

      {/* Details & Care Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Details & Care
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Fabric Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Fabric</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• {tracksuitConfig.fabric.material}</li>
                  <li>• {tracksuitConfig.fabric.weight}</li>
                  <li>• {tracksuitConfig.fabric.type}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Fit</h3>
                <p className="text-gray-300">{tracksuitConfig.fit}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Weight</h3>
                <p className="text-gray-300">Heavy. Structured but breathable.</p>
              </div>
            </div>

            {/* Care Instructions */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Care</h3>
                <ul className="space-y-2 text-gray-300">
                  {tracksuitConfig.care.map((instruction, i) => (
                    <li key={i}>• {instruction}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {tracksuitConfig.faq.map((item, i) => (
              <div key={i} className="border-b border-gray-800 pb-6">
                <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>
                <p className="text-gray-400 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="text-2xl md:text-3xl text-gray-200 mb-8 leading-relaxed">
            Every boxer needs armour. This is yours.
          </p>
          <Button
            onClick={handleBuyNow}
            disabled={isAddingToCart}
            size="lg"
            className="bg-white text-black hover:bg-gray-200 text-xl px-12 py-6 font-semibold"
          >
            Buy Now – £115 + Shipping
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </>
  )
}
