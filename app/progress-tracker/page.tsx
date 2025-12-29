'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

interface FormErrors {
  name?: string
  email?: string
  weeklyTarget?: string
}

export default function ProgressTrackerPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    weeklyTarget: 4,
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Validate name
    const trimmedName = formData.name.trim()
    if (!trimmedName) {
      newErrors.name = 'Full name is required'
    } else if (trimmedName.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    } else if (trimmedName.length > 60) {
      newErrors.name = 'Name must be 60 characters or less'
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const trimmedEmail = formData.email.trim()
    if (!trimmedEmail) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Validate weeklyTarget
    if (formData.weeklyTarget < 1 || formData.weeklyTarget > 7) {
      newErrors.weeklyTarget = 'Weekly target must be between 1 and 7'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value, 10) || 0 : value,
    }))
    // Clear field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
    // Clear server error
    if (serverError) {
      setServerError(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setServerError(null)

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/progress-tracker', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          weeklyTarget: formData.weeklyTarget,
        }),
      })

      const data = await response.json()

      if (response.ok && data.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', weeklyTarget: 4 })
      } else {
        setServerError(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Progress tracker submission error:', error)
      setServerError('Network error. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Progress Tracker
            </h1>
            <p className="text-lg text-gray-600 max-w-lg mx-auto">
              Set your weekly live call target and we&apos;ll help you stay accountable to your training goals.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Tracker Request Received</h2>
              <p className="text-gray-600">
                Check your inbox shortly for next steps.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                    required
                    disabled={isLoading}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                    required
                    disabled={isLoading}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Weekly Target */}
                <div>
                  <label htmlFor="weeklyTarget" className="block text-sm font-medium text-gray-900 mb-2">
                    Weekly Live Call Target <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="weeklyTarget"
                    name="weeklyTarget"
                    value={formData.weeklyTarget}
                    onChange={handleChange}
                    min={1}
                    max={7}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all ${
                      errors.weeklyTarget ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                    disabled={isLoading}
                    aria-invalid={errors.weeklyTarget ? 'true' : 'false'}
                    aria-describedby={errors.weeklyTarget ? 'target-error' : 'target-hint'}
                  />
                  <p id="target-hint" className="mt-1 text-sm text-gray-500">
                    How many live calls do you want to attend each week? (1-7)
                  </p>
                  {errors.weeklyTarget && (
                    <p id="target-error" className="mt-1 text-sm text-red-600">
                      {errors.weeklyTarget}
                    </p>
                  )}
                </div>

                {/* Server Error */}
                {serverError && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-sm text-red-700">{serverError}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full ob-btn ob-btn-primary ob-btn-large disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Submitting...' : 'Start Tracking'}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
