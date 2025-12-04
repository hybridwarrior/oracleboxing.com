// VARIATION 11: Color Grid Showcase - Grid of all color options
import { ColorSelector } from '../components/ColorSelector'

export function UpsellVariation11() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-1 bg-black text-white text-xs font-bold rounded-full mb-4">
          20% OFF TODAY
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Choose Your Color
        </h2>
        <p className="text-lg text-gray-600">
          Premium Oracle Boxing Tracksuit — Available in 5 colors
        </p>
      </div>

      {/* Color Grid */}
      <ColorSelector variant="grid" className="mb-8" />

      {/* Details Card */}
      <div className="bg-gray-50 rounded-3xl p-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Features */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 mb-4">Premium Features</h3>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm text-gray-700">100% cotton</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm text-gray-700">Made in Britain</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm text-gray-700">Official branding</span>
            </div>
          </div>

          {/* Price */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Success Page Price</p>
            <div className="flex items-baseline gap-2 justify-center">
              <span className="text-xl text-gray-400 line-through">£160</span>
              <span className="text-4xl font-bold text-gray-900">£128</span>
            </div>
            <p className="text-sm text-red-600 font-semibold mt-1">Save £32</p>
          </div>

          {/* CTA */}
          <div className="space-y-2">
            <button className="w-full bg-black text-white py-4 rounded-full font-bold hover:bg-gray-900 transition-all">
              Add to Order
            </button>
            <button className="w-full text-gray-600 py-2 text-sm hover:text-gray-900">
              No thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
