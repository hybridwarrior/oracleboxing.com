// VARIATION 20: Apple Focused - Distraction-free decision making
'use client'

import { useState } from 'react'
import { ColorSelector, getColorImages, type TrackSuitColor } from '../components/ColorSelector'

export function UpsellVariation20() {
  const [selectedColor, setSelectedColor] = useState<TrackSuitColor>('black')
  const images = getColorImages(selectedColor)

  if (!images) return null

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4">
      <div className="max-w-4xl w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Product Images */}
          <div>
            <div className="grid grid-cols-2 gap-1 rounded-3xl overflow-hidden shadow-2xl">
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
          </div>

          {/* Right: Focused Content */}
          <div className="space-y-8">
            {/* Title */}
            <div>
              <h1 className="text-5xl font-bold text-[#1d1d1f] mb-3" style={{ letterSpacing: '-0.03em' }}>
                Oracle Boxing Tracksuit
              </h1>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-semibold text-[#1d1d1f]">£128</span>
                <span className="text-xl text-[#86868b] line-through">£160</span>
              </div>
            </div>

            {/* Color */}
            <div>
              <p className="text-sm font-semibold text-[#1d1d1f] mb-4">Color — <span className="capitalize font-normal text-[#86868b]">{selectedColor}</span></p>
              <ColorSelector
                selectedColor={selectedColor}
                onColorChange={setSelectedColor}
                variant="swatches"
              />
            </div>

            {/* Simple Features */}
            <div className="space-y-3 py-6 border-y border-gray-200">
              <p className="text-base text-[#1d1d1f] font-medium">100% cotton construction</p>
              <p className="text-base text-[#1d1d1f] font-medium">Made in Britain</p>
              <p className="text-base text-[#1d1d1f] font-medium">Official Oracle branding</p>
            </div>

            {/* Delivery */}
            <div className="flex items-start gap-3 bg-[#f5f5f7] rounded-xl p-4">
              <svg className="w-5 h-5 text-[#1d1d1f] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-[#1d1d1f] mb-1">Ships from UK</p>
                <p className="text-sm text-[#86868b]">Size and address selection at checkout</p>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-3 pt-4">
              <button className="ob-btn ob-btn-primary w-full text-lg">
                Add to Bag
              </button>
              <button className="w-full text-[#06c] py-3 text-base font-medium hover:underline">
                Continue Shopping
              </button>
            </div>

            {/* Save Amount */}
            <p className="text-center text-sm text-[#06c] font-semibold">
              Save £32 with this exclusive offer
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
