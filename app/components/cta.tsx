import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-[#2E1065] text-white">
      <div className="max-w-[800px] mx-auto px-6 lg:px-12 text-center">
        <div className="w-24 h-24 bg-white mx-auto mb-8 flex items-center justify-center rounded-full">
          <div className="w-16 h-16 bg-violet-600"
            style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          />
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
          Ready to level up your web development?
        </h2>
        <p className="text-lg md:text-xl mb-8 md:mb-10 text-gray-300">
          Let us help you build a website that's fast, reliable, and built to last.
        </p>
        
        {/* Email Form */}
        <div className="max-w-[500px] mx-auto mb-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white text-base text-black"
            />
            <button className="px-6 py-3 bg-violet-500 text-white rounded-full hover:bg-violet-400 transition-colors text-base font-medium whitespace-nowrap">
              Get Started →
            </button>
          </div>
        </div>
        
        <p className="text-sm text-gray-400">
          Or <Link href="/contact" className="underline hover:no-underline">schedule a discovery call</Link> to discuss your project
        </p>
      </div>
    </section>
  );
}
