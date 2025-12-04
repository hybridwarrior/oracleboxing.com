// VARIATION 4: Split Hero - Full-width split layout
export function UpsellVariation4() {
  return (
    <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-gray-50">
      {/* Left: Image */}
      <div className="relative h-[500px] md:h-auto">
        <img
          src="https://media.oracleboxing.com/tracksuit/hoodie_grey_front.webp"
          alt="Oracle Boxing Tracksuit"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Content */}
      <div className="bg-white p-12 flex flex-col justify-center">
        <div className="space-y-8">
          {/* Badge */}
          <div>
            <span className="inline-block px-4 py-1 bg-black text-white text-xs font-bold rounded-full">
              SUCCESS PAGE EXCLUSIVE
            </span>
          </div>

          {/* Headline */}
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              One more thing.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Complete your order with the official Oracle Boxing tracksuit.
              Available at 20% off, only on this page.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-gray-700">100% cotton, built to last</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-gray-700">Made in Britain</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm">✓</span>
              </div>
              <span className="text-gray-700">Official Oracle branding</span>
            </div>
          </div>

          {/* Price */}
          <div className="pt-4">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-xl text-gray-400 line-through">£160</span>
              <span className="text-5xl font-bold text-gray-900">£128</span>
            </div>
            <p className="text-sm text-gray-600">Save £32 on this page only</p>
          </div>

          {/* CTA */}
          <div className="space-y-3 pt-4">
            <button className="w-full bg-black text-white py-5 rounded-full font-bold text-lg hover:bg-gray-900 transition-all">
              Add Tracksuit — £128
            </button>
            <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-full font-medium hover:border-gray-400 transition-all">
              Continue without tracksuit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
