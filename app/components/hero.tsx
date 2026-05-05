import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text content */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              Build Custom Websites Faster
            </h1>

            <span className="block w-2 h-2 rounded-full bg-black mb-6" />

            <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-10 max-w-[480px]">
              WordPress development and custom web solutions for agencies and fast-moving teams who ship without compromise.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/#work"
                className="px-7 py-3.5 bg-black text-white rounded-full font-semibold text-sm hover:bg-gray-900 transition-colors"
              >
                View Our Work →
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3.5 border-2 border-black text-black rounded-full font-semibold text-sm hover:bg-gray-50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right — logo image */}
          <div className="relative rounded-3xl overflow-hidden bg-violet-50 flex items-center justify-center aspect-[4/3]">
            <Image
              src="/images/logos/raccoon-soft-logo.svg"
              alt="raccoonSoft"
              width={340}
              height={340}
              className="w-2/3 h-2/3 object-contain opacity-90"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
