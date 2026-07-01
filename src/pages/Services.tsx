const services = [
  {
    icon: "🏠",
    title: "Residential Interior Design",
    desc: "Luxury interior solutions for living rooms, bedrooms, dining spaces, and kitchens."
  },
  {
    icon: "🪑",
    title: "Custom Furniture",
    desc: "Built-in furniture, wardrobes, cabinets, and custom-crafted pieces tailored to your lifestyle."
  },
  {
    icon: "🛠",
    title: "Renovation & Design Build",
    desc: "Complete renovation services from concept development to final execution."
  },
  {
    icon: "✨",
    title: "Luxury Living Spaces",
    desc: "Elegant and timeless interior experiences designed for modern luxury living."
  },
  {
    icon: "📐",
    title: "Interior Planning",
    desc: "Space planning, layout optimization, and functional interior solutions."
  },
  {
    icon: "💬",
    title: "Premium Consultation",
    desc: "Professional consultation services to transform your ideas into reality."
  },
];

const process = [
  "Consultation",
  "Concept Design",
  "Planning",
  "Construction",
  "Finishing",
];

const Services = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <p className="text-[#B88A2E] tracking-[6px] mb-4">
          OUR SERVICES
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          What We Offer
        </h1>

        <p className="text-zinc-400 text-lg leading-8 max-w-4xl mb-20">
          Mont Blanc provides premium interior design, renovation,
          and custom furniture solutions, delivering elegant spaces
          that combine luxury, comfort, and functionality.
        </p>

        {/* SERVICES */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="
                border
                border-zinc-800
                rounded-2xl
                p-8
                hover:border-[#B88A2E]
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(184,138,46,0.15)]
                transition
                duration-300
              "
            >
              <div className="text-5xl mb-6">
                {service.icon}
              </div>

              <h2 className="text-2xl font-bold mb-4">
                {service.title}
              </h2>

              <p className="text-zinc-400 leading-7">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

        {/* PROCESS */}

        <div className="mt-32">

          <p className="text-[#B88A2E] tracking-[6px] mb-4">
            OUR PROCESS
          </p>

          <h2 className="text-5xl font-bold mb-16">
            How We Work
          </h2>

          <div className="grid md:grid-cols-5 gap-6">

            {process.map((step, index) => (
              <div
                key={step}
                className="
                  border
                  border-zinc-800
                  rounded-2xl
                  p-8
                  text-center
                  hover:border-[#B88A2E]
                  hover:-translate-y-2
                  transition
                "
              >
                <div className="text-4xl font-bold text-[#B88A2E] mb-4">
                  0{index + 1}
                </div>

                <h3 className="font-semibold text-lg">
                  {step}
                </h3>
              </div>
            ))}

          </div>
        </div>

        {/* CTA */}

        <div className="mt-32 text-center">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready To Transform Your Space?
          </h2>

          <p className="text-zinc-400 mb-10">
            Let's create a timeless and luxurious environment together.
          </p>

          <a
            href="mailto:hello@montblanc.com"
            className="
              inline-block
              bg-[#B88A2E]
              text-black
              px-10
              py-4
              rounded-lg
              font-semibold
              hover:scale-105
              hover:shadow-[0_0_30px_rgba(184,138,46,0.3)]
              transition
            "
          >
            Contact Us
          </a>

        </div>

      </div>
    </div>
  );
};

export default Services;