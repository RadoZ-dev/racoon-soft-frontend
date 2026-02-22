'use client';

import { ContactForm } from 'app/components/contact-form';

export default function ContactPage() {
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
          <ContactForm showCompanyBudget />
          <p className="text-sm text-gray-600 mt-6">
            * Required fields. Your information will be kept confidential and only used to respond to your inquiry.
          </p>
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
