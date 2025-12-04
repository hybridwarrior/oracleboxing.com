// VARIATION 7: Minimalist - Ultra-clean with maximum whitespace
export function UpsellVariation7() {
  return (
    <div className="max-w-xl mx-auto py-12">
      <div className="space-y-12">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src="https://media.oracleboxing.com/tracksuit/hoodie_green_front.webp"
            alt="Oracle Boxing Tracksuit"
            className="w-80 h-80 object-cover rounded-3xl shadow-sm"
          />
        </div>

        {/* Content */}
        <div className="text-center space-y-8">
          {/* Title */}
          <div className="space-y-3">
            <h3 className="text-3xl font-semibold text-gray-900">
              Oracle Boxing Tracksuit
            </h3>
            <p className="text-gray-500">
              Premium. Limited. Exclusive.
            </p>
          </div>

          {/* Price */}
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-4">
              <span className="text-xl text-gray-300 line-through">£160</span>
              <span className="text-4xl font-semibold text-gray-900">£128</span>
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-wider">20% off this page</p>
          </div>

          {/* Features */}
          <div className="flex justify-center gap-8 text-sm text-gray-600">
            <span>100% Cotton</span>
            <span>•</span>
            <span>Made in Britain</span>
            <span>•</span>
            <span>Limited Stock</span>
          </div>

          {/* CTA */}
          <div className="space-y-3 pt-4">
            <button className="w-full bg-gray-900 text-white py-4 rounded-full font-medium hover:bg-black transition-colors">
              Add to Order
            </button>
            <button className="text-gray-400 text-sm hover:text-gray-600">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
