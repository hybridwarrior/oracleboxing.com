'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { UpsellVariation1 } from './variations/variation1'
import { UpsellVariation2 } from './variations/variation2'
import { UpsellVariation3 } from './variations/variation3'
import { UpsellVariation4 } from './variations/variation4'
import { UpsellVariation5 } from './variations/variation5'
import { UpsellVariation6 } from './variations/variation6'
import { UpsellVariation7 } from './variations/variation7'
import { UpsellVariation8 } from './variations/variation8'
import { UpsellVariation9 } from './variations/variation9'
import { UpsellVariation10 } from './variations/variation10'
import { UpsellVariation11 } from './variations/variation11'
import { UpsellVariation12 } from './variations/variation12'
import { UpsellVariation13 } from './variations/variation13'
import { UpsellVariation14 } from './variations/variation14'
import { UpsellVariation15 } from './variations/variation15'
import { UpsellVariation16 } from './variations/variation16'
import { UpsellVariation17 } from './variations/variation17'
import { UpsellVariation18 } from './variations/variation18'
import { UpsellVariation19 } from './variations/variation19'
import { UpsellVariation20 } from './variations/variation20'

const variations = [
  { id: 1, name: 'Minimal Elegance', component: UpsellVariation1 },
  { id: 2, name: 'Bold & Direct', component: UpsellVariation2 },
  { id: 3, name: 'Premium Card', component: UpsellVariation3 },
  { id: 4, name: 'Split Hero', component: UpsellVariation4 },
  { id: 5, name: 'Stacked Impact', component: UpsellVariation5 },
  { id: 6, name: 'Product Showcase', component: UpsellVariation6 },
  { id: 7, name: 'Minimalist', component: UpsellVariation7 },
  { id: 8, name: 'Full Bleed', component: UpsellVariation8 },
  { id: 9, name: 'Clean Grid', component: UpsellVariation9 },
  { id: 10, name: 'Editorial', component: UpsellVariation10 },
  { id: 11, name: 'Color Grid Showcase', component: UpsellVariation11 },
  { id: 12, name: 'Carousel Style', component: UpsellVariation12 },
  { id: 13, name: 'Before/After Split', component: UpsellVariation13 },
  { id: 14, name: 'Color Swatch Focus', component: UpsellVariation14 },
  { id: 15, name: 'Stacked Polaroids', component: UpsellVariation15 },
  { id: 16, name: 'Apple Minimal', component: UpsellVariation16 },
  { id: 17, name: 'Apple Card Style', component: UpsellVariation17 },
  { id: 18, name: 'Apple Store Product', component: UpsellVariation18 },
  { id: 19, name: 'Apple Hero', component: UpsellVariation19 },
  { id: 20, name: 'Apple Focused', component: UpsellVariation20 },
]

export default function UpsellLibraryPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? variations.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === variations.length - 1 ? 0 : prev + 1))
  }

  const CurrentVariation = variations[currentIndex].component

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Tracksuit Upsell Library</h1>
              <p className="text-sm text-gray-600 mt-1">
                Variation {currentIndex + 1} of {variations.length}: {variations[currentIndex].name}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={handlePrevious}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Variation Pills */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {variations.map((variation, index) => (
              <button
                key={variation.id}
                onClick={() => setCurrentIndex(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  currentIndex === index
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {variation.id}. {variation.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Variation Preview */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <CurrentVariation />
          </div>
        </div>
      </div>
    </div>
  )
}
