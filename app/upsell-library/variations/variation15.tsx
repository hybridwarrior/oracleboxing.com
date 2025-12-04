// VARIATION 15: Stacked Polaroids - Casual scattered photo layout
export function UpsellVariation15() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1 bg-black text-white text-xs font-bold rounded-full mb-4">
          EXCLUSIVE OFFER
        </span>
        <h2 className="text-5xl font-bold text-gray-900 mb-3">
          Available in 5 Colors
        </h2>
        <p className="text-xl text-gray-600">
          Premium Oracle Boxing Tracksuit — 20% off this page only
        </p>
      </div>

      {/* Polaroid-style Color Showcase */}
      <div className="relative mb-12" style={{ minHeight: '500px' }}>
        {/* Black - Center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 bg-white p-4 rounded-lg shadow-2xl transform rotate-0 z-30">
          <img
            src="https://media.oracleboxing.com/tracksuit/hoodie_black_front.webp"
            alt="Black"
            className="w-full h-80 object-cover mb-3"
          />
          <p className="text-center font-bold text-gray-900">Black</p>
        </div>

        {/* Blue - Left Top */}
        <div className="absolute top-8 left-12 w-64 bg-white p-4 rounded-lg shadow-xl transform -rotate-12 z-20">
          <img
            src="https://media.oracleboxing.com/tracksuit/hoodie_blue_front.webp"
            alt="Blue"
            className="w-full h-80 object-cover mb-3"
          />
          <p className="text-center font-bold text-gray-900">Blue</p>
        </div>

        {/* Green - Right Top */}
        <div className="absolute top-12 right-12 w-64 bg-white p-4 rounded-lg shadow-xl transform rotate-12 z-20">
          <img
            src="https://media.oracleboxing.com/tracksuit/hoodie_green_front.webp"
            alt="Green"
            className="w-full h-80 object-cover mb-3"
          />
          <p className="text-center font-bold text-gray-900">Green</p>
        </div>

        {/* Grey - Bottom Left */}
        <div className="absolute bottom-0 left-24 w-64 bg-white p-4 rounded-lg shadow-xl transform rotate-6 z-10">
          <img
            src="https://media.oracleboxing.com/tracksuit/hoodie_grey_front.webp"
            alt="Grey"
            className="w-full h-80 object-cover mb-3"
          />
          <p className="text-center font-bold text-gray-900">Grey</p>
        </div>

        {/* Brown - Bottom Right */}
        <div className="absolute bottom-4 right-24 w-64 bg-white p-4 rounded-lg shadow-xl transform -rotate-6 z-10">
          <img
            src="https://media.oracleboxing.com/tracksuit/hoodie_brown_front.webp"
            alt="Brown"
            className="w-full h-80 object-cover mb-3"
          />
          <p className="text-center font-bold text-gray-900">Brown</p>
        </div>
      </div>

      {/* Bottom Info Card */}
      <div className="bg-gray-50 rounded-3xl p-8 mt-64">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Features */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 mb-3">Premium Quality</h3>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-sm text-gray-700">100% cotton</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-sm text-gray-700">Made in Britain</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-sm text-gray-700">Official Oracle branding</span>
            </div>
          </div>

          {/* Price */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Your Price Today</p>
            <div className="flex items-baseline gap-2 justify-center mb-1">
              <span className="text-xl text-gray-400 line-through">£160</span>
              <span className="text-5xl font-bold text-gray-900">£128</span>
            </div>
            <p className="text-sm text-red-600 font-semibold">Save £32 (20% off)</p>
          </div>

          {/* CTA */}
          <div className="space-y-2">
            <button className="w-full bg-black text-white py-5 rounded-full font-bold text-lg hover:bg-gray-900 transition-all">
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
