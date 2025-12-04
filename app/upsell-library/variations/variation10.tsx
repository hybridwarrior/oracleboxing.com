// VARIATION 10: Editorial - Magazine-style layout with storytelling
export function UpsellVariation10() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Editorial Header */}
      <div className="text-center space-y-4 py-8">
        <p className="text-sm uppercase tracking-widest text-gray-500">Oracle Boxing Collection</p>
        <h1 className="text-6xl font-bold text-gray-900 leading-tight">
          Train with<br />Purpose.
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The official Oracle Boxing tracksuit. Designed for those who take their craft seriously.
        </p>
      </div>

      {/* Large Feature Image */}
      <div className="relative">
        <img
          src="https://media.oracleboxing.com/tracksuit/hoodie_blue_back.webp"
          alt="Oracle Boxing Tracksuit"
          className="w-full h-[600px] object-cover rounded-3xl"
        />
        <div className="absolute top-8 left-8 bg-black text-white px-6 py-3 rounded-full">
          <span className="font-bold text-sm">LIMITED EDITION</span>
        </div>
      </div>

      {/* Two-Column Details */}
      <div className="grid md:grid-cols-2 gap-12 py-8">
        {/* Left: Story */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">
            Designed for Boxers
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Every detail matters. 100% cotton provides comfort during training
              and style outside the gym. Made in Britain with premium craftsmanship.
            </p>
            <p>
              The Oracle Boxing tracksuit isn't just apparel—it's a statement.
              Join the community of dedicated boxers who refuse to compromise.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3 pt-4">
            <div className="flex items-center gap-3 text-sm">
              <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
              <span className="text-gray-700">100% cotton construction</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
              <span className="text-gray-700">Made in Britain</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
              <span className="text-gray-700">Embroidered Oracle branding</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
              <span className="text-gray-700">Limited production run</span>
            </div>
          </div>
        </div>

        {/* Right: Purchase */}
        <div className="space-y-8">
          <div className="bg-gray-50 rounded-3xl p-8 space-y-6">
            {/* Exclusive Badge */}
            <div className="inline-block">
              <span className="px-4 py-1 bg-black text-white text-xs font-bold rounded-full">
                SUCCESS PAGE EXCLUSIVE
              </span>
            </div>

            {/* Pricing */}
            <div>
              <p className="text-sm text-gray-500 mb-2">Exclusive Discount</p>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-2xl text-gray-400 line-through">£160</span>
                <span className="text-6xl font-bold text-gray-900">£128</span>
              </div>
              <div className="inline-block px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-md">
                Save £32 (20%)
              </div>
            </div>

            {/* Sizing Note */}
            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm text-gray-600">
                We'll contact you after purchase to confirm your size and shipping details.
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-3 pt-2">
              <button className="w-full bg-black text-white py-5 rounded-2xl font-bold text-lg hover:bg-gray-900 transition-all">
                Reserve Your Tracksuit
              </button>
              <button className="w-full text-gray-600 py-3 font-medium hover:text-gray-900">
                Continue without adding
              </button>
            </div>
          </div>

          {/* Trust Elements */}
          <div className="flex items-center justify-center gap-8 text-xs text-gray-500">
            <div className="text-center">
              <p className="font-semibold text-gray-900">✓ Secure</p>
              <p>Payment</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-gray-900">✓ Fast</p>
              <p>Shipping</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-gray-900">✓ Limited</p>
              <p>Stock</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
