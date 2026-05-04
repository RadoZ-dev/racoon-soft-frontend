import Link from 'next/link';

export function PortfolioFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-violet-200 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <div className="w-6 h-6 bg-white" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
              </div>
              <span className="text-lg font-medium">raccoonSoft</span>
            </div>
            <p className="text-sm text-gray-600">
              WordPress development and custom web solutions.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-medium mb-3 uppercase tracking-wide">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-600 hover:text-violet-700">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-violet-700">About</Link></li>
              <li><Link href="/#work" className="text-gray-600 hover:text-violet-700">Work</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-violet-700">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3 uppercase tracking-wide">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#services" className="text-gray-600 hover:text-violet-700">WordPress Development</Link></li>
              <li><Link href="/#services" className="text-gray-600 hover:text-violet-700">Custom Themes</Link></li>
              <li><Link href="/#services" className="text-gray-600 hover:text-violet-700">React Integration</Link></li>
              <li><Link href="/#services" className="text-gray-600 hover:text-violet-700">Maintenance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-3 uppercase tracking-wide">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hello@raccoonsoft.com" className="text-gray-600 hover:text-violet-700">Email</a></li>
              <li><a href="#" className="text-gray-600 hover:text-violet-700">LinkedIn</a></li>
              <li><a href="#" className="text-gray-600 hover:text-violet-700">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-violet-700">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-violet-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© {currentYear} raccoonSoft. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-violet-700">Privacy Policy</Link>
            <Link href="#" className="hover:text-violet-700">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
