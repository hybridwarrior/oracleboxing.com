"use client"

import Image from "next/image"

export function CoursesIllustration() {
  return (
    <div className="w-full h-full relative overflow-hidden rounded-2xl">
      <Image
        src="https://sb.oracleboxing.com/Website/hero_courses2.webp"
        alt="Courses"
        fill
        className="object-contain"
      />
    </div>
  )
}

export function CoachingIllustration() {
  return (
    <div className="w-full h-full relative overflow-hidden rounded-2xl">
      <Image
        src="https://sb.oracleboxing.com/Website/hero_coaching3.webp"
        alt="Coaching"
        fill
        className="object-contain"
      />
    </div>
  )
}

export function CommunityIllustration() {
  return (
    <div className="w-full h-full relative overflow-hidden rounded-2xl">
      <Image
        src="https://sb.oracleboxing.com/Website/hero_community3.webp"
        alt="Community"
        fill
        className="object-contain"
      />
    </div>
  )
}
