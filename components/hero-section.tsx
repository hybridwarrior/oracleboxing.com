"use client"

import { useState, useEffect } from "react"
import { ArrowButton } from "@/components/ui/arrow-button"
import { CoursesIllustration, CoachingIllustration, CommunityIllustration } from "./feature-illustrations"
import { TransformationShowcase } from "./TransformationShowcase"
import { MemberQuotes } from "./MemberQuotes"
import { ENROLLMENT_CLOSED, getCheckoutUrl } from "@/lib/enrollment"
import { trackAddToCart } from "@/lib/webhook-tracking"
import { CAMPAIGN_ACTIVE, getCurrentSpots, CAMPAIGN_CONFIG, getTimeUntilClose } from "@/lib/campaign"
import { useCurrency } from "@/contexts/CurrencyContext"
import { formatPrice, getProductPrice } from "@/lib/currency"

export function HeroSection() {
  const { currency } = useCurrency()
  const price = getProductPrice('21dc_entry', currency) || 147
  const spots = getCurrentSpots()
  const [activeCard, setActiveCard] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [countdown, setCountdown] = useState(getTimeUntilClose())

  // Update countdown every second
  useEffect(() => {
    if (!CAMPAIGN_ACTIVE) return

    const timer = setInterval(() => {
      setCountdown(getTimeUntilClose())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const cards = [
    {
      title: "Courses",
      description: "Learn the fundamentals",
      illustration: <CoursesIllustration />,
    },
    {
      title: "Coaching",
      description: "Refine your technique",
      illustration: <CoachingIllustration />,
    },
    {
      title: "Community",
      description: "Stay accountable",
      illustration: <CommunityIllustration />,
    },
  ]

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length)
      setAnimationKey((prev) => prev + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [cards.length, isPaused])

  const handleCardClick = (index: number) => {
    setActiveCard(index)
    setAnimationKey((prev) => prev + 1)
    setIsPaused(true)
  }

  return (
    <section className="relative pt-[90px] sm:pt-[120px] md:pt-[160px] pb-8">
      {/* Text Content - Constrained */}
      <div className="max-w-[1060px] mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Hero Content */}
          <div className="max-w-[937px] flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-6">
              <h1 className="max-w-[900px] text-center text-[#37322f] text-3xl sm:text-4xl md:text-[64px] font-normal leading-tight md:leading-[1.15]" style={{ fontFamily: 'ClashDisplay, sans-serif' }}>
                <span className="block tracking-tight">Learn the 3 Pillars</span>
                <span className="block tracking-wide">of Boxing in 21 Days</span>
              </h1>
              <p className="max-w-[900px] text-center text-[#37322f]/80 text-sm sm:text-xl md:text-2xl font-medium leading-6 sm:leading-8">
                Live coaching • Video feedback • Money-back guarantee
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-4">
            {/* Money-back guarantee subheading */}
            {!ENROLLMENT_CLOSED && (
              <p className="text-[#49423D] text-base sm:text-lg font-medium flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
                Complete the bare minimum. Get all your money back.
              </p>
            )}
            <ArrowButton
              href={getCheckoutUrl()}
              onClick={() => !ENROLLMENT_CLOSED && trackAddToCart('21dc-entry', '21-Day Challenge', price, currency, 'hero')}
            >
              {ENROLLMENT_CLOSED ? 'Join the Waitlist' : `Join Now - Only ${spots} Spots Left`}
            </ArrowButton>

            {/* Countdown Timer */}
            {CAMPAIGN_ACTIVE && countdown && !ENROLLMENT_CLOSED && (
              <div className="flex items-center gap-2 text-[#605A57] text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  Enrollment closes in{' '}
                  <span className="font-semibold text-[#37322F]">
                    {countdown.days}d {countdown.hours}h {countdown.minutes}m
                  </span>
                </span>
              </div>
            )}

            {/* Social Proof Stats */}
            <div className="flex items-center gap-6 text-sm text-[#605A57]">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#FF8000]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <span><span className="font-semibold text-[#37322F]">500+</span> members trained</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#FF8000]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <span><span className="font-semibold text-[#37322F]">4.9/5</span> rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transformation Showcase - Full Width */}
      <TransformationShowcase />

      {/* Member Quotes - Graffiti Style */}
      <MemberQuotes />

      {/* Tabs Row - Stacked on mobile, horizontal on desktop */}
      <div className="max-w-[900px] mx-auto px-4">
        <div className="flex flex-col md:flex-row w-full">
          {cards.map((card, index) => {
            const isActive = index === activeCard

            return (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className="flex-1 overflow-hidden flex flex-col cursor-pointer transition-all duration-300 bg-transparent"
              >
                {/* Individual progress bar for each tab */}
                <div className="w-full h-[3px] bg-[#37322F]/20 relative overflow-hidden">
                  <div
                    key={`${animationKey}-${index}`}
                    className="absolute inset-0 bg-[#37322F] will-change-transform origin-left"
                    style={{
                      transform: index === activeCard
                        ? (isPaused ? 'scaleX(1)' : undefined)
                        : 'scaleX(0)',
                      animation: index === activeCard && !isPaused
                        ? 'progressBarScale 5s linear forwards'
                        : 'none',
                    }}
                  />
                </div>
                {/* Content */}
                <div className="px-3 py-4 md:px-6 md:py-5 w-full">
                  <div className={`text-center text-sm md:text-base font-semibold leading-tight font-sans transition-colors duration-300 ${
                    isActive ? 'text-[#37322F]' : 'text-[#49423D]/60'
                  }`}>
                    {card.title}
                  </div>
                  <div className={`text-center text-xs md:text-sm mt-1 leading-tight transition-colors duration-300 ${
                    isActive ? 'text-[#49423D]/80' : 'text-[#49423D]/40'
                  }`}>
                    {card.description}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Illustration - Full Width on Desktop */}
      <div className="w-full mt-6">
        <div className="w-full max-w-none lg:max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 lg:px-8">
          <div className="w-full rounded-lg flex flex-col justify-center items-center relative">
            <div className="w-full h-[280px] md:h-[480px] lg:h-[560px] xl:h-[640px] overflow-hidden rounded-lg relative">
              <div
                key={activeCard}
                className="w-full h-full animate-[popIn_0.4s_ease-out_forwards]"
              >
                {cards[activeCard].illustration}
              </div>
              {/* Bottom gradient fade overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progressBarScale {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
