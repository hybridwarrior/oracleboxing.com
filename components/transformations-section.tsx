"use client"

import { LiquidGlassCarousel } from "@/components/ui/LiquidGlassCarousel"

export default function TransformationsSection() {
  return (
    <div className="w-full relative overflow-hidden flex flex-col justify-center items-center border-b border-[rgba(55,50,47,0.12)]">
      {/* Diagonal stripes background on margins */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="w-full h-full relative">
          {Array.from({ length: 300 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-4 w-full rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
              style={{
                top: `${i * 16 - 120}px`,
                left: "-100%",
                width: "300%",
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content with solid background */}
      <div className="mx-8 md:mx-[128px] my-0 self-stretch relative bg-[#FFFCF5] border border-[rgba(55,50,47,0.12)] py-12 md:py-16 flex flex-col justify-center items-center gap-8 z-10">
        {/* Header */}
        <div className="w-full max-w-[700px] flex flex-col items-center gap-4 relative z-20 px-6">
          <div className="self-stretch text-center text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Transformations From our Fundamentals First Approach
          </div>
        </div>

        {/* Carousel Container */}
        <div className="w-full max-w-[400px] relative z-20 rounded-2xl overflow-hidden px-6">
          <LiquidGlassCarousel />
        </div>
      </div>
    </div>
  )
}
