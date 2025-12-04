'use client'

import { useState } from 'react'
import { ChevronDown, Check, X } from 'lucide-react'

// Mock product data
const mockProduct = {
  id: 'vault',
  title: 'Coaching Call Replays',
  shortDescription: '220+ premium coaching calls with real fighters',
  price: 97,
  image: 'https://media.oracleboxing.com/Website/optimized/products/rcv_tn-large.webp',
  description: 'Get access to our complete library of coaching call recordings. Watch real coaching sessions and learn from actual fighter questions.',
  benefits: [
    'Over 220 coaching call recordings',
    'New calls added monthly',
    'Real fighter questions answered',
    'Lifetime access to all content'
  ]
}

export default function OrderBumpLibrary() {
  const [selected, setSelected] = useState<{[key: string]: boolean}>({})

  const toggleSelection = (id: string) => {
    setSelected(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Bump Library</h1>
          <p className="text-lg text-gray-600">10 Apple-inspired variations</p>
        </div>

        <div className="space-y-24">

          {/* Variation 1: Classic Card */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">1. Classic Card</h2>
            <div className="max-w-2xl mx-auto">
              <ClassicCard product={mockProduct} isSelected={selected['v1']} onToggle={() => toggleSelection('v1')} />
            </div>
          </div>

          {/* Variation 2: Glass Morphism */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">2. Glass Morphism</h2>
            <div className="max-w-2xl mx-auto">
              <GlassMorphism product={mockProduct} isSelected={selected['v2']} onToggle={() => toggleSelection('v2')} />
            </div>
          </div>

          {/* Variation 3: Product Hero */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">3. Product Hero</h2>
            <div className="max-w-4xl mx-auto">
              <ProductHero product={mockProduct} isSelected={selected['v3']} onToggle={() => toggleSelection('v3')} />
            </div>
          </div>

          {/* Variation 4: Compact Inline */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">4. Compact Inline</h2>
            <div className="max-w-2xl mx-auto">
              <CompactInline product={mockProduct} isSelected={selected['v4']} onToggle={() => toggleSelection('v4')} />
            </div>
          </div>

          {/* Variation 5: Premium Banner */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">5. Premium Banner</h2>
            <div className="max-w-4xl mx-auto">
              <PremiumBanner product={mockProduct} isSelected={selected['v5']} onToggle={() => toggleSelection('v5')} />
            </div>
          </div>

          {/* Variation 6: Split View */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">6. Split View</h2>
            <div className="max-w-4xl mx-auto">
              <SplitView product={mockProduct} isSelected={selected['v6']} onToggle={() => toggleSelection('v6')} />
            </div>
          </div>

          {/* Variation 7: Minimalist Checkbox */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">7. Minimalist Checkbox</h2>
            <div className="max-w-2xl mx-auto">
              <MinimalistCheckbox product={mockProduct} isSelected={selected['v7']} onToggle={() => toggleSelection('v7')} />
            </div>
          </div>

          {/* Variation 8: Feature Grid */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">8. Feature Grid</h2>
            <div className="max-w-md mx-auto">
              <FeatureGrid product={mockProduct} isSelected={selected['v8']} onToggle={() => toggleSelection('v8')} />
            </div>
          </div>

          {/* Variation 9: Floating Card */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">9. Floating Card</h2>
            <div className="max-w-sm mx-auto">
              <FloatingCard product={mockProduct} isSelected={selected['v9']} onToggle={() => toggleSelection('v9')} />
            </div>
          </div>

          {/* Variation 10: Timeline Style */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">10. Timeline Style</h2>
            <div className="max-w-3xl mx-auto">
              <TimelineStyle product={mockProduct} isSelected={selected['v10']} onToggle={() => toggleSelection('v10')} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

// Variation Components

function ClassicCard({ product, isSelected, onToggle }: any) {
  return (
    <div
      onClick={onToggle}
      className={`bg-white rounded-xl border transition-all duration-300 cursor-pointer ${
        isSelected ? 'border-black shadow-lg' : 'border-gray-200 shadow-sm hover:shadow-md'
      }`}
    >
      <div className="p-8">
        <div className="flex items-start gap-6">
          <div className={`flex-shrink-0 w-5 h-5 rounded border-2 transition-all ${
            isSelected ? 'bg-black border-black' : 'border-gray-300'
          } flex items-center justify-center`}>
            {isSelected && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{product.shortDescription}</p>
            <p className="text-2xl font-semibold text-gray-900">${product.price}</p>
          </div>
          <img src={product.image} alt={product.title} className="w-20 h-20 rounded-lg object-cover" />
        </div>
      </div>
    </div>
  )
}

function GlassMorphism({ product, isSelected, onToggle }: any) {
  return (
    <div
      onClick={onToggle}
      className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ${
        isSelected ? 'ring-2 ring-black' : 'ring-1 ring-white/20'
      }`}
      style={{
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div className="p-8">
        <div className="flex items-start gap-6">
          <img src={product.image} alt={product.title} className="w-24 h-24 rounded-xl object-cover shadow-lg" />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                isSelected ? 'bg-black' : 'bg-white border border-gray-300'
              }`}>
                {isSelected && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">{product.shortDescription}</p>
            <p className="text-3xl font-bold text-gray-900">${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductHero({ product, isSelected, onToggle }: any) {
  return (
    <div
      onClick={onToggle}
      className={`bg-white rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ${
        isSelected ? 'ring-2 ring-black shadow-2xl' : 'shadow-sm hover:shadow-lg'
      }`}
    >
      <div className="grid md:grid-cols-2 gap-0">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 flex items-center justify-center">
          <img src={product.image} alt={product.title} className="w-full max-w-xs rounded-2xl shadow-lg" />
        </div>
        <div className="p-12 flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">{product.title}</h3>
            <p className="text-lg text-gray-600">{product.shortDescription}</p>
          </div>
          <div className="space-y-2 mb-8">
            {product.benefits.slice(0, 3).map((benefit: string, i: number) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" strokeWidth={2.5} />
                <span className="text-sm text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <p className="text-4xl font-bold text-gray-900">${product.price}</p>
            <button className={`px-8 py-3 rounded-full font-semibold transition-all ${
              isSelected
                ? 'bg-black text-white'
                : 'bg-gray-900 text-white hover:bg-black'
            }`}>
              {isSelected ? '✓ Added' : 'Add to order'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function CompactInline({ product, isSelected, onToggle }: any) {
  return (
    <div
      onClick={onToggle}
      className={`bg-white rounded-lg border px-6 py-4 cursor-pointer transition-all duration-200 ${
        isSelected ? 'border-black bg-gray-50' : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
          isSelected ? 'bg-black border-black' : 'border-gray-300'
        }`}>
          {isSelected && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
        </div>
        <img src={product.image} alt={product.title} className="w-12 h-12 rounded object-cover" />
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-gray-900 truncate">{product.title}</h3>
          <p className="text-sm text-gray-600 truncate">{product.shortDescription}</p>
        </div>
        <p className="text-xl font-bold text-gray-900">${product.price}</p>
      </div>
    </div>
  )
}

function PremiumBanner({ product, isSelected, onToggle }: any) {
  return (
    <div
      onClick={onToggle}
      className={`rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
        isSelected ? 'ring-2 ring-black shadow-2xl' : 'shadow-lg hover:shadow-xl'
      }`}
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      <div className="p-10 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm opacity-90 mb-2">UPGRADE YOUR ORDER</p>
            <h3 className="text-3xl font-bold mb-2">{product.title}</h3>
            <p className="text-lg opacity-90">{product.shortDescription}</p>
          </div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isSelected ? 'bg-white' : 'bg-white/20 backdrop-blur-sm'
          }`}>
            {isSelected && <Check className="w-5 h-5 text-purple-600" strokeWidth={3} />}
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            {product.benefits.slice(0, 2).map((benefit: string, i: number) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4" strokeWidth={2.5} />
                <span className="text-sm opacity-90">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="text-right">
            <p className="text-sm opacity-75 mb-1">One-time payment</p>
            <p className="text-5xl font-bold">${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function SplitView({ product, isSelected, onToggle }: any) {
  return (
    <div
      onClick={onToggle}
      className={`bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
        isSelected ? 'ring-2 ring-black shadow-xl' : 'ring-1 ring-gray-200 shadow-sm hover:shadow-lg'
      }`}
    >
      <div className="grid md:grid-cols-2 divide-x divide-gray-100">
        <div className="p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
          <p className="text-gray-600 mb-6">{product.shortDescription}</p>
          <img src={product.image} alt={product.title} className="w-full rounded-xl" />
        </div>
        <div className="p-10 bg-gray-50 flex flex-col justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-4">What's included</p>
            <div className="space-y-3">
              {product.benefits.map((benefit: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-700" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total</p>
                <p className="text-3xl font-bold text-gray-900">${product.price}</p>
              </div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                isSelected ? 'bg-black' : 'bg-gray-200'
              }`}>
                {isSelected && <Check className="w-5 h-5 text-white" strokeWidth={3} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MinimalistCheckbox({ product, isSelected, onToggle }: any) {
  return (
    <div
      onClick={onToggle}
      className="cursor-pointer py-8 border-b border-gray-100 transition-all duration-200 hover:bg-gray-50"
    >
      <div className="flex items-start gap-6">
        <div className={`mt-1 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
          isSelected ? 'bg-black border-black scale-110' : 'border-gray-300'
        }`}>
          {isSelected && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
        </div>
        <div className="flex-1">
          <div className="flex items-baseline justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
            <p className="text-2xl font-bold text-gray-900 ml-4">${product.price}</p>
          </div>
          <p className="text-base text-gray-600 leading-relaxed">{product.shortDescription}</p>
        </div>
      </div>
    </div>
  )
}

function FeatureGrid({ product, isSelected, onToggle }: any) {
  return (
    <div
      onClick={onToggle}
      className={`bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
        isSelected
          ? 'ring-2 ring-black shadow-xl scale-105'
          : 'ring-1 ring-gray-200 shadow-sm hover:shadow-lg hover:scale-102'
      }`}
    >
      <div className="relative">
        <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-xl mb-4" />
        <div className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all ${
          isSelected ? 'bg-black' : 'bg-white'
        }`}>
          {isSelected && <Check className="w-5 h-5 text-white" strokeWidth={3} />}
        </div>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{product.shortDescription}</p>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {product.benefits.slice(0, 4).map((benefit: string, i: number) => (
          <div key={i} className="bg-gray-50 rounded-lg p-2">
            <p className="text-xs text-gray-700 line-clamp-2">{benefit}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <p className="text-2xl font-bold text-gray-900">${product.price}</p>
        <button className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
          isSelected
            ? 'bg-black text-white'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}>
          {isSelected ? 'Added' : 'Add'}
        </button>
      </div>
    </div>
  )
}

function FloatingCard({ product, isSelected, onToggle }: any) {
  return (
    <div
      onClick={onToggle}
      className={`bg-white rounded-3xl p-6 cursor-pointer transition-all duration-300 ${
        isSelected
          ? 'shadow-2xl scale-105 ring-2 ring-black'
          : 'shadow-lg hover:shadow-2xl hover:scale-102'
      }`}
      style={{
        transform: isSelected ? 'translateY(-8px)' : 'translateY(0)',
      }}
    >
      <div className="relative mb-4">
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-2xl" />
        <div className={`absolute -bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all ${
          isSelected ? 'bg-black scale-110' : 'bg-white scale-100'
        }`}>
          {isSelected ? (
            <Check className="w-6 h-6 text-white" strokeWidth={3} />
          ) : (
            <span className="text-2xl">+</span>
          )}
        </div>
      </div>
      <div className="pt-2">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.shortDescription}</p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500">One-time</p>
            <p className="text-3xl font-bold text-gray-900">${product.price}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-green-600 font-semibold">SPECIAL OFFER</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function TimelineStyle({ product, isSelected, onToggle }: any) {
  return (
    <div
      onClick={onToggle}
      className={`bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
        isSelected ? 'ring-2 ring-black shadow-xl' : 'ring-1 ring-gray-200 shadow-sm hover:shadow-lg'
      }`}
    >
      <div className="grid grid-cols-3 divide-x divide-gray-100">
        <div className="p-8 flex flex-col items-center justify-center text-center bg-gray-50">
          <div className="text-4xl mb-3">📦</div>
          <p className="text-sm font-medium text-gray-900">Your Current Order</p>
          <p className="text-xs text-gray-500 mt-1">Great choice!</p>
        </div>
        <div className={`p-8 flex flex-col items-center justify-center text-center transition-all ${
          isSelected ? 'bg-black text-white' : 'bg-white'
        }`}>
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
            isSelected ? 'bg-white text-black' : 'bg-gray-100'
          }`}>
            {isSelected ? (
              <Check className="w-6 h-6" strokeWidth={3} />
            ) : (
              <span className="text-xl">+</span>
            )}
          </div>
          <p className={`text-sm font-bold mb-1 ${isSelected ? 'text-white' : 'text-gray-900'}`}>
            {product.title}
          </p>
          <p className={`text-2xl font-bold ${isSelected ? 'text-white' : 'text-gray-900'}`}>
            ${product.price}
          </p>
        </div>
        <div className="p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="text-4xl mb-3">✨</div>
          <p className="text-sm font-medium text-gray-900">Complete Package</p>
          <p className="text-xs text-green-700 font-semibold mt-1">Best Value</p>
        </div>
      </div>
    </div>
  )
}
