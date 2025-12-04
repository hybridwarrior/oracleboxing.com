// VARIATION 18: Apple Store Product - Classic Apple Store layout
'use client'

import { useState } from 'react'
import { ColorSelector, getColorImages, type TrackSuitColor } from '../components/ColorSelector'

export function UpsellVariation18() {
  const [selectedColor, setSelectedColor] = useState<TrackSuitColor>('black')
  const images = getColorImages(selectedColor)

  if (!images) return null

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12">
        {/* Left: Product Images - 7 columns */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden bg-[#f5f5f7]">
              <img
                src={images.hoodieFront}
                alt="Hoodie Front"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#f5f5f7]">
              <img
                src={images.hoodieBack}
                alt="Hoodie Back"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#f5f5f7]">
              <img
                src={images.joggerFront}
                alt="Joggers Front"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#f5f5f7]">
              <img
                src={images.joggerBack}
                alt="Joggers Back"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right: Product Details - 5 columns */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-8 space-y-8">
            {/* Header */}
            <div>
              <p className="text-sm font-semibold text-[#bf4800] mb-2">New</p>
              <h1 className="text-4xl font-bold text-[#1d1d1f] mb-2" style={{ letterSpacing: '-0.02em' }}>
                Oracle Boxing Tracksuit
              </h1>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-semibold text-[#1d1d1f]">£128</span>
                <span className="text-lg text-[#86868b] line-through">£160</span>
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-base font-semibold text-[#1d1d1f]">Color</p>
                <p className="text-sm text-[#86868b] capitalize">{selectedColor}</p>
              </div>
              <ColorSelector
                selectedColor={selectedColor}
                onColorChange={setSelectedColor}
                variant="swatches"
              />
            </div>

            {/* Features */}
            <div className="space-y-4 py-6 border-y border-gray-200">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f5f5f7] flex items-center justify-center">
                  <span className="text-xl">🇬🇧</span>
                </div>
                <div>
                  <p className="text-base font-semibold text-[#1d1d1f]">Made in Britain</p>
                  <p className="text-sm text-[#86868b]">Premium craftsmanship and quality</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f5f5f7] flex items-center justify-center">
                  <span className="text-xl">👕</span>
                </div>
                <div>
                  <p className="text-base font-semibold text-[#1d1d1f]">100% Cotton</p>
                  <p className="text-sm text-[#86868b]">Superior comfort and breathability</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f5f5f7] flex items-center justify-center">
                  <span className="text-xl">🥊</span>
                </div>
                <div>
                  <p className="text-base font-semibold text-[#1d1d1f]">Official Oracle</p>
                  <p className="text-sm text-[#86868b]">Embroidered branding</p>
                </div>
              </div>
            </div>

            {/* Shipping Notice */}
            <div className="bg-[#f5f5f7] rounded-xl p-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-[#1d1d1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm text-[#1d1d1f] leading-relaxed">
                  International shipping from the UK. Select size and address at checkout.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <button className="ob-btn ob-btn-primary w-full text-lg">
                Add to Bag
              </button>
              <div className="flex gap-3">
                <button className="flex-1 text-[#06c] py-3 text-sm font-medium hover:underline">
                  Favorite
                </button>
                <button className="flex-1 text-[#06c] py-3 text-sm font-medium hover:underline">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
