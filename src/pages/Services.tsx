const services = [
  {
    title: "Interior Design",
    desc: "Luxury residential and commercial interior design."
  },
  {
    title: "Architecture",
    desc: "Modern architecture and space planning."
  },
  {
    title: "Renovation",
    desc: "Premium renovation and restoration services."
  },
  {
    title: "Custom Furniture",
    desc: "Exclusive handcrafted furniture."
  },
  {
    title: "Landscape",
    desc: "Luxury outdoor and landscape design."
  },
  {
    title: "Consultation",
    desc: "Professional design consultation services."
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6">

      <div className="max-w-7xl mx-auto">

        <p className="text-[#B88A2E] tracking-[6px] mb-4">
          OUR SERVICES
        </p>

        <h1 className="text-6xl font-bold mb-16">
          What We Offer
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="
                border
                border-zinc-800
                rounded-xl
                p-8
                hover:border-[#B88A2E]
                hover:-translate-y-2
                transition
                duration-300
              "
            >
              <h2 className="text-2xl font-bold mb-4">
                {service.title}
              </h2>

              <p className="text-zinc-400">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Services;