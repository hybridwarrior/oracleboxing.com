import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function QuizHeader() {
  return (
    <header className="w-full py-4 px-4 bg-[#37322F]">
      <div className="max-w-xl mx-auto flex justify-center">
        <Link href="/">
          <Image
            src="https://sb.oracleboxing.com/logo/long_light.webp"
            alt="Oracle Boxing"
            width={140}
            height={28}
            className="h-5 w-auto"
            priority
          />
        </Link>
      </div>
    </header>
  )
}
