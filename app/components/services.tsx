import Link from 'next/link';

export function Services() {
  const services = [
    {
      title: 'WordPress Development',
      description: 'Custom themes, plugins, and integrations built with modern frameworks. We specialize in headless WordPress architectures that combine the flexibility of React with the power of WordPress as a content management system.',
      points: [
        'Custom theme development',
        'Headless WordPress + React',
        'WooCommerce solutions',
        'Performance optimization'
      ]
    },
    {
      title: 'Modern Frameworks',
      description: 'React, Next.js, and cutting-edge JavaScript frameworks for fast, interactive user experiences. We build scalable applications that work seamlessly across all devices and screen sizes.',
      points: [
        'React & Next.js apps',
        'TypeScript integration',
        'API development',
        'Progressive Web Apps'
      ]
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support to keep your website running smoothly. We provide documentation, training, and long-term partnership for growing businesses.',
      points: [
        'Regular updates & security',
        'Performance monitoring',
        'Technical documentation',
        'Priority support'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24" id="services">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-12 md:mb-20 text-center">
          What We Do
        </h2>
        
        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Blob shape illustration */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative w-full max-w-[400px] mx-auto aspect-square">
                  {/* Organic blob background */}
                  <div 
                    className="absolute inset-0 bg-gray-100"
                    style={{
                      borderRadius: index === 0 
                        ? '60% 40% 30% 70% / 60% 30% 70% 40%'
                        : index === 1 
                        ? '30% 60% 70% 40% / 50% 60% 30% 60%'
                        : '40% 60% 60% 40% / 60% 40% 60% 40%'
                    }}
                  />
                  {/* Icon placeholder - you can add actual icons here */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center">
                      <div className="w-20 h-20 bg-white" 
                        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <h3 className="text-2xl md:text-3xl mb-4">{service.title}</h3>
                <p className="text-base md:text-lg mb-6 leading-relaxed text-gray-700">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start text-base md:text-lg">
                      <span className="mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-base md:text-lg hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
