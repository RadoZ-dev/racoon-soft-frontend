'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main>
      {/* Header */}
      <section className="py-12 md:py-16 lg:py-24 border-b border-black">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight">
            Let's Talk About Your Project
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Fill out the form below and I'll get back to you within 24 hours. Or email me directly at{' '}
            <a href="mailto:hello@raccoonsoft.com" className="underline hover:no-underline">
              hello@raccoonsoft.com
            </a>
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-base md:text-lg mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-base md:text-lg mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="john@example.com"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-base md:text-lg mb-2">
                Company/Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Your Company"
              />
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" className="block text-base md:text-lg mb-2">
                Project Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black bg-white"
              >
                <option value="">Select a range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-plus">$25,000+</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-base md:text-lg mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black resize-none"
                placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-colors text-base md:text-lg"
              >
                Send Message
              </button>
            </div>

            <p className="text-sm text-gray-600">
              * Required fields. Your information will be kept confidential and only used to respond to your inquiry.
            </p>
          </form>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 md:py-16 border-t border-black bg-gray-50">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl mb-8">What Happens Next?</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-2xl">01</div>
              <div>
                <h3 className="text-lg md:text-xl mb-2">Initial Response</h3>
                <p className="text-base">I'll review your message and respond within 24 hours with initial thoughts and questions.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="text-2xl">02</div>
              <div>
                <h3 className="text-lg md:text-xl mb-2">Discovery Call</h3>
                <p className="text-base">We'll schedule a call to discuss your project in detail, clarify requirements, and see if we're a good fit.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="text-2xl">03</div>
              <div>
                <h3 className="text-lg md:text-xl mb-2">Proposal</h3>
                <p className="text-base">If we decide to move forward, I'll send you a detailed proposal with scope, timeline, and pricing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
