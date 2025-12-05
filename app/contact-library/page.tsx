'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { toast } from 'sonner'

export default function ContactLibraryPage() {
  const [activeForm, setActiveForm] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Contact Form Library
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              10 beautiful Apple-inspired contact form variations designed to match our brand aesthetic
            </p>
          </div>
        </div>
      </section>

      {/* Forms Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Form 1: Classic Centered */}
            <FormContainer
              title="Classic Centered"
              description="Clean, minimalist design with centered layout"
              number={1}
              isActive={activeForm === 1}
              onToggle={() => setActiveForm(activeForm === 1 ? null : 1)}
            >
              <ClassicCenteredForm />
            </FormContainer>

            {/* Form 2: Split Layout */}
            <FormContainer
              title="Split Layout"
              description="Two-column design with visual hierarchy"
              number={2}
              isActive={activeForm === 2}
              onToggle={() => setActiveForm(activeForm === 2 ? null : 2)}
            >
              <SplitLayoutForm />
            </FormContainer>

            {/* Form 3: Card Style */}
            <FormContainer
              title="Card Style"
              description="Elevated card design with subtle shadow"
              number={3}
              isActive={activeForm === 3}
              onToggle={() => setActiveForm(activeForm === 3 ? null : 3)}
            >
              <CardStyleForm />
            </FormContainer>

            {/* Form 4: Floating Labels */}
            <FormContainer
              title="Floating Labels"
              description="Modern floating label animation on focus"
              number={4}
              isActive={activeForm === 4}
              onToggle={() => setActiveForm(activeForm === 4 ? null : 4)}
            >
              <FloatingLabelsForm />
            </FormContainer>

            {/* Form 5: Inline Style */}
            <FormContainer
              title="Inline Style"
              description="Horizontal layout for compact spaces"
              number={5}
              isActive={activeForm === 5}
              onToggle={() => setActiveForm(activeForm === 5 ? null : 5)}
            >
              <InlineStyleForm />
            </FormContainer>

            {/* Form 6: Dark Mode */}
            <FormContainer
              title="Dark Mode"
              description="Elegant dark theme with yellow accents"
              number={6}
              isActive={activeForm === 6}
              onToggle={() => setActiveForm(activeForm === 6 ? null : 6)}
            >
              <DarkModeForm />
            </FormContainer>

            {/* Form 7: Minimal Border */}
            <FormContainer
              title="Minimal Border"
              description="Bottom-border only design, ultra-clean"
              number={7}
              isActive={activeForm === 7}
              onToggle={() => setActiveForm(activeForm === 7 ? null : 7)}
            >
              <MinimalBorderForm />
            </FormContainer>

            {/* Form 8: Full Width */}
            <FormContainer
              title="Full Width Hero"
              description="Large, bold form for landing pages"
              number={8}
              isActive={activeForm === 8}
              onToggle={() => setActiveForm(activeForm === 8 ? null : 8)}
            >
              <FullWidthForm />
            </FormContainer>

            {/* Form 9: Compact Quick */}
            <FormContainer
              title="Compact Quick"
              description="Single field for email capture"
              number={9}
              isActive={activeForm === 9}
              onToggle={() => setActiveForm(activeForm === 9 ? null : 9)}
            >
              <CompactQuickForm />
            </FormContainer>

            {/* Form 10: Multi-Step */}
            <FormContainer
              title="Multi-Step"
              description="Progressive disclosure with step indicator"
              number={10}
              isActive={activeForm === 10}
              onToggle={() => setActiveForm(activeForm === 10 ? null : 10)}
            >
              <MultiStepForm />
            </FormContainer>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Container Component
function FormContainer({
  title,
  description,
  number,
  children,
  isActive,
  onToggle
}: {
  title: string
  description: string
  number: number
  children: React.ReactNode
  isActive: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-2 border-gray-200 rounded-2xl overflow-hidden bg-white">
      <div className="bg-gray-50 p-6 border-b-2 border-gray-200">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {number}. {title}
            </h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
          <button
            onClick={onToggle}
            className="ml-4 px-3 py-1 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            {isActive ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>
      {isActive && (
        <div className="p-8 bg-gray-50">
          {children}
        </div>
      )}
    </div>
  )
}

// Form 1: Classic Centered
function ClassicCenteredForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Form submitted successfully!')
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name-1" className="block text-sm font-medium text-gray-900 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name-1"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label htmlFor="email-1" className="block text-sm font-medium text-gray-900 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email-1"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            placeholder="john@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="message-1" className="block text-sm font-medium text-gray-900 mb-2">
            Message
          </label>
          <textarea
            id="message-1"
            rows={4}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
            placeholder="Tell us how we can help..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full ob-btn ob-btn-primary ob-btn-large"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

// Form 2: Split Layout
function SplitLayoutForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Form submitted successfully!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fname-2" className="block text-sm font-medium text-gray-900 mb-2">
            First Name
          </label>
          <input
            type="text"
            id="fname-2"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label htmlFor="lname-2" className="block text-sm font-medium text-gray-900 mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lname-2"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            placeholder="Doe"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="email-2" className="block text-sm font-medium text-gray-900 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email-2"
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
          placeholder="john@example.com"
          required
        />
      </div>
      <div>
        <label htmlFor="subject-2" className="block text-sm font-medium text-gray-900 mb-2">
          Subject
        </label>
        <select
          id="subject-2"
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-white"
          required
        >
          <option value="">Select a topic</option>
          <option value="general">General Inquiry</option>
          <option value="support">Technical Support</option>
          <option value="courses">Course Information</option>
          <option value="membership">Membership Questions</option>
        </select>
      </div>
      <div>
        <label htmlFor="message-2" className="block text-sm font-medium text-gray-900 mb-2">
          Message
        </label>
        <textarea
          id="message-2"
          rows={4}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
          placeholder="Tell us more..."
          required
        />
      </div>
      <button
        type="submit"
        className="w-full ob-btn ob-btn-primary ob-btn-large"
      >
        Submit
      </button>
    </form>
  )
}

// Form 3: Card Style
function CardStyleForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Form submitted successfully!')
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h3>
        <p className="text-gray-600">We'd love to hear from you</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone Number (optional)"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
          />
        </div>
        <div>
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full ob-btn ob-btn-gp-wbg-p ob-btn-large"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

// Form 4: Floating Labels
function FloatingLabelsForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Form submitted successfully!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="relative">
        <input
          type="text"
          id="name-4"
          className="peer w-full px-4 pt-6 pb-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
          placeholder=" "
          required
        />
        <label
          htmlFor="name-4"
          className="absolute left-4 top-4 text-gray-600 text-sm font-medium transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-4 peer-focus:text-sm peer-focus:translate-y-0"
        >
          Full Name
        </label>
      </div>
      <div className="relative">
        <input
          type="email"
          id="email-4"
          className="peer w-full px-4 pt-6 pb-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
          placeholder=" "
          required
        />
        <label
          htmlFor="email-4"
          className="absolute left-4 top-4 text-gray-600 text-sm font-medium transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-4 peer-focus:text-sm peer-focus:translate-y-0"
        >
          Email Address
        </label>
      </div>
      <div className="relative">
        <textarea
          id="message-4"
          rows={4}
          className="peer w-full px-4 pt-6 pb-2 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
          placeholder=" "
          required
        />
        <label
          htmlFor="message-4"
          className="absolute left-4 top-4 text-gray-600 text-sm font-medium transition-all peer-placeholder-shown:top-6 peer-focus:top-4 peer-focus:text-sm"
        >
          Your Message
        </label>
      </div>
      <button
        type="submit"
        className="w-full ob-btn ob-btn-primary ob-btn-large"
      >
        Send Message
      </button>
    </form>
  )
}

// Form 5: Inline Style
function InlineStyleForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Form submitted successfully!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Name"
          className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
          required
        />
      </div>
      <textarea
        rows={3}
        placeholder="Quick message..."
        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
        required
      />
      <button
        type="submit"
        className="w-full sm:w-auto ob-btn ob-btn-gp-wbg-p"
      >
        Send
      </button>
    </form>
  )
}

// Form 6: Dark Mode
function DarkModeForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Form submitted successfully!')
  }

  return (
    <div className="bg-black rounded-2xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Contact Us</h3>
        <p className="text-gray-400">We're here to help</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all"
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all"
            required
          />
        </div>
        <div>
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all resize-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-300 text-black font-bold py-3 px-6 rounded-xl hover:bg-yellow-400 transition-all transform hover:scale-[1.02]"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

// Form 7: Minimal Border
function MinimalBorderForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Form submitted successfully!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label htmlFor="name-7" className="block text-sm font-medium text-gray-900 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name-7"
          className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-black transition-colors bg-transparent"
          placeholder="Enter your name"
          required
        />
      </div>
      <div>
        <label htmlFor="email-7" className="block text-sm font-medium text-gray-900 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email-7"
          className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-black transition-colors bg-transparent"
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <label htmlFor="message-7" className="block text-sm font-medium text-gray-900 mb-2">
          Message
        </label>
        <textarea
          id="message-7"
          rows={3}
          className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-black transition-colors bg-transparent resize-none"
          placeholder="What's on your mind?"
          required
        />
      </div>
      <button
        type="submit"
        className="ob-btn ob-btn-primary"
      >
        Submit
      </button>
    </form>
  )
}

// Form 8: Full Width Hero
function FullWidthForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Form submitted successfully!')
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-10 text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-center">Let's Talk</h2>
        <p className="text-gray-400 text-center mb-8 text-lg">
          Have questions? We'd love to hear from you.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all"
            required
          />
          <textarea
            rows={5}
            placeholder="Tell us what you're looking for..."
            className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all resize-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-300 text-black font-bold py-4 px-8 rounded-xl hover:bg-yellow-400 transition-all transform hover:scale-[1.02] text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

// Form 9: Compact Quick
function CompactQuickForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Thanks! We'll be in touch soon.")
  }

  return (
    <div className="max-w-xl mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Contact</h3>
        <p className="text-gray-600">Drop us your email and we'll reach out</p>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="email"
          placeholder="your@email.com"
          className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
          required
        />
        <button
          type="submit"
          className="ob-btn ob-btn-primary whitespace-nowrap"
        >
          Contact Me
        </button>
      </form>
      <p className="text-xs text-gray-500 text-center mt-3">
        We typically respond within 24 hours
      </p>
    </div>
  )
}

// Form 10: Multi-Step
function MultiStepForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      toast.success('Form submitted successfully!')
      setStep(1)
      setFormData({ name: '', email: '', phone: '', interest: '', message: '' })
    }
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <div>
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">Step {step} of 3</span>
          <span className="text-sm font-medium text-gray-600">{Math.round((step / 3) * 100)}%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-black transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Basic Information</h3>
            <div>
              <label htmlFor="name-10" className="block text-sm font-medium text-gray-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name-10"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="email-10" className="block text-sm font-medium text-gray-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email-10"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                required
              />
            </div>
          </div>
        )}

        {/* Step 2: Contact Details */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Details</h3>
            <div>
              <label htmlFor="phone-10" className="block text-sm font-medium text-gray-900 mb-2">
                Phone Number (optional)
              </label>
              <input
                type="tel"
                id="phone-10"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label htmlFor="interest-10" className="block text-sm font-medium text-gray-900 mb-2">
                What are you interested in?
              </label>
              <select
                id="interest-10"
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-white"
                required
              >
                <option value="">Select an option</option>
                <option value="courses">Boxing Courses</option>
                <option value="coaching">Live Coaching</option>
                <option value="membership">Membership</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 3: Your Message */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Your Message</h3>
            <div>
              <label htmlFor="message-10" className="block text-sm font-medium text-gray-900 mb-2">
                Tell us more
              </label>
              <textarea
                id="message-10"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                placeholder="Share any questions or details..."
                required
              />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-3 pt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="flex-1 ob-btn ob-btn-secondary"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className="flex-1 ob-btn ob-btn-primary"
          >
            {step === 3 ? 'Submit' : 'Continue'}
          </button>
        </div>
      </form>
    </div>
  )
}
