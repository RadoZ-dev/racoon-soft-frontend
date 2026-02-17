import Link from 'next/link';

export function AboutSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 leading-relaxed">
              I'm Radoslav, a WordPress developer with over a decade of experience building reliable, maintainable web systems. I work remotely with agencies and growing businesses that value clarity, structure, and long-term thinking.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 leading-relaxed">
              raccoonSoft is my independent studio — focused on delivering clean technical foundations without unnecessary complexity.
            </p>
            <Link href="/about" className="inline-flex items-center text-base md:text-lg hover:underline">
              → More about me
            </Link>
          </div>

          {/* Right Logo */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-black flex items-center justify-center">
              <div className="w-36 h-36 md:w-48 md:h-48 bg-white" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
