// VARIATION 8: Full Bleed - Immersive full-screen hero
export function UpsellVariation8() {
  return (
    <div className="relative rounded-3xl overflow-hidden h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://media.oracleboxing.com/tracksuit/hoodie_grey_back.webp"
          alt="Oracle Boxing Tracksuit"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col justify-end p-12">
        <div className="max-w-2xl space-y-6">
          {/* Badge */}
          <div>
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md text-white text-sm font-semibold rounded-full border border-white/30">
              SUCCESS PAGE EXCLUSIVE • 20% OFF
            </span>
          </div>

          {/* Headline */}
          <div>
            <h2 className="text-6xl font-bold text-white mb-4">
              Represent.
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Official Oracle Boxing Tracksuit. Premium quality, limited availability.
              Only £128 on this page.
            </p>
          </div>

          {/* Price & CTA Row */}
          <div className="flex items-center gap-6">
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-lg text-white/60 line-through">£160</span>
                <span className="text-5xl font-bold text-white">£128</span>
              </div>
              <p className="text-sm text-white/80">Save £32 today</p>
            </div>

            <div className="flex-1 flex gap-3">
              <button className="flex-1 bg-white text-black py-4 px-8 rounded-full font-bold hover:bg-gray-100 transition-all">
                Add to Order
              </button>
              <button className="px-6 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all">
                Skip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
