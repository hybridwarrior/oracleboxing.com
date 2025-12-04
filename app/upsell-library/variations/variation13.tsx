// VARIATION 13: Before/After Split - Front and back view comparison
export function UpsellVariation13() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-1 bg-black text-white text-xs font-bold rounded-full mb-4">
          SUCCESS PAGE EXCLUSIVE
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Complete Your Order
        </h2>
        <p className="text-lg text-gray-600">
          Premium Oracle Boxing Tracksuit — 20% off today only
        </p>
      </div>

      {/* Color Pairs Grid (Front & Back Views) */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Black */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <img
              src="https://media.oracleboxing.com/tracksuit/hoodie_black_front.webp"
              alt="Black Front"
              className="w-full h-40 object-cover rounded-xl"
            />
            <img
              src="https://media.oracleboxing.com/tracksuit/hoodie_black_back.webp"
              alt="Black Back"
              className="w-full h-40 object-cover rounded-xl"
            />
          </div>
          <p className="text-center font-semibold text-gray-900">Black</p>
        </div>

        {/* Blue */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <img
              src="https://media.oracleboxing.com/tracksuit/hoodie_blue_front.webp"
              alt="Blue Front"
              className="w-full h-40 object-cover rounded-xl"
            />
            <img
              src="https://media.oracleboxing.com/tracksuit/hoodie_blue_back.webp"
              alt="Blue Back"
              className="w-full h-40 object-cover rounded-xl"
            />
          </div>
          <p className="text-center font-semibold text-gray-900">Blue</p>
        </div>

        {/* Green */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <img
              src="https://media.oracleboxing.com/tracksuit/hoodie_green_front.webp"
              alt="Green Front"
              className="w-full h-40 object-cover rounded-xl"
            />
            <img
              src="https://media.oracleboxing.com/tracksuit/hoodie_green_back.webp"
              alt="Green Back"
              className="w-full h-40 object-cover rounded-xl"
            />
          </div>
          <p className="text-center font-semibold text-gray-900">Green</p>
        </div>
      </div>

      {/* Additional Colors Row */}
      <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto">
        {/* Grey */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <img
              src="https://media.oracleboxing.com/tracksuit/hoodie_grey_front.webp"
              alt="Grey Front"
              className="w-full h-40 object-cover rounded-xl"
            />
            <img
              src="https://media.oracleboxing.com/tracksuit/hoodie_grey_back.webp"
              alt="Grey Back"
              className="w-full h-40 object-cover rounded-xl"
            />
          </div>
          <p className="text-center font-semibold text-gray-900">Grey</p>
        </div>

        {/* Brown */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <img
              src="https://media.oracleboxing.com/tracksuit/hoodie_brown_front.webp"
              alt="Brown Front"
              className="w-full h-40 object-cover rounded-xl"
            />
            <img
              src="https://media.oracleboxing.com/tracksuit/hoodie_brown_back.webp"
              alt="Brown Back"
              className="w-full h-40 object-cover rounded-xl"
            />
          </div>
          <p className="text-center font-semibold text-gray-900">Brown</p>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {/* Features */}
          <div className="space-y-2">
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
              <span className="text-sm text-gray-700">Official branding</span>
            </div>
          </div>

          {/* Price */}
          <div className="text-center">
            <div className="flex items-baseline gap-2 justify-center mb-1">
              <span className="text-lg text-gray-400 line-through">£160</span>
              <span className="text-3xl font-bold text-gray-900">£128</span>
            </div>
            <p className="text-sm text-red-600 font-semibold">Save £32 today</p>
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
