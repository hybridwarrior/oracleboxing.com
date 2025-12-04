// VARIATION 6: Product Showcase - Multi-angle product photography
export function UpsellVariation6() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-1 bg-black text-white text-xs font-bold rounded-full mb-4">
          EXCLUSIVE OFFER
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Oracle Boxing Tracksuit
        </h2>
        <p className="text-lg text-gray-600">
          Premium apparel for the dedicated boxer. <strong>20% off today only.</strong>
        </p>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <img
          src="https://media.oracleboxing.com/tracksuit/hoodie_black_front.webp"
          alt="Tracksuit Black Front"
          className="w-full h-64 object-cover rounded-2xl"
        />
        <img
          src="https://media.oracleboxing.com/tracksuit/hoodie_black_back.webp"
          alt="Tracksuit Black Back"
          className="w-full h-64 object-cover rounded-2xl"
        />
        <img
          src="https://media.oracleboxing.com/tracksuit/hoodie_blue_front.webp"
          alt="Tracksuit Blue Front"
          className="w-full h-64 object-cover rounded-2xl"
        />
        <img
          src="https://media.oracleboxing.com/tracksuit/jogger_black_front.webp"
          alt="Tracksuit Jogger"
          className="w-full h-64 object-cover rounded-2xl"
        />
      </div>

      {/* Details & CTA */}
      <div className="bg-gray-50 rounded-3xl p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">Premium Features</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span>100% cotton for maximum comfort</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span>Made in Britain with premium craftsmanship</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span>Official Oracle Boxing embroidered logo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span>Perfect for training or casual wear</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500 mb-2">Success Page Price</p>
              <div className="flex items-baseline gap-3 justify-center md:justify-start">
                <span className="text-xl text-gray-400 line-through">£160</span>
                <span className="text-5xl font-bold text-gray-900">£128</span>
              </div>
              <p className="text-sm text-red-600 font-semibold mt-2">Save £32 (20% off)</p>
            </div>

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
    </div>
  )
}
