import Link from 'next/link';

export function Portfolio() {
  const projects = [
    { 
      title: '94btc', 
      description: 'Cryptocurrency trading platform with real-time data visualization and custom WordPress integration.',
      slug: '94btc',
      category: 'WordPress'
    },
    { 
      title: 'Sites de Apostas', 
      description: 'Multi-site WordPress network for sports betting affiliates with centralized management.',
      slug: 'apostas',
      category: 'Multi-site'
    },
    { 
      title: 'E-Commerce Platform', 
      description: 'Custom WooCommerce B2B solution with tiered pricing and approval workflows.',
      slug: 'ecommerce-platform',
      category: 'WooCommerce'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="work">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-12 md:mb-16 text-center">
          Recent Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div 
              key={project.slug} 
              className="bg-white rounded-2xl overflow-hidden border-2 border-black hover:shadow-xl transition-shadow"
            >
              {/* Placeholder for project images */}
              <div className="aspect-[4/3] bg-gray-100 border-b-2 border-black flex items-center justify-center">
                <span className="text-gray-400 text-sm">Project Screenshot</span>
              </div>
              
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl md:text-2xl mb-3">{project.title}</h3>
                <p className="text-sm md:text-base mb-4 text-gray-700 leading-relaxed">
                  {project.description}
                </p>
                <Link 
                  href={`/work/${project.slug}`} 
                  className="inline-flex items-center text-sm md:text-base hover:underline font-medium"
                >
                  View case study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
