// VARIATION 16: Apple Minimal - Clean and spacious
'use client'

import { useState } from 'react'
import { ColorSelector, getColorImages, type TrackSuitColor } from '../components/ColorSelector'

export function UpsellVariation16() {
  const [selectedColor, setSelectedColor] = useState<TrackSuitColor>('black')
  const images = getColorImages(selectedColor)

  if (!images) return null

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-3xl p-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#1d1d1f] mb-4" style={{ letterSpacing: '-0.02em' }}>
            Oracle Boxing Tracksuit
          </h2>
          <p className="text-xl text-[#86868b] font-medium">
            Premium. Limited. Yours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: 4-Image Grid */}
          <div className="grid grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={images.hoodieFront}
              alt="Hoodie Front"
              className="w-full h-72 object-cover"
            />
            <img
              src={images.hoodieBack}
              alt="Hoodie Back"
              className="w-full h-72 object-cover"
            />
            <img
              src={images.joggerFront}
              alt="Joggers Front"
              className="w-full h-72 object-cover"
            />
            <img
              src={images.joggerBack}
              alt="Joggers Back"
              className="w-full h-72 object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            {/* Color Swatches */}
            <div>
              <p className="text-sm font-semibold text-[#1d1d1f] mb-4">Color</p>
              <ColorSelector
                selectedColor={selectedColor}
                onColorChange={setSelectedColor}
                variant="swatches"
              />
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1d1d1f] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <p className="text-base text-[#1d1d1f] font-medium">100% cotton</p>
                  <p className="text-sm text-[#86868b]">Premium comfort and durability</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1d1d1f] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <p className="text-base text-[#1d1d1f] font-medium">Made in Britain</p>
                  <p className="text-sm text-[#86868b]">Premium craftsmanship</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1d1d1f] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <p className="text-base text-[#1d1d1f] font-medium">Official branding</p>
                  <p className="text-sm text-[#86868b]">Embroidered Oracle logo</p>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="pt-4 pb-4 border-t border-gray-200">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-[#1d1d1f]" style={{ letterSpacing: '-0.02em' }}>£128</span>
                <span className="text-xl text-[#86868b] line-through font-medium">£160</span>
              </div>
              <p className="text-sm text-[#86868b] font-medium">Save £32 with this exclusive offer</p>
            </div>

            {/* Shipping Notice */}
            <div className="bg-[#f5f5f7] rounded-xl p-4">
              <p className="text-sm text-[#1d1d1f] leading-relaxed">
                Shipping from the UK. Select your size and shipping address after adding to cart.
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <button className="ob-btn ob-btn-primary w-full text-base">
                Add to Bag
              </button>
              <button className="w-full text-[#06c] py-3 text-base font-medium hover:underline transition-all">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
