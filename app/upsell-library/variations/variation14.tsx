// VARIATION 14: Color Swatch Focus - Large hero with color dots
'use client'

import { useState } from 'react'
import { ColorSelector, getColorImages, type TrackSuitColor } from '../components/ColorSelector'

export function UpsellVariation14() {
  const [selectedColor, setSelectedColor] = useState<TrackSuitColor>('black')
  const images = getColorImages(selectedColor)

  if (!images) return null

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: 4-Image Grid */}
          <div className="grid grid-cols-2 gap-0">
            <img
              src={images.hoodieFront}
              alt="Hoodie Front"
              className="w-full h-64 object-cover"
            />
            <img
              src={images.hoodieBack}
              alt="Hoodie Back"
              className="w-full h-64 object-cover"
            />
            <img
              src={images.joggerFront}
              alt="Joggers Front"
              className="w-full h-64 object-cover"
            />
            <img
              src={images.joggerBack}
              alt="Joggers Back"
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div>
              <span className="inline-block px-4 py-1 bg-red-600 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                20% OFF • LIMITED TIME
              </span>
            </div>

            {/* Headline */}
            <div>
              <h2 className="text-4xl font-bold text-[#1d1d1f] mb-3" style={{ letterSpacing: '-0.02em' }}>
                Oracle Boxing Tracksuit
              </h2>
              <p className="text-lg text-[#86868b] font-medium">
                Premium quality. Multiple colors. <strong className="text-[#1d1d1f]">One-time offer.</strong>
              </p>
            </div>

            {/* Color Swatches with Thumbnails */}
            <div>
              <p className="text-sm font-semibold text-[#1d1d1f] mb-3">Available Colors:</p>
              <ColorSelector
                selectedColor={selectedColor}
                onColorChange={setSelectedColor}
                variant="swatches"
              />
            </div>

            {/* Features */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-sm text-[#1d1d1f] font-medium">100% cotton for maximum comfort</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-sm text-[#1d1d1f] font-medium">Made in Britain with premium craftsmanship</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-sm text-[#1d1d1f] font-medium">Official Oracle Boxing branding</span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gray-100 rounded-2xl p-4">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-lg text-[#86868b] line-through font-medium">£160</span>
                <span className="text-4xl font-bold text-[#1d1d1f]" style={{ letterSpacing: '-0.02em' }}>£128</span>
              </div>
              <p className="text-sm text-[#86868b] font-medium">Success page exclusive • Save £32</p>
            </div>

            {/* Shipping Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
              <p className="text-sm text-[#1d1d1f] font-medium">
                <strong>Note:</strong> Additional shipping charges from the UK apply. After adding to cart, you'll select your color, size, and shipping address.
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-2">
              <button className="ob-btn ob-btn-primary w-full">
                Add to My Order
              </button>
              <button className="w-full text-[#86868b] py-2 text-sm font-medium hover:text-[#1d1d1f] transition-colors">
                No thanks, continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
