"use client"
import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import QuizHeader from '../components/QuizHeader'
import { questions } from '@/lib/quiz-data'
import { QuizResponses } from '@/lib/quiz-types'
import { QuizQuestionComponent } from '../components/QuizQuestion'
import { ProgressBar } from '../components/ProgressBar'

const STORAGE_KEY = 'ob-quiz-progress'

function loadProgress(): { responses: QuizResponses; current: number } | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw)
    if (data && typeof data.responses === 'object' && typeof data.current === 'number') {
      return data
    }
  } catch { /* ignore */ }
  return null
}

function saveProgress(responses: QuizResponses, current: number) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ responses, current }))
  } catch { /* ignore */ }
}

function clearProgress() {
  try {
    sessionStorage.removeItem(STORAGE_KEY)
  } catch { /* ignore */ }
}

export default function QuizTakePage() {
  const router = useRouter()
  const total = questions.length
  const [current, setCurrent] = useState(0)
  const [responses, setResponses] = useState<QuizResponses>({})
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [direction, setDirection] = useState(1)
  const [hydrated, setHydrated] = useState(false)
  const autoAdvanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Restore progress on mount
  useEffect(() => {
    const saved = loadProgress()
    if (saved) {
      setResponses(saved.responses)
      setCurrent(saved.current)
    }
    setHydrated(true)
  }, [])

  // Save progress when answers or position change
  useEffect(() => {
    if (hydrated) {
      saveProgress(responses, current)
    }
  }, [responses, current, hydrated])

  const q = questions[current]

  const goForward = useCallback(async () => {
    if (current < total - 1) {
      setDirection(1)
      setCurrent((i) => i + 1)
    } else {
      // Submit
      setSubmitting(true)
      setError(null)
      try {
        const res = await fetch('/api/quiz/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ responses }),
        })
        if (!res.ok) throw new Error('Failed to submit quiz')
        const json = await res.json()
        clearProgress()
        router.push(`/quiz/results?id=${json.id}`)
      } catch {
        setError('Something went wrong. Please try again.')
        setSubmitting(false)
      }
    }
  }, [current, total, responses, router])

  const handleAnswer = useCallback((id: number, value: number) => {
    setResponses((prev: QuizResponses) => ({ ...prev, [id]: value }))

    // Auto-advance after a short delay (except on last question)
    if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current)
    autoAdvanceTimer.current = setTimeout(() => {
      if (current < total - 1) {
        setDirection(1)
        setCurrent((i) => i + 1)
      }
    }, 300)
  }, [current, total])

  const goBack = useCallback(() => {
    if (autoAdvanceTimer.current) clearTimeout(autoAdvanceTimer.current)
    setDirection(-1)
    setCurrent((i) => i - 1)
  }, [])

  const isLastQuestion = current === total - 1
  const hasAnswer = !!responses[q.id]

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5] text-neutral-900">
      <QuizHeader />
      <main className="flex-grow flex flex-col items-center px-4 py-6 sm:py-10">
        {/* Progress section */}
        <div className="w-full max-w-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-neutral-500 font-medium">
              Question {current + 1} of {total}
            </span>
            <span className="text-sm text-neutral-400">
              {Math.round(((current + (hasAnswer ? 1 : 0)) / total) * 100)}% complete
            </span>
          </div>
          <ProgressBar current={current + (hasAnswer ? 1 : 0)} total={total} />
        </div>

        {/* Question card */}
        <div className="w-full max-w-xl mt-4 sm:mt-6 relative" style={{ minHeight: '340px' }}>
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={q.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="w-full bg-white border border-neutral-200 shadow-sm p-5 sm:p-6 rounded-xl"
            >
              <p className="text-xs text-neutral-400 mb-1 uppercase tracking-wider font-medium">
                {q.category}
              </p>
              <QuizQuestionComponent
                question={q}
                value={responses[q.id]}
                onAnswer={handleAnswer}
              />

              {error && (
                <div className="mt-3 text-red-600 text-sm bg-red-50 border border-red-100 px-3 py-2 rounded-lg flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  {error}
                </div>
              )}

              <div className="mt-5 flex gap-3">
                {current > 0 && (
                  <button
                    onClick={goBack}
                    disabled={submitting}
                    className="ob-btn ob-btn-secondary px-5"
                  >
                    ← Back
                  </button>
                )}
                {isLastQuestion && (
                  <button
                    onClick={goForward}
                    disabled={!hasAnswer || submitting}
                    className="flex-1 ob-btn ob-btn-primary disabled:opacity-50"
                  >
                    {submitting ? (
                      <span className="inline-flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Calculating...
                      </span>
                    ) : (
                      'See My Results →'
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}
