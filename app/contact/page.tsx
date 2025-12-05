'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { toast } from 'sonner'

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('https://hook.eu2.make.com/e9y5273eqsxw5odmoxor8u717ihlsu2t', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          timestamp: new Date().toISOString(),
          source: 'contact-page',
        }),
      })

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll get back to you soon.')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      toast.error('Something went wrong. Please try again or email us directly at team@oracleboxing.com')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our courses, coaching, or membership? We're here to help.
            </p>
          </div>

          {/* Contact Form - Split Layout */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    placeholder="John"
                    required
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    placeholder="Doe"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="john@example.com"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-white"
                  required
                  disabled={isLoading}
                >
                  <option value="">Select a topic</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Course Information">Course Information</option>
                  <option value="Membership Questions">Membership Questions</option>
                  <option value="6-Week Challenge">6-Week Challenge</option>
                  <option value="Billing & Payments">Billing & Payments</option>
                  <option value="Partnership & Media">Partnership & Media</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                  placeholder="Tell us more about how we can help..."
                  required
                  disabled={isLoading}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full ob-btn ob-btn-primary ob-btn-large disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {/* Alternative Contact Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                You can also email us directly at{' '}
                <a href="mailto:team@oracleboxing.com" className="text-black font-semibold hover:underline">
                  team@oracleboxing.com
                </a>
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">How quickly will I hear back?</h3>
                <p className="text-gray-600 text-sm">
                  We typically respond within 24 hours during business days. For urgent matters, please mention it in your message.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Do you offer refunds?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! We offer a money-back guarantee for our 6-Week Challenge and other products. Check our{' '}
                  <a href="/refund" className="text-black font-semibold hover:underline">refund policy</a> for details.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Can I try before buying?</h3>
                <p className="text-gray-600 text-sm">
                  Join our free newsletter to get training tips and updates. We also offer free content on our{' '}
                  <a href="https://www.youtube.com/@oracle_boxing" target="_blank" rel="noopener noreferrer" className="text-black font-semibold hover:underline">
                    YouTube channel
                  </a>.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Where are you located?</h3>
                <p className="text-gray-600 text-sm">
                  We're based in the United Kingdom but serve students worldwide with our online courses and coaching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
