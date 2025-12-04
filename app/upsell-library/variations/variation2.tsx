// VARIATION 2: Bold & Direct - Strong headlines with urgency
export function UpsellVariation2() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 max-w-3xl mx-auto">
      {/* Badge */}
      <div className="mb-6">
        <span className="inline-block px-5 py-2 bg-red-600 text-white text-sm font-bold rounded-full">
          LIMITED TIME: 20% OFF
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <div>
          <img
            src="https://media.oracleboxing.com/tracksuit/hoodie_blue_front.webp"
            alt="Oracle Boxing Tracksuit"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>

        {/* Right: Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Don't Miss This.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Premium tracksuit. Oracle branding.
              <strong className="text-gray-900"> 20% off this page only.</strong>
            </p>
          </div>

          {/* Features */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-sm">100% cotton</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-sm">Made in Britain</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-sm">Official Oracle branding</span>
            </div>
          </div>

          {/* Price */}
          <div className="py-4">
            <div className="flex items-baseline gap-2">
              <span className="text-lg text-gray-500 line-through">£160</span>
              <span className="text-4xl font-bold text-gray-900">£128</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">One-time offer on this page</p>
          </div>

          {/* CTA */}
          <div className="space-y-2">
            <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-900 transition-all shadow-lg">
              Add to My Order
            </button>
            <button className="w-full text-gray-500 py-2 text-sm hover:text-gray-900">
              No thanks, I'll pay full price later
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
