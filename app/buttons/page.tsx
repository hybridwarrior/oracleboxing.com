'use client'

import { useState } from 'react'

export default function ButtonsPage() {
  const [clickedButton, setClickedButton] = useState<string | null>(null)

  const handleClick = (buttonName: string) => {
    setClickedButton(buttonName)
    setTimeout(() => setClickedButton(null), 400)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">Liquid Glass Buttons</h1>
        <p className="text-gray-600 text-center mb-12">Click any button to see the interaction effect</p>

        {/* Light Background Section */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">On Light Background</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Style 1: Classic Frosted */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => handleClick('classic')}
                className={`px-6 py-3 rounded-full backdrop-blur-[20px] saturate-[180%] bg-white/40 border border-white/60 text-gray-900 font-semibold transition-all duration-200 ${
                  clickedButton === 'classic' ? 'scale-105' : 'hover:scale-[1.02] hover:bg-white/50'
                }`}
                style={{
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                }}
              >
                Classic Frosted
              </button>
              <span className="text-xs text-gray-500">Style 1</span>
            </div>

            {/* Style 2: Pill Minimal */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => handleClick('minimal')}
                className={`px-8 py-3 rounded-full backdrop-blur-[16px] bg-white/20 border border-white/40 text-gray-800 font-medium transition-all duration-200 ${
                  clickedButton === 'minimal' ? 'scale-105 bg-white/30' : 'hover:bg-white/30'
                }`}
                style={{
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)'
                }}
              >
                Pill Minimal
              </button>
              <span className="text-xs text-gray-500">Style 2</span>
            </div>

            {/* Style 3: Bold Glass */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => handleClick('bold')}
                className={`px-6 py-3 rounded-2xl backdrop-blur-[24px] saturate-[200%] bg-white/60 border-2 border-white/80 text-gray-900 font-bold transition-all duration-200 ${
                  clickedButton === 'bold' ? 'scale-105' : 'hover:scale-[1.02]'
                }`}
                style={{
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.05), inset 0 2px 0 rgba(255, 255, 255, 0.9), inset 0 -2px 4px rgba(0, 0, 0, 0.05)'
                }}
              >
                Bold Glass
              </button>
              <span className="text-xs text-gray-500">Style 3</span>
            </div>

            {/* Style 4: Soft Glow */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => handleClick('glow')}
                className={`px-6 py-3 rounded-xl backdrop-blur-[20px] bg-gradient-to-b from-white/50 to-white/30 border border-white/50 text-gray-900 font-semibold transition-all duration-200 ${
                  clickedButton === 'glow' ? 'scale-105 shadow-lg' : 'hover:shadow-lg'
                }`}
                style={{
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                }}
              >
                Soft Glow
              </button>
              <span className="text-xs text-gray-500">Style 4</span>
            </div>

            {/* Style 5: Outline Glass */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => handleClick('outline')}
                className={`px-6 py-3 rounded-full backdrop-blur-[12px] bg-transparent border-2 border-gray-900/20 text-gray-900 font-semibold transition-all duration-200 ${
                  clickedButton === 'outline' ? 'scale-105 bg-white/20 border-gray-900/40' : 'hover:bg-white/10 hover:border-gray-900/30'
                }`}
              >
                Outline Glass
              </button>
              <span className="text-xs text-gray-500">Style 5</span>
            </div>

            {/* Style 6: Neumorphic Glass */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => handleClick('neumorphic')}
                className={`px-6 py-3 rounded-2xl backdrop-blur-[20px] bg-white/50 text-gray-800 font-semibold transition-all duration-200 ${
                  clickedButton === 'neumorphic' ? 'scale-95' : 'hover:scale-[1.02] active:scale-95'
                }`}
                style={{
                  boxShadow: clickedButton === 'neumorphic'
                    ? 'inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.9)'
                    : '4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.9), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
                }}
              >
                Neumorphic
              </button>
              <span className="text-xs text-gray-500">Style 6</span>
            </div>

            {/* Style 7: Accent Tint */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => handleClick('accent')}
                className={`px-6 py-3 rounded-full backdrop-blur-[20px] saturate-[180%] bg-amber-100/50 border border-amber-200/60 text-amber-900 font-semibold transition-all duration-200 ${
                  clickedButton === 'accent' ? 'scale-105' : 'hover:scale-[1.02] hover:bg-amber-100/60'
                }`}
                style={{
                  boxShadow: '0 8px 32px rgba(245, 158, 11, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
                }}
              >
                Accent Tint
              </button>
              <span className="text-xs text-gray-500">Style 7</span>
            </div>

            {/* Style 8: Sharp Glass */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => handleClick('sharp')}
                className={`px-6 py-3 rounded-lg backdrop-blur-[20px] bg-white/40 border border-white/60 text-gray-900 font-semibold transition-all duration-200 ${
                  clickedButton === 'sharp' ? 'scale-105' : 'hover:scale-[1.02]'
                }`}
                style={{
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                }}
              >
                Sharp Glass
              </button>
              <span className="text-xs text-gray-500">Style 8</span>
            </div>

            {/* Style 9: Floating */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => handleClick('floating')}
                className={`px-6 py-3 rounded-full backdrop-blur-[24px] bg-white/70 border border-white/90 text-gray-900 font-semibold transition-all duration-300 ${
                  clickedButton === 'floating' ? 'scale-105 -translate-y-1' : 'hover:-translate-y-0.5'
                }`}
                style={{
                  boxShadow: clickedButton === 'floating'
                    ? '0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)'
                    : '0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.05)'
                }}
              >
                Floating
              </button>
              <span className="text-xs text-gray-500">Style 9</span>
            </div>

          </div>
        </section>

        {/* Dark Background Section */}
        <section className="bg-gray-900 rounded-3xl p-8 mb-16">
          <h2 className="text-xl font-semibold text-white mb-6">On Dark Background</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Dark Style 1: Light Frost */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => handleClick('dark-frost')}
                className={`px-6 py-3 rounded-full backdrop-blur-[20px] saturate-[180%] bg-white/10 border border-white/20 text-white font-semibold transition-all duration-200 ${
                  clickedButton === 'dark-frost' ? 'scale-105 bg-white/20' : 'hover:bg-white/15'
                }`}
                style={{
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                Light Frost
              </button>
              <span className="text-xs text-gray-400">Dark Style 1</span>
            </div>

            {/* Dark Style 2: Subtle Glow */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => handleClick('dark-glow')}
                className={`px-6 py-3 rounded-full backdrop-blur-[20px] bg-white/5 border border-white/10 text-white font-medium transition-all duration-200 ${
                  clickedButton === 'dark-glow' ? 'scale-105 border-white/30' : 'hover:border-white/20'
                }`}
                style={{
                  boxShadow: '0 0 40px rgba(255, 255, 255, 0.05)'
                }}
              >
                Subtle Glow
              </button>
              <span className="text-xs text-gray-400">Dark Style 2</span>
            </div>

            {/* Dark Style 3: Bright Glass */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => handleClick('dark-bright')}
                className={`px-6 py-3 rounded-2xl backdrop-blur-[24px] bg-white/20 border border-white/30 text-white font-bold transition-all duration-200 ${
                  clickedButton === 'dark-bright' ? 'scale-105 bg-white/30' : 'hover:bg-white/25'
                }`}
                style={{
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                Bright Glass
              </button>
              <span className="text-xs text-gray-400">Dark Style 3</span>
            </div>

            {/* Dark Style 4: Outline Light */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => handleClick('dark-outline')}
                className={`px-6 py-3 rounded-full backdrop-blur-[12px] bg-transparent border-2 border-white/30 text-white font-semibold transition-all duration-200 ${
                  clickedButton === 'dark-outline' ? 'scale-105 bg-white/10 border-white/50' : 'hover:bg-white/5 hover:border-white/40'
                }`}
              >
                Outline Light
              </button>
              <span className="text-xs text-gray-400">Dark Style 4</span>
            </div>

            {/* Dark Style 5: Amber Accent */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => handleClick('dark-amber')}
                className={`px-6 py-3 rounded-full backdrop-blur-[20px] bg-amber-500/20 border border-amber-400/30 text-amber-100 font-semibold transition-all duration-200 ${
                  clickedButton === 'dark-amber' ? 'scale-105 bg-amber-500/30' : 'hover:bg-amber-500/25'
                }`}
                style={{
                  boxShadow: '0 8px 32px rgba(245, 158, 11, 0.2)'
                }}
              >
                Amber Accent
              </button>
              <span className="text-xs text-gray-400">Dark Style 5</span>
            </div>

            {/* Dark Style 6: Neon Edge */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => handleClick('dark-neon')}
                className={`px-6 py-3 rounded-xl backdrop-blur-[20px] bg-white/5 text-white font-semibold transition-all duration-200 ${
                  clickedButton === 'dark-neon' ? 'scale-105' : 'hover:bg-white/10'
                }`}
                style={{
                  boxShadow: clickedButton === 'dark-neon'
                    ? '0 0 20px rgba(255, 255, 255, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)'
                    : '0 0 10px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                Neon Edge
              </button>
              <span className="text-xs text-gray-400">Dark Style 6</span>
            </div>

          </div>
        </section>

        {/* Image Background Section */}
        <section
          className="rounded-3xl p-8 mb-16 relative overflow-hidden"
          style={{
            backgroundImage: 'url(https://sb.oracleboxing.com/Website/transfo/andre_poster.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative">
            <h2 className="text-xl font-semibold text-white mb-6">On Image Background</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Image Style 1 */}
              <div className="flex flex-col items-center gap-3">
                <button
                  onClick={() => handleClick('img-frost')}
                  className={`px-6 py-3 rounded-full backdrop-blur-[20px] saturate-[180%] bg-white/25 border border-white/40 text-white font-semibold transition-all duration-200 ${
                    clickedButton === 'img-frost' ? 'scale-105 bg-white/35' : 'hover:bg-white/30'
                  }`}
                  style={{
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                  }}
                >
                  Frosted White
                </button>
                <span className="text-xs text-white/70">Image Style 1</span>
              </div>

              {/* Image Style 2 */}
              <div className="flex flex-col items-center gap-3">
                <button
                  onClick={() => handleClick('img-dark')}
                  className={`px-6 py-3 rounded-full backdrop-blur-[20px] saturate-[180%] bg-black/30 border border-white/20 text-white font-semibold transition-all duration-200 ${
                    clickedButton === 'img-dark' ? 'scale-105 bg-black/40' : 'hover:bg-black/35'
                  }`}
                  style={{
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  Dark Frost
                </button>
                <span className="text-xs text-white/70">Image Style 2</span>
              </div>

              {/* Image Style 3 */}
              <div className="flex flex-col items-center gap-3">
                <button
                  onClick={() => handleClick('img-heavy')}
                  className={`px-6 py-3 rounded-2xl backdrop-blur-[30px] saturate-[200%] bg-white/40 border-2 border-white/60 text-gray-900 font-bold transition-all duration-200 ${
                    clickedButton === 'img-heavy' ? 'scale-105' : 'hover:scale-[1.02]'
                  }`}
                  style={{
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.8)'
                  }}
                >
                  Heavy Blur
                </button>
                <span className="text-xs text-white/70">Image Style 3</span>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Sizes */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">CTA Sizes</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">

            <button
              onClick={() => handleClick('sm')}
              className={`px-4 py-2 text-sm rounded-full backdrop-blur-[20px] saturate-[180%] bg-white/40 border border-white/60 text-gray-900 font-semibold transition-all duration-200 ${
                clickedButton === 'sm' ? 'scale-105' : 'hover:scale-[1.02]'
              }`}
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
              }}
            >
              Small CTA
            </button>

            <button
              onClick={() => handleClick('md')}
              className={`px-6 py-3 text-base rounded-full backdrop-blur-[20px] saturate-[180%] bg-white/40 border border-white/60 text-gray-900 font-semibold transition-all duration-200 ${
                clickedButton === 'md' ? 'scale-105' : 'hover:scale-[1.02]'
              }`}
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
              }}
            >
              Medium CTA
            </button>

            <button
              onClick={() => handleClick('lg')}
              className={`px-8 py-4 text-lg rounded-full backdrop-blur-[20px] saturate-[180%] bg-white/40 border border-white/60 text-gray-900 font-bold transition-all duration-200 ${
                clickedButton === 'lg' ? 'scale-105' : 'hover:scale-[1.02]'
              }`}
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
              }}
            >
              Large CTA
            </button>

            <button
              onClick={() => handleClick('xl')}
              className={`px-10 py-5 text-xl rounded-full backdrop-blur-[20px] saturate-[180%] bg-white/40 border border-white/60 text-gray-900 font-bold transition-all duration-200 ${
                clickedButton === 'xl' ? 'scale-105' : 'hover:scale-[1.02]'
              }`}
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
              }}
            >
              Extra Large CTA
            </button>

          </div>
        </section>

        {/* With Icons */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">With Icons</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">

            <button
              onClick={() => handleClick('icon-arrow')}
              className={`px-6 py-3 rounded-full backdrop-blur-[20px] saturate-[180%] bg-white/40 border border-white/60 text-gray-900 font-semibold transition-all duration-200 inline-flex items-center gap-2 ${
                clickedButton === 'icon-arrow' ? 'scale-105' : 'hover:scale-[1.02]'
              }`}
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
              }}
            >
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button
              onClick={() => handleClick('icon-play')}
              className={`px-6 py-3 rounded-full backdrop-blur-[20px] saturate-[180%] bg-white/40 border border-white/60 text-gray-900 font-semibold transition-all duration-200 inline-flex items-center gap-2 ${
                clickedButton === 'icon-play' ? 'scale-105' : 'hover:scale-[1.02]'
              }`}
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Video
            </button>

            <button
              onClick={() => handleClick('icon-only')}
              className={`p-4 rounded-full backdrop-blur-[20px] saturate-[180%] bg-white/40 border border-white/60 text-gray-900 transition-all duration-200 ${
                clickedButton === 'icon-only' ? 'scale-110' : 'hover:scale-105'
              }`}
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

          </div>
        </section>

      </div>
    </div>
  )
}
