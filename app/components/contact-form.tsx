'use client'

import { useState } from 'react'

type ContactFormProps = {
  showCompanyBudget?: boolean
}

export function ContactForm({ showCompanyBudget = true }: ContactFormProps) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/contact/v1/submit`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email'),
            company: formData.get('company'),
            budget: formData.get('budget'),
            message: formData.get('message'),
          }),
        }
      )

      const data = await response.json()

      if (response.ok && data.success) {
        setSuccess(true)
        setError(null)
        form.reset()
      } else {
        setSuccess(false)
        setError(data.message || 'Failed to send message. Please try again.')
      }
      setLoading(false)
    } catch (err) {
      console.error('Form submission error:', err)
      setSuccess(false)
      setError('An error occurred. Please try again.')
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-base md:text-lg mb-2">
          Your Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-base md:text-lg mb-2">
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="john@example.com"
        />
      </div>

      {showCompanyBudget && (
        <>
          <div>
            <label htmlFor="company" className="block text-base md:text-lg mb-2">
              Company/Organization
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your Company"
            />
          </div>

          <div>
            <label htmlFor="budget" className="block text-base md:text-lg mb-2">
              Project Budget
            </label>
            <select
              id="budget"
              name="budget"
              className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black bg-white"
            >
              <option value="">Select a range</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-plus">$25,000+</option>
            </select>
          </div>
        </>
      )}

      <div>
        <label htmlFor="message" className="block text-base md:text-lg mb-2">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black resize-none"
          placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto px-8 py-4 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors text-base md:text-lg disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {success && (
        <p className="text-green-600">Message sent successfully!</p>
      )}
      {error && <p className="text-red-600">{error}</p>}
    </form>
  )
}