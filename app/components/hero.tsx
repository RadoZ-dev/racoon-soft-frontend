export function Hero() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight">
          Build Custom Websites <br className="hidden md:block" />
          <span className="relative inline-block">
            Faster
            <span className="absolute bottom-2 left-0 w-full h-3 bg-violet-600 opacity-20 -z-10"></span>
          </span>
          .
        </h1>
        
        <p className="text-lg md:text-xl mb-8 md:mb-10 max-w-[600px] mx-auto leading-relaxed text-gray-700">
          WordPress development and custom web solutions for agencies and fast-moving teams.
        </p>

        {/* Newsletter Signup */}
        <div className="max-w-[500px] mx-auto mb-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter email..."
              className="flex-1 px-4 py-3 border-2 border-violet-600 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-600 text-base"
            />
            <button className="px-6 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors text-base whitespace-nowrap">
              Subscribe →
            </button>
          </div>
        </div>
        
        <p className="text-sm text-gray-600">
          Get tips on web development directly in your inbox. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
