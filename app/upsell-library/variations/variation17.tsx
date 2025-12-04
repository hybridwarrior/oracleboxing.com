// VARIATION 17: Apple Card Style - Elevated product card
'use client'

import { useState } from 'react'
import { ColorSelector, getColorImages, type TrackSuitColor } from '../components/ColorSelector'

export function UpsellVariation17() {
  const [selectedColor, setSelectedColor] = useState<TrackSuitColor>('black')
  const images = getColorImages(selectedColor)

  if (!images) return null

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-[28px] overflow-hidden shadow-2xl">
        <div className="grid md:grid-cols-5 gap-0">
          {/* Left: 4-Image Grid - 3 columns */}
          <div className="md:col-span-3 grid grid-cols-2 gap-0">
            <img
              src={images.hoodieFront}
              alt="Hoodie Front"
              className="w-full h-80 object-cover"
            />
            <img
              src={images.hoodieBack}
              alt="Hoodie Back"
              className="w-full h-80 object-cover"
            />
            <img
              src={images.joggerFront}
              alt="Joggers Front"
              className="w-full h-80 object-cover"
            />
            <img
              src={images.joggerBack}
              alt="Joggers Back"
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Right: Content - 2 columns */}
          <div className="md:col-span-2 p-10 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Title */}
              <div>
                <p className="text-sm font-semibold text-[#86868b] uppercase tracking-wider mb-2">Apparel</p>
                <h2 className="text-3xl font-bold text-[#1d1d1f] mb-3" style={{ letterSpacing: '-0.02em' }}>
                  Oracle Boxing<br />Tracksuit
                </h2>
              </div>

              {/* Color Selector */}
              <div>
                <p className="text-sm font-semibold text-[#1d1d1f] mb-3">Finish</p>
                <ColorSelector
                  selectedColor={selectedColor}
                  onColorChange={setSelectedColor}
                  variant="swatches"
                />
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#1d1d1f]"></div>
                  <p className="text-sm text-[#1d1d1f] font-medium">100% cotton construction</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#1d1d1f]"></div>
                  <p className="text-sm text-[#1d1d1f] font-medium">Made in Britain</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#1d1d1f]"></div>
                  <p className="text-sm text-[#1d1d1f] font-medium">Official Oracle branding</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 mt-8">
              {/* Price */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-bold text-[#1d1d1f]" style={{ letterSpacing: '-0.02em' }}>£128</span>
                  <span className="text-lg text-[#86868b] line-through">£160</span>
                </div>
                <p className="text-xs text-[#06c] font-medium">Save £32 today</p>
              </div>

              {/* Notice */}
              <p className="text-xs text-[#86868b] leading-relaxed">
                Shipping from UK. You'll select size and address after checkout.
              </p>

              {/* CTA */}
              <div className="space-y-2">
                <button className="ob-btn ob-btn-primary w-full">
                  Add to Bag
                </button>
                <button className="w-full text-[#06c] py-2 text-sm font-medium hover:underline">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
