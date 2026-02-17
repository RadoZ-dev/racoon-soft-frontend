import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock project data - replace with real data from CMS or API
const projects: Record<string, {
  title: string;
  subtitle: string;
  year: string;
  client: string;
  services: string[];
  description: string;
  challenge: string;
  solution: string;
  results: string[];
}> = {
  '94btc': {
    title: '94btc',
    subtitle: 'Cryptocurrency Trading Platform',
    year: '2025',
    client: 'Confidential Client',
    services: ['Custom WordPress Theme', 'API Integration', 'Performance Optimization'],
    description: 'A high-performance cryptocurrency trading platform built on WordPress with custom integrations and real-time data visualization.',
    challenge: 'The client needed a fast, secure platform to display real-time cryptocurrency data while maintaining the flexibility of WordPress for content management.',
    solution: 'We built a custom WordPress theme with headless architecture, integrating React components for dynamic data visualization while keeping the CMS benefits of WordPress for static content.',
    results: [
      'Page load time reduced by 65%',
      'Real-time data updates without page refresh',
      'Mobile-responsive trading dashboard',
      'SEO-optimized content pages'
    ]
  },
  'apostas': {
    title: 'Sites de Apostas',
    subtitle: 'Sports Betting Affiliate Network',
    year: '2024',
    client: 'Sports Marketing Agency',
    services: ['WordPress Development', 'Custom Plugin Development', 'Multi-site Setup'],
    description: 'A multi-site WordPress network for managing multiple sports betting affiliate websites with centralized content management.',
    challenge: 'Managing multiple affiliate sites with similar structure but different branding and content became inefficient and time-consuming.',
    solution: 'Implemented WordPress Multisite with custom plugins for shared functionality, while maintaining individual site customization through child themes.',
    results: [
      'Reduced site management time by 70%',
      'Unified plugin updates across all sites',
      'Consistent performance metrics',
      'Scalable architecture for new sites'
    ]
  },
  'ecommerce-platform': {
    title: 'E-Commerce Platform',
    subtitle: 'Custom WooCommerce Solution',
    year: '2024',
    client: 'Retail Business',
    services: ['WooCommerce Development', 'Payment Integration', 'Custom Checkout'],
    description: 'A custom e-commerce platform built on WooCommerce with specialized checkout flow and inventory management.',
    challenge: 'Standard WooCommerce checkout didn\'t meet the complex requirements for this B2B retail business with tiered pricing and approval workflows.',
    solution: 'Developed custom WooCommerce plugins to handle complex pricing rules, multi-step approval process, and custom inventory management system.',
    results: [
      'Automated B2B ordering process',
      'Reduced order processing time by 80%',
      'Custom reporting dashboard',
      'Integrated with existing ERP system'
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug: slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="py-12 md:py-16 lg:py-24 border-b border-black">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <Link href="/" className="inline-flex items-center mb-6 md:mb-8 hover:underline">
            ← Back to home
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl mb-6">
                {project.subtitle}
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-wide mb-2">Year</h3>
                <p className="text-lg">{project.year}</p>
              </div>
              
              <div>
                <h3 className="text-sm uppercase tracking-wide mb-2">Client</h3>
                <p className="text-lg">{project.client}</p>
              </div>
              
              <div>
                <h3 className="text-sm uppercase tracking-wide mb-2">Services</h3>
                <ul className="space-y-1">
                  {project.services.map((service) => (
                    <li key={service} className="text-lg">• {service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="aspect-[16/9] bg-gray-100 border-2 border-black flex items-center justify-center">
            <span className="text-gray-400">Project Screenshot</span>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl mb-6">The Challenge</h2>
          <p className="text-base md:text-lg leading-relaxed">
            {project.challenge}
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="py-12 md:py-16">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl mb-6">The Solution</h2>
          <p className="text-base md:text-lg leading-relaxed">
            {project.solution}
          </p>
        </div>
      </section>

      {/* Additional Images */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="aspect-[4/3] bg-gray-100 border-2 border-black flex items-center justify-center">
              <span className="text-gray-400">Detail Screenshot 1</span>
            </div>
            <div className="aspect-[4/3] bg-gray-100 border-2 border-black flex items-center justify-center">
              <span className="text-gray-400">Detail Screenshot 2</span>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 md:py-16">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl mb-6">Results</h2>
          <ul className="space-y-3">
            {project.results.map((result) => (
              <li key={result} className="text-base md:text-lg flex items-start">
                <span className="mr-3">✓</span>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 border-t border-black">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-3xl mb-4">
            Have a similar project in mind?
          </h2>
          <p className="text-lg mb-6 md:mb-8">
            Let's discuss how we can help you achieve your goals.
          </p>
          <Link href="/contact">
            <button className="px-6 md:px-8 py-3 md:py-4 border-2 border-black hover:bg-black hover:text-white transition-colors text-base md:text-lg">
              Start a conversation
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
