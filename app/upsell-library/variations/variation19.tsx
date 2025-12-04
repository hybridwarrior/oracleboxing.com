// VARIATION 19: Apple Hero - Full-width immersive presentation
'use client'

import { useState } from 'react'
import { ColorSelector, getColorImages, type TrackSuitColor } from '../components/ColorSelector'

export function UpsellVariation19() {
  const [selectedColor, setSelectedColor] = useState<TrackSuitColor>('black')
  const images = getColorImages(selectedColor)

  if (!images) return null

  return (
    <div className="max-w-full mx-auto bg-white">
      {/* Hero Section */}
      <div className="text-center py-12 px-4">
        <p className="text-base font-semibold text-[#86868b] uppercase tracking-wider mb-3">
          Limited Edition
        </p>
        <h1 className="text-6xl md:text-7xl font-bold text-[#1d1d1f] mb-4" style={{ letterSpacing: '-0.03em' }}>
          Oracle Boxing<br />Tracksuit
        </h1>
        <p className="text-xl md:text-2xl text-[#86868b] font-medium mb-6">
          Premium. Versatile. Timeless.
        </p>
        <div className="flex items-baseline justify-center gap-3">
          <span className="text-3xl font-semibold text-[#1d1d1f]">From £128</span>
          <span className="text-xl text-[#86868b] line-through">£160</span>
        </div>
      </div>

      {/* Product Gallery */}
      <div className="max-w-5xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-2 gap-2">
          <img
            src={images.hoodieFront}
            alt="Hoodie Front"
            className="w-full h-[500px] object-cover rounded-2xl"
          />
          <img
            src={images.hoodieBack}
            alt="Hoodie Back"
            className="w-full h-[500px] object-cover rounded-2xl"
          />
          <img
            src={images.joggerFront}
            alt="Joggers Front"
            className="w-full h-[500px] object-cover rounded-2xl"
          />
          <img
            src={images.joggerBack}
            alt="Joggers Back"
            className="w-full h-[500px] object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <div className="space-y-12">
          {/* Color Selection */}
          <div className="text-center">
            <p className="text-lg font-semibold text-[#1d1d1f] mb-6">Available in five finishes</p>
            <div className="flex justify-center">
              <ColorSelector
                selectedColor={selectedColor}
                onColorChange={setSelectedColor}
                variant="swatches"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 py-12 border-y border-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#f5f5f7] flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👕</span>
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-2">Premium Cotton</h3>
              <p className="text-sm text-[#86868b]">100% cotton for all-day comfort</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#f5f5f7] flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🇬🇧</span>
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-2">British Made</h3>
              <p className="text-sm text-[#86868b]">Crafted with precision in Britain</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#f5f5f7] flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🥊</span>
              </div>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-2">Oracle Official</h3>
              <p className="text-sm text-[#86868b]">Authentic embroidered branding</p>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="bg-[#f5f5f7] rounded-2xl p-6 text-center">
            <p className="text-sm text-[#1d1d1f] leading-relaxed">
              Ships from the United Kingdom. International delivery available.<br />
              Select your size and shipping address at checkout.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center space-y-4">
            <button className="ob-btn ob-btn-primary text-lg px-12">
              Add to Bag
            </button>
            <div>
              <button className="text-[#06c] text-base font-medium hover:underline">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
