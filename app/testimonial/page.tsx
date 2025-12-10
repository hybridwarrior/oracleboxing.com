'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { toast } from 'sonner'

const TESTIMONIAL_WEBHOOK_URL = 'https://hook.eu2.make.com/2ik4knuikxwg8xljes2uwo7rdyjdvpj4'

export default function TestimonialPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    testimonial: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { firstName, lastName, email, testimonial } = formData

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !testimonial.trim()) {
      toast.error('Please fill in all fields')
      return
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch(TESTIMONIAL_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          testimonial: testimonial.trim(),
          timestamp: new Date().toISOString(),
          source: 'testimonial-page',
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ firstName: '', lastName: '', email: '', testimonial: '' })
        toast.success('Thank you! Your testimonial has been submitted.')
      } else {
        throw new Error('Failed to submit testimonial')
      }
    } catch (error) {
      console.error('Testimonial submission error:', error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Share Your Story
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Your transformation inspires others. Share how Oracle Boxing has impacted your training, confidence, or life.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h2>
              <p className="text-gray-600 mb-6">
                Your testimonial has been received. We truly appreciate you sharing your experience with us.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="ob-btn ob-btn-primary"
              >
                Submit Another Testimonial
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      placeholder="John"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      placeholder="Doe"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    required
                    disabled={isLoading}
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Your email will not be shared publicly.
                  </p>
                </div>

                <div>
                  <label htmlFor="testimonial" className="block text-sm font-medium text-gray-900 mb-2">
                    Your Testimonial <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="testimonial"
                    name="testimonial"
                    rows={6}
                    value={formData.testimonial}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                    placeholder="Share your experience with Oracle Boxing... How has it helped your training? What results have you seen?"
                    required
                    disabled={isLoading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.testimonial.trim()}
                  className="w-full ob-btn ob-btn-primary ob-btn-large disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Submitting...' : 'Submit Testimonial'}
                </button>
              </form>

              <p className="mt-6 text-xs text-gray-500 text-center">
                By submitting, you agree that we may use your testimonial on our website and marketing materials.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
