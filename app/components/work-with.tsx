export function WorkWith() {
  const clients = ['Agencies', 'Startups', 'Growing Businesses'];

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <h2 className="text-2xl md:text-3xl mb-6">Who We Work Best With</h2>
        <div className="space-y-2 mb-8 md:mb-12">
          {clients.map((client) => (
            <div key={client} className="text-lg md:text-xl">
              {client}
            </div>
          ))}
        </div>
        <hr className="border-black" />
      </div>
    </section>
  );
}
