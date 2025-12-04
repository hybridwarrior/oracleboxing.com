// VARIATION 3: Premium Card - Elegant card design with subtle shadows
export function UpsellVariation3() {
  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        {/* Image */}
        <div className="relative h-80">
          <img
            src="https://media.oracleboxing.com/tracksuit/hoodie_green_front.webp"
            alt="Oracle Boxing Tracksuit"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <span className="bg-black text-white px-4 py-2 rounded-full text-xs font-semibold">
              20% OFF
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Oracle Boxing Tracksuit
            </h3>
            <p className="text-gray-600">
              Represent the community. Premium quality. Exclusive design.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">✓</span>
              <span className="text-gray-700">We'll contact you for sizing and shipping</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">✓</span>
              <span className="text-gray-700">Limited stock - reserve yours now</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 mt-0.5">✓</span>
              <span className="text-gray-700">Success page exclusive discount</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Pricing */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Special Price</p>
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-gray-400 line-through">£160</span>
                <span className="text-3xl font-bold text-gray-900">£128</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-2">
            <button className="w-full bg-gray-900 text-white py-4 rounded-full font-semibold hover:bg-black transition-all">
              Add to Order — £128
            </button>
            <button className="w-full text-gray-600 text-sm py-2 hover:text-gray-900">
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
