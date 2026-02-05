import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "What's Your Boxing Level? | Free Quiz | Oracle Boxing",
  description: 'Take our free 2-minute quiz to discover your boxing skill level and get personalised training recommendations.',
  openGraph: {
    title: "What's Your Boxing Level?",
    description: 'Free 2-minute boxing assessment. Discover your skill level across 6 dimensions.',
    type: 'website',
  },
}

export default function QuizLandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      {/* Header */}
      <header className="w-full py-4 px-4 bg-[#171717]">
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

      {/* Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 -mt-16">
        <div className="max-w-md text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 leading-tight">
            What's Your Boxing Level?
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            10 questions. 2 minutes. Find out where you stand.
          </p>
          <Link
            href="/quiz/take"
            className="mt-8 inline-flex items-center gap-2 bg-neutral-900 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-neutral-800 transition-colors"
          >
            Take the Quiz
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center">
        <Link href="/" className="text-sm text-neutral-400 hover:text-neutral-600 transition-colors">
          oracleboxing.com
        </Link>
      </footer>
    </div>
  )
}
