export function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'We clarify goals, scope, and technical requirements. No vague briefs. No guesswork. Clear structure from day one.'
    },
    {
      number: '02',
      title: 'Build',
      description: 'Clean WordPress architecture, custom solutions where needed, and steady communication throughout the process.'
    },
    {
      number: '03',
      title: 'Launch',
      description: 'Testing, performance optimization, deployment checklist, and post-launch stability. You get a solid foundation.'
    }
  ];

  return (
    <section className="py-16 md:py-24" id="process">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-12 md:mb-16 text-center">
          How We Work
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-20 h-20 rounded-full bg-violet-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl md:text-2xl mb-4">{step.title}</h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
