const Testimonials = () => {
  const testimonials = [
    {
      stars: "★★★★★",
      name: "Kevin Irawan",
      role: "Property Investor",
      quote:
        "Outstanding craftsmanship and premium finishing quality throughout the entire project.",
    },
    {
      stars: "★★★★★",
      name: "Fahri Zulfikar",
      role: "Architect Consultant",
      quote:
        "Mont Blanc delivered a perfect balance of functionality, aesthetics, and professionalism.",
    },
    {
      stars: "★★★★★",
      name: "Arsyadio Aditya",
      role: "CEO, Jakarta",
      quote:
        "Mont Blanc transformed our house into a modern masterpiece with exceptional attention to detail.",
    },
    {
      stars: "★★★★★",
      name: "Rizky Maulana",
      role: "Entrepreneur",
      quote:
        "The team exceeded our expectations with innovative designs and seamless project execution.",
    },
    {
      stars: "★★★★★",
      name: "Tito Adhianto",
      role: "Homeowner",
      quote:
        "Our dream home finally became reality thanks to Mont Blanc's dedication and expertise.",
    },
    {
      stars: "★★★★★",
      name: "Maajid Ansyari",
      role: "Business Executive",
      quote:
        "Professional service, premium materials, and remarkable results from start to finish.",
    },
    {
      stars: "★★★★★",
      name: "Raka Wijaya",
      role: "Business Owner",
      quote:
        "Professional team, elegant design, and exceptional attention to every detail.",
    },
  ];

  return (
    <section className="bg-[#16222B] py-24">
      <p
        className="
        text-center
        text-[#D1C19E]
        tracking-[6px]
        mb-4
      "
      >
        CLIENT REVIEWS
      </p>

      <h2
        className="
        text-center
        text-5xl
        font-bold
        mb-16
      "
      >
        Testimonials
      </h2>

      <div className="overflow-hidden">
        <div
          className="
            flex
            gap-8
            w-max
            animate-[scroll_30s_linear_infinite]
          "
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="
                  min-w-[400px]
                  max-w-[400px]
                  bg-[#0F1921]
                  border
                  border-[#2A3842]
                  rounded-2xl
                  p-8
                  hover:border-[#D1C19E]
                  transition
                "
            >
              <p
                className="
                  text-[#D1C19E]
                  text-2xl
                  mb-4
                "
              >
                {item.stars}
              </p>

              <p
                className="
                  italic
                  text-zinc-300
                  leading-8
                  mb-8
                "
              >
                "{item.quote}"
              </p>

              <h3
                className="
                  font-bold
                  text-xl
                "
              >
                {item.name}
              </h3>

              <p className="text-zinc-500">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
