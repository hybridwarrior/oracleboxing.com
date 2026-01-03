import { TechBackground } from '@/components/ui/TechBackground'
import { TechCard } from '@/components/ui/TechCard'

export default function TechDemoPage() {
  return (
    <TechBackground>
      <div className="min-h-screen px-6 py-16 md:px-12 lg:px-24">
        {/* Header */}
        <header className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Tech Grid UI
          </h1>
          <p style={{ color: 'var(--tech-text-secondary)' }} className="text-lg md:text-xl">
            Dark mode background with subtle grid lines, vignette glow, and glass-morphism cards.
          </p>
        </header>

        {/* Card Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Static Card */}
          <TechCard>
            <div className="mb-4">
              <span
                className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  background: 'var(--tech-card-bg-hover)',
                  color: 'var(--tech-text-secondary)'
                }}
              >
                Static
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Basic Card</h3>
            <p style={{ color: 'var(--tech-text-secondary)' }} className="text-sm leading-relaxed">
              A simple card with glass effect, subtle border, and inner highlight at the top edge.
            </p>
          </TechCard>

          {/* Interactive Card */}
          <TechCard interactive>
            <div className="mb-4">
              <span
                className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  background: 'rgba(99, 102, 241, 0.2)',
                  color: 'rgb(165, 180, 252)'
                }}
              >
                Interactive
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Hover Me</h3>
            <p style={{ color: 'var(--tech-text-secondary)' }} className="text-sm leading-relaxed">
              This card lifts on hover with enhanced shadow and brighter border. The top highlight intensifies.
            </p>
          </TechCard>

          {/* Feature Card */}
          <TechCard interactive>
            <div className="mb-4">
              <span
                className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  background: 'rgba(16, 185, 129, 0.2)',
                  color: 'rgb(110, 231, 183)'
                }}
              >
                Feature
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Backdrop Blur</h3>
            <p style={{ color: 'var(--tech-text-secondary)' }} className="text-sm leading-relaxed">
              Uses backdrop-filter for a frosted glass effect. Falls back gracefully on unsupported browsers.
            </p>
          </TechCard>

          {/* Large Card spanning 2 columns */}
          <TechCard size="lg" className="md:col-span-2">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3">Technical Grid Background</h3>
                <p style={{ color: 'var(--tech-text-secondary)' }} className="leading-relaxed">
                  The background features a subtle 64px grid pattern that fades towards the edges using a CSS mask.
                  A radial gradient creates a soft glow at the top and vignette darkening at the edges.
                </p>
              </div>
              <div
                className="w-24 h-24 rounded-xl flex items-center justify-center"
                style={{ background: 'var(--tech-card-bg-hover)' }}
              >
                <svg
                  className="w-12 h-12"
                  style={{ color: 'var(--tech-text-muted)' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
              </div>
            </div>
          </TechCard>

          {/* Small Card */}
          <TechCard size="sm" interactive>
            <h4 className="font-semibold mb-1">Compact</h4>
            <p style={{ color: 'var(--tech-text-muted)' }} className="text-xs">
              Small size variant with reduced padding.
            </p>
          </TechCard>
        </div>

        {/* CSS Variables Reference */}
        <section className="max-w-4xl mx-auto mt-20">
          <h2 className="text-2xl font-semibold mb-6 text-center">Design Tokens</h2>
          <TechCard>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono">
              <div>
                <p style={{ color: 'var(--tech-text-muted)' }} className="mb-2">Background</p>
                <p>--tech-bg-base: #0a0a0b</p>
                <p>--tech-grid-spacing: 64px</p>
                <p>--tech-grid-line: rgba(255,255,255,0.06)</p>
              </div>
              <div>
                <p style={{ color: 'var(--tech-text-muted)' }} className="mb-2">Cards</p>
                <p>--tech-card-bg: rgba(255,255,255,0.04)</p>
                <p>--tech-card-border: rgba(255,255,255,0.08)</p>
                <p>--tech-card-radius: 16px</p>
              </div>
            </div>
          </TechCard>
        </section>
      </div>
    </TechBackground>
  )
}
