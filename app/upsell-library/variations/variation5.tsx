// VARIATION 5: Stacked Impact - Vertical layout with bold imagery
export function UpsellVariation5() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-block px-5 py-2 bg-gradient-to-r from-red-600 to-black text-white text-sm font-bold rounded-full">
          20% OFF • THIS PAGE ONLY
        </div>
        <h2 className="text-5xl font-bold text-gray-900">
          Gear up.
        </h2>
        <p className="text-xl text-gray-600 max-w-lg mx-auto">
          Add the Oracle Boxing Tracksuit to your order and save £32.
        </p>
      </div>

      {/* Large Hero Image */}
      <div className="rounded-3xl overflow-hidden shadow-2xl">
        <img
          src="https://media.oracleboxing.com/tracksuit/hoodie_brown_front.webp"
          alt="Oracle Boxing Tracksuit"
          className="w-full h-[500px] object-cover"
        />
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-3 gap-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl">👕</span>
          </div>
          <p className="text-sm font-semibold text-gray-900">100% Cotton</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl">🇬🇧</span>
          </div>
          <p className="text-sm font-semibold text-gray-900">Made in Britain</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl">🎯</span>
          </div>
          <p className="text-sm font-semibold text-gray-900">Official Merch</p>
        </div>
      </div>

      {/* Pricing Card */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-gray-600 mb-1">Regular Price</p>
            <p className="text-2xl text-gray-400 line-through">£160</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600 mb-1">Your Price Today</p>
            <p className="text-5xl font-bold text-gray-900">£128</p>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full bg-black text-white py-5 rounded-2xl font-bold text-lg hover:bg-gray-900 transition-all shadow-lg">
            Yes, Add to My Order
          </button>
          <button className="w-full text-gray-600 py-3 font-medium hover:text-gray-900">
            No, I'll skip this offer
          </button>
        </div>
      </div>
    </div>
  )
}
