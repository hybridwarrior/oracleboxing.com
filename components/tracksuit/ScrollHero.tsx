'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function ScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Parallax effects
  const textOpacity1 = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0, 0])
  const textOpacity2 = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0, 1, 0])
  const textOpacity3 = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0, 1, 0])
  const textOpacity4 = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 1])

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 1])

  return (
    <div ref={containerRef} className="relative min-h-[200vh]">
      {/* Fixed viewport for parallax effect */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#111] to-[#0a0a0a]" />

        {/* Placeholder tracksuit image with parallax */}
        <motion.div
          style={{ scale: imageScale, opacity: imageOpacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-full max-w-2xl aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg opacity-20" />
        </motion.div>

        {/* Scrolling text overlays */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="max-w-4xl px-8 text-center space-y-8">
            {/* Text sequence 1 */}
            <motion.div style={{ opacity: textOpacity1 }} className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                Oracle Boxing Tracksuit
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
                Built as armour — for those who live by the discipline of boxing.
              </p>
            </motion.div>

            {/* Text sequence 2 */}
            <motion.div style={{ opacity: textOpacity2 }} className="absolute inset-0 flex items-center justify-center px-8">
              <p className="text-2xl md:text-3xl text-gray-200 max-w-3xl leading-relaxed">
                The way people treat you changes when they know you can fight.
              </p>
            </motion.div>

            {/* Text sequence 3 */}
            <motion.div style={{ opacity: textOpacity3 }} className="absolute inset-0 flex items-center justify-center px-8">
              <p className="text-2xl md:text-3xl text-gray-200 max-w-3xl leading-relaxed">
                This tracksuit was designed so that from the front or back, people know — without you saying a word.
              </p>
            </motion.div>

            {/* Text sequence 4 */}
            <motion.div style={{ opacity: textOpacity4 }} className="absolute inset-0 flex items-center justify-center px-8">
              <div className="space-y-6 text-center">
                <p className="text-3xl md:text-4xl text-white font-light">
                  Subtle. Humble. <span className="font-semibold">Unmistakably boxer.</span>
                </p>
                <p className="text-xl text-gray-300">
                  Heavyweight 100% cotton — durable, breathable, built to last a lifetime.
                </p>
                <p className="text-lg text-gray-400 font-medium">
                  Only 50 will ever be made. Ships before Christmas.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
