// VARIATION 1: Minimal Elegance - Apple-style minimalism with clean typography
export function UpsellVariation1() {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Minimal badge */}
      <div className="text-center mb-6">
        <span className="inline-block px-4 py-1 bg-black text-white text-xs font-semibold tracking-wide rounded-full">
          EXCLUSIVE 20% OFF
        </span>
      </div>

      {/* Hero Image */}
      <div className="mb-8">
        <img
          src="https://media.oracleboxing.com/tracksuit/hoodie_black_front.webp"
          alt="Oracle Boxing Tracksuit"
          className="w-full h-[400px] object-cover rounded-3xl"
        />
      </div>

      {/* Minimal copy */}
      <div className="text-center space-y-6 mb-8">
        <h2 className="text-4xl font-semibold text-gray-900 tracking-tight">
          Complete the look.
        </h2>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Premium Oracle Boxing Tracksuit. Only available on this page.
        </p>
      </div>

      {/* Price */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3">
          <span className="text-2xl text-gray-400 line-through">£160</span>
          <span className="text-5xl font-semibold text-gray-900">£128</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">Success page exclusive</p>
      </div>

      {/* CTA */}
      <div className="space-y-3">
        <button className="w-full bg-black text-white py-4 rounded-full font-semibold text-lg hover:bg-gray-900 transition-all">
          Add to Order
        </button>
        <button className="w-full text-gray-600 py-3 font-medium text-sm hover:text-gray-900">
          No thanks
        </button>
      </div>
    </div>
  )
}
