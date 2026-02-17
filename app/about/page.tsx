export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-24 border-b border-black">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
                About raccoonSoft
              </h1>
              <p className="text-lg md:text-xl leading-relaxed">
                A WordPress development studio focused on delivering clean, maintainable web solutions for agencies and growing businesses.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-black flex items-center justify-center">
                <div className="w-36 h-36 md:w-48 md:h-48 bg-white" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl mb-8">My Story</h2>
          
          <div className="space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              I'm Radoslav, and I've been building websites professionally for over a decade. I started raccoonSoft as an independent studio to work directly with clients who value technical clarity and long-term thinking.
            </p>
            
            <p>
              Over the years, I've worked with agencies, startups, and established businesses — building everything from custom WordPress themes to complex integrations with modern JavaScript frameworks.
            </p>
            
            <p>
              What sets raccoonSoft apart is a focus on maintainable architecture. I don't chase trends or over-engineer solutions. Instead, I build websites that are easy to understand, easy to maintain, and built to last.
            </p>
            
            <p>
              I work remotely from [Location], collaborating with clients across different time zones. My process is structured, communication is clear, and the work speaks for itself.
            </p>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl mb-8 md:mb-12">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl mb-3">WordPress Development</h3>
              <ul className="space-y-2 text-base">
                <li>• Custom theme development</li>
                <li>• Plugin architecture</li>
                <li>• Performance optimization</li>
                <li>• WooCommerce solutions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl mb-3">Frontend Technologies</h3>
              <ul className="space-y-2 text-base">
                <li>• React & Next.js</li>
                <li>• Modern CSS/Tailwind</li>
                <li>• JavaScript/TypeScript</li>
                <li>• Headless CMS integration</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl mb-3">Process & Workflow</h3>
              <ul className="space-y-2 text-base">
                <li>• Git version control</li>
                <li>• Testing & debugging</li>
                <li>• Documentation</li>
                <li>• Client collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl mb-8">How I Work</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl mb-3">Clear Communication</h3>
              <p className="text-base md:text-lg leading-relaxed">
                No jargon, no guesswork. I explain technical decisions in plain language and keep you informed throughout the project.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl mb-3">Technical Excellence</h3>
              <p className="text-base md:text-lg leading-relaxed">
                Clean code, proper documentation, and sustainable architecture. Every project is built with long-term maintenance in mind.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl mb-3">Reliable Partnership</h3>
              <p className="text-base md:text-lg leading-relaxed">
                I meet deadlines, respond to questions, and take responsibility for the work. You get a partner, not just a contractor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
