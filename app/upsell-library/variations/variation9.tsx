// VARIATION 9: Clean Grid - Structured layout with clear sections
export function UpsellVariation9() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left: Image */}
        <div className="md:col-span-2">
          <div className="sticky top-8">
            <img
              src="https://media.oracleboxing.com/tracksuit/hoodie_brown_front.webp"
              alt="Oracle Boxing Tracksuit"
              className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
            />
          </div>
        </div>

        {/* Right: Details */}
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-md">
            20% OFF
          </div>

          {/* Product Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Oracle Boxing Tracksuit
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Premium tracksuit designed for boxers who demand quality.
              Limited availability.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3 py-4 border-y border-gray-200">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-600 text-xs">✓</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">100% Cotton</p>
                <p className="text-xs text-gray-600">Premium quality material</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-600 text-xs">✓</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Made in Britain</p>
                <p className="text-xs text-gray-600">Premium craftsmanship</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-600 text-xs">✓</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Official Branding</p>
                <p className="text-xs text-gray-600">Embroidered Oracle logo</p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-lg text-gray-400 line-through">£160</span>
              <span className="text-4xl font-bold text-gray-900">£128</span>
            </div>
            <p className="text-sm text-gray-600">Success page exclusive</p>
          </div>

          {/* CTA */}
          <div className="space-y-3">
            <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-900 transition-all">
              Add to Order
            </button>
            <button className="w-full text-gray-500 py-2 text-sm hover:text-gray-900">
              No thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
