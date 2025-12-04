// VARIATION 12: Carousel Style - Horizontal scrolling color selector
import { ColorSelector } from '../components/ColorSelector'

export function UpsellVariation12() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1 bg-red-600 text-white text-xs font-bold rounded-full mb-4">
            EXCLUSIVE 20% OFF
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Oracle Boxing Tracksuit
          </h2>
          <p className="text-lg text-gray-600">
            5 premium colors available • 100% cotton • Made in Britain
          </p>
        </div>

        {/* Horizontal Scrolling Color Selector */}
        <div className="mb-8 overflow-x-auto pb-4 -mx-4 px-4">
          <ColorSelector variant="thumbnails" />
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Features */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-gray-700">100% cotton construction</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-gray-700">Made in Britain</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-gray-700">Official Oracle branding</span>
            </div>
          </div>

          {/* Price & CTA */}
          <div className="space-y-4">
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-xl text-gray-400 line-through">£160</span>
                <span className="text-4xl font-bold text-gray-900">£128</span>
              </div>
              <p className="text-sm text-gray-600">Success page exclusive</p>
            </div>
            <button className="w-full bg-black text-white py-4 rounded-full font-bold hover:bg-gray-900 transition-all">
              Add to Order — £128
            </button>
            <button className="w-full text-gray-600 py-2 text-sm hover:text-gray-900">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
