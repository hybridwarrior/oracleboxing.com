'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

interface TransformationItem {
  id: number
  name: string
  beforeVideo: string
  afterVideo: string
  duration: string
  corrections: {
    before: string
    after: string
  }[]
}

const BASE_URL = 'https://sb.oracleboxing.com/transfo-v2/'

const transformations: TransformationItem[] = [
  {
    id: 1,
    name: 'Kris',
    beforeVideo: 'kris_before_1.webm',
    afterVideo: 'kris_after.webm',
    duration: '3 MONTHS',
    corrections: [
      { before: 'Not rotating upper body fully with punches', after: 'Twisting punches while staying relaxed' },
      { before: 'Way too stiff and tense', after: 'Full kinetic chain rotation from the ground up' },
    ],
  },
  {
    id: 2,
    name: 'Zyginta',
    beforeVideo: 'zyginta_before.webm',
    afterVideo: 'zyginta_after.webm',
    duration: '9 MONTHS',
    corrections: [
      { before: 'Not finishing punches, no punch articulation', after: 'Fully extending all punches' },
      { before: 'Weight coming forward', after: 'Proper weight distribution maintained' },
    ],
  },
  {
    id: 3,
    name: 'Keli',
    beforeVideo: 'keli_before.webm',
    afterVideo: 'keli_after.webm',
    duration: '6 MONTHS',
    corrections: [
      { before: 'Weight forward, arm punching instead of rotating', after: 'Following through with all punches using body rotation' },
      { before: 'Not finishing punches', after: 'Added head movement and footwork combinations' },
    ],
  },
  {
    id: 4,
    name: 'Maria',
    beforeVideo: 'maria_before.webm',
    afterVideo: 'maria_after.webm',
    duration: '6 MONTHS',
    corrections: [
      { before: 'Stance opens up when throwing punches', after: 'Keeping everything nice and tight' },
      { before: 'Not enough variety in head movement and footwork', after: 'More head movement and footwork combinations' },
    ],
  },
  {
    id: 5,
    name: 'Niclas',
    beforeVideo: 'niclas_before.webm',
    afterVideo: 'niclas_after.webm',
    duration: '6 MONTHS',
    corrections: [
      { before: 'Too tense, punching with shoulder not twisting arm', after: 'Relaxed punches with proper arm twist' },
      { before: 'Heel-heavy on feet', after: 'Better weight distribution on balls of feet' },
    ],
  },
  {
    id: 6,
    name: 'Nico',
    beforeVideo: 'nico_before.webm',
    afterVideo: 'nico_after.webm',
    duration: '9 MONTHS',
    corrections: [
      { before: 'Losing composure during sparring, shape leaving him open', after: 'Tighter defensive shape' },
      { before: 'Footwork not good enough to get out of range', after: 'Better footwork to create distance and counter' },
    ],
  },
  {
    id: 7,
    name: 'Shalyn',
    beforeVideo: 'shalyn_before.webm',
    afterVideo: 'shalyn_after.webm',
    duration: '12 MONTHS',
    corrections: [
      { before: 'Shape too open, not using kinetic chain in lead hook', after: 'Stance and upper body caved inwards for smaller target' },
      { before: 'No whipping effect in punches', after: 'Lagging later kinetic chain to create power' },
    ],
  },
  {
    id: 8,
    name: 'Balal',
    beforeVideo: 'balal_before.webm',
    afterVideo: 'balal_after.webm',
    duration: '6 MONTHS',
    corrections: [
      { before: 'Weight coming forward with punches', after: 'Centred weight distribution' },
      { before: 'Not planted, moving too much while throwing', after: 'Rotating around central axis with feet planted' },
    ],
  },
]

export function TransformationDetailsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const updateTranslate = useCallback((index: number) => {
    if (!carouselRef.current) return
    const containerWidth = carouselRef.current.offsetWidth
    setTranslateX(-index * containerWidth)
  }, [])

  useEffect(() => {
    updateTranslate(currentIndex)
    const handleResize = () => updateTranslate(currentIndex)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [currentIndex, updateTranslate])

  // Handle video playback
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (Math.floor(index / 2) === currentIndex) {
          video.play().catch(() => {})
        } else {
          video.pause()
          video.currentTime = 0
        }
      }
    })
  }, [currentIndex])

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1
      setCurrentIndex(newIndex)
      updateTranslate(newIndex)
    }
  }

  const handleNextClick = () => {
    if (currentIndex < transformations.length - 1) {
      const newIndex = currentIndex + 1
      setCurrentIndex(newIndex)
      updateTranslate(newIndex)
    }
  }

  return (
    <section className="w-full py-12 md:py-16 px-2 md:px-0">
      <div className="w-full max-w-[900px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2
            className="text-[#37322F] text-2xl md:text-3xl lg:text-4xl font-medium mb-4"
            style={{ fontFamily: 'ClashDisplay, sans-serif' }}
          >
            Real Transformations
          </h2>
          <p className="text-[#49423D] text-base md:text-lg max-w-2xl mx-auto">
            See the specific technique improvements our members have made
          </p>
        </div>

        {/* Carousel Container */}
        <div className="flex items-center gap-4">
          {/* Left Arrow - Desktop */}
          <button
            className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full items-center justify-center backdrop-blur-[20px] saturate-[180%] bg-[#37322F]/10 shadow-lg disabled:opacity-40 disabled:cursor-not-allowed hover:enabled:scale-110 hover:enabled:bg-[#37322F]/20 active:enabled:scale-95 transition-all duration-200"
            disabled={currentIndex === 0}
            onClick={handlePrevClick}
            aria-label="Previous transformation"
          >
            <svg className="w-6 h-6 text-[#37322F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Main Carousel */}
          <div className="flex-1 min-w-0">
            <div
              ref={carouselRef}
              className="relative overflow-hidden"
            >
              <div
                className="flex will-change-transform"
                style={{
                  transform: `translateX(${translateX}px)`,
                  transition: 'transform 0.4s ease-out',
                }}
              >
                {transformations.map((item, cardIndex) => (
                  <div key={item.id} className="flex-shrink-0 w-full px-0 md:px-2">
                    {/* Card with animated border */}
                    <div
                      className="relative overflow-hidden rounded-2xl"
                      style={{ padding: '8px' }}
                    >
                      {/* Pattern border background */}
                      <div className="absolute inset-0 bg-[#37322F] overflow-hidden rounded-2xl">
                        {/* Animated flowing ribbons/orbs */}
                        <div className="ribbon ribbon-1" />
                        <div className="ribbon ribbon-2" />
                        <div className="ribbon ribbon-3" />
                        <div className="ribbon ribbon-4" />
                        <div className="ribbon ribbon-5" />
                        <div className="ribbon ribbon-6" />
                      </div>

                      {/* Inner white card */}
                      <div className="relative bg-white p-4 md:p-6 rounded-xl">
                        {/* Row 1: Before/After Videos */}
                        <div className="grid grid-cols-2 gap-0 mb-4 md:mb-6">
                          {/* Before Video */}
                          <div className="relative overflow-hidden aspect-[9/16] bg-[#37322F] rounded-l-lg">
                            <video
                              ref={(el) => { videoRefs.current[cardIndex * 2] = el }}
                              src={`${BASE_URL}${item.beforeVideo}`}
                              autoPlay={cardIndex === currentIndex}
                              muted
                              loop
                              playsInline
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute top-3 left-3 bg-[#37322F]/80 backdrop-blur-sm px-3 py-1.5 rounded-md">
                              <span className="text-white text-xs md:text-sm font-semibold tracking-wide">
                                BEFORE
                              </span>
                            </div>
                          </div>

                          {/* After Video */}
                          <div className="relative overflow-hidden aspect-[9/16] bg-[#37322F] rounded-r-lg">
                            <video
                              ref={(el) => { videoRefs.current[cardIndex * 2 + 1] = el }}
                              src={`${BASE_URL}${item.afterVideo}`}
                              autoPlay={cardIndex === currentIndex}
                              muted
                              loop
                              playsInline
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute top-3 right-3 bg-[#37322F]/80 backdrop-blur-sm px-3 py-1.5 rounded-md">
                              <span className="text-white text-xs md:text-sm font-semibold tracking-wide">
                                AFTER
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Row 2: Duration with line */}
                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                          <div className="flex-1 h-px bg-[#37322F]/20" />
                          <span
                            className="text-[#37322F] text-sm md:text-base font-semibold tracking-wider"
                            style={{ fontFamily: 'ClashDisplay, sans-serif' }}
                          >
                            {item.duration}
                          </span>
                          <div className="flex-1 h-px bg-[#37322F]/20" />
                        </div>

                        {/* Row 3: Technique Corrections */}
                        <div className="space-y-3">
                          {item.corrections.map((correction, corrIndex) => (
                            <div key={corrIndex} className="grid grid-cols-2 gap-3 md:gap-4">
                              <div className="flex items-start gap-2">
                                <span className="text-red-500 mt-0.5 flex-shrink-0">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M6 6L10 10M10 6L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                  </svg>
                                </span>
                                <span className="text-[#49423D] text-xs md:text-sm leading-relaxed">
                                  {correction.before}
                                </span>
                              </div>
                              <div className="flex items-start gap-2">
                                <span className="text-green-600 mt-0.5 flex-shrink-0">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M5.5 8L7 9.5L10.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </span>
                                <span className="text-[#49423D] text-xs md:text-sm leading-relaxed">
                                  {correction.after}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Arrows */}
            <div className="flex md:hidden justify-center gap-4 mt-4">
              <button
                className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-[20px] saturate-[180%] bg-[#37322F]/10 shadow-lg disabled:opacity-40 disabled:cursor-not-allowed hover:enabled:scale-110 hover:enabled:bg-[#37322F]/20 active:enabled:scale-95 transition-all duration-200"
                disabled={currentIndex === 0}
                onClick={handlePrevClick}
                aria-label="Previous transformation"
              >
                <svg className="w-6 h-6 text-[#37322F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-[20px] saturate-[180%] bg-[#37322F]/10 shadow-lg disabled:opacity-40 disabled:cursor-not-allowed hover:enabled:scale-110 hover:enabled:bg-[#37322F]/20 active:enabled:scale-95 transition-all duration-200"
                disabled={currentIndex === transformations.length - 1}
                onClick={handleNextClick}
                aria-label="Next transformation"
              >
                <svg className="w-6 h-6 text-[#37322F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Arrow - Desktop */}
          <button
            className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full items-center justify-center backdrop-blur-[20px] saturate-[180%] bg-[#37322F]/10 shadow-lg disabled:opacity-40 disabled:cursor-not-allowed hover:enabled:scale-110 hover:enabled:bg-[#37322F]/20 active:enabled:scale-95 transition-all duration-200"
            disabled={currentIndex === transformations.length - 1}
            onClick={handleNextClick}
            aria-label="Next transformation"
          >
            <svg className="w-6 h-6 text-[#37322F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Timeline Card */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <div className="bg-[#37322F]/5 rounded-xl p-6 md:p-8 flex flex-col sm:flex-row gap-6 sm:gap-12 items-center justify-center">
            <div className="flex items-center gap-3">
              <span
                className="text-[#37322F] text-2xl md:text-3xl font-semibold"
                style={{ fontFamily: 'ClashDisplay, sans-serif' }}
              >
                21 Days
              </span>
              <svg className="w-5 h-5 text-[#37322F]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-[#49423D] text-base md:text-lg">to see results</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-[#37322F]/20" />
            <div className="flex items-center gap-3">
              <span
                className="text-[#37322F] text-2xl md:text-3xl font-semibold"
                style={{ fontFamily: 'ClashDisplay, sans-serif' }}
              >
                6 Months
              </span>
              <svg className="w-5 h-5 text-[#37322F]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-[#49423D] text-base md:text-lg">to transform</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ribbon {
          position: absolute;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle,
            rgba(255,252,245,0.4) 0%,
            rgba(255,252,245,0.2) 40%,
            transparent 70%
          );
          border-radius: 50%;
          filter: blur(25px);
        }
        .ribbon-1 {
          top: 5%;
          left: 5%;
          width: 160px;
          height: 160px;
          animation: float1 8s ease-in-out infinite;
        }
        .ribbon-2 {
          top: 60%;
          left: 10%;
          width: 140px;
          height: 140px;
          animation: float2 10s ease-in-out infinite;
          animation-delay: -2s;
        }
        .ribbon-3 {
          top: 30%;
          right: 10%;
          width: 130px;
          height: 130px;
          animation: float3 9s ease-in-out infinite;
          animation-delay: -4s;
        }
        .ribbon-4 {
          top: 70%;
          right: 20%;
          width: 150px;
          height: 150px;
          animation: float1 7s ease-in-out infinite;
          animation-delay: -1s;
        }
        .ribbon-5 {
          top: 10%;
          left: 50%;
          width: 100px;
          height: 100px;
          animation: float2 11s ease-in-out infinite;
          animation-delay: -3s;
        }
        .ribbon-6 {
          top: 80%;
          left: 40%;
          width: 110px;
          height: 110px;
          animation: float3 8s ease-in-out infinite;
          animation-delay: -5s;
        }
        @keyframes float1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(30px, -20px) scale(1.1);
            opacity: 0.9;
          }
        }
        @keyframes float2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translate(-25px, 25px) scale(1.15);
            opacity: 0.85;
          }
        }
        @keyframes float3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.55;
          }
          50% {
            transform: translate(20px, 15px) scale(1.05);
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  )
}

export default TransformationDetailsCarousel
