import Counter from "../components/Counter";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0F1921] text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}

        <p className="text-[#D1C19E] tracking-[6px] mb-4">
          ABOUT US
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Luxury Interior Design Experience
        </h1>

        <p className="text-[#A7ADB3] text-lg leading-9 max-w-5xl">
          Mont Blanc is a premium interior design and build company
          specializing in residential interiors, custom furniture,
          renovation, and architectural solutions.
          <br />
          <br />
          We transform spaces into timeless experiences by combining
          elegant aesthetics, functional design, and exceptional
          craftsmanship. From modern luxury living rooms and custom
          wardrobes to complete renovation projects, our team is
          committed to delivering personalized spaces that reflect
          each client's vision and lifestyle.
        </p>

        {/* HERO IMAGE */}

        <div className="my-20 overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea"
            alt="Luxury Interior"
            className="
              h-[500px]
              w-full
              object-cover
              hover:scale-105
              transition
              duration-700
            "
          />
        </div>

        {/* STATISTICS */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            className="
              border
              border-[#2A3842]
              rounded-2xl
              p-10
              hover:border-[#D1C19E]
              hover:-translate-y-2
              hover:shadow-[0_0_30px_rgba(184,138,46,0.15)]
              transition
              duration-300
            "
          >
            <h2 className="text-5xl font-bold text-[#D1C19E]">
              <Counter end={5} />+
            </h2>

            <p className="mt-4 text-[#A7ADB3]">
              Years Experience
            </p>
          </div>

          <div
            className="
              border
              border-[#2A3842]
              rounded-2xl
              p-10
              hover:border-[#D1C19E]
              hover:-translate-y-2
              hover:shadow-[0_0_30px_rgba(184,138,46,0.15)]
              transition
              duration-300
            "
          >
            <h2 className="text-5xl font-bold text-[#D1C19E]">
              <Counter end={150} />+
            </h2>

            <p className="mt-4 text-[#A7ADB3]">
              Completed Projects
            </p>
          </div>

          <div
            className="
              border
              border-[#2A3842]
              rounded-2xl
              p-10
              hover:border-[#D1C19E]
              hover:-translate-y-2
              hover:shadow-[0_0_30px_rgba(184,138,46,0.15)]
              transition
              duration-300
            "
          >
            <h2 className="text-5xl font-bold text-[#D1C19E]">
              <Counter end={98} />%
            </h2>

            <p className="mt-4 text-[#A7ADB3]">
              Client Satisfaction
            </p>
          </div>

          <div
            className="
              border
              border-[#2A3842]
              rounded-2xl
              p-10
              hover:border-[#D1C19E]
              hover:-translate-y-2
              hover:shadow-[0_0_30px_rgba(184,138,46,0.15)]
              transition
              duration-300
            "
          >
            <h2 className="text-5xl font-bold text-[#D1C19E]">
              <Counter end={20} />+
            </h2>

            <p className="mt-4 text-[#A7ADB3]">
              Design Experts
            </p>
          </div>
        </div>

        {/* EXPERTISE */}

        <div className="mt-24">
          <p className="text-[#D1C19E] tracking-[6px] mb-4">
            OUR EXPERTISE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            What We Do Best
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="border-l-2 border-[#D1C19E] pl-5">
                <h3 className="text-xl font-semibold mb-2">
                  Residential Interior Design
                </h3>

                <p className="text-[#A7ADB3]">
                  Luxury residential interiors with modern,
                  elegant, and timeless concepts.
                </p>
              </div>

              <div className="border-l-2 border-[#D1C19E] pl-5">
                <h3 className="text-xl font-semibold mb-2">
                  Custom Furniture
                </h3>

                <p className="text-[#A7ADB3]">
                  Built-in furniture, wardrobes, cabinets,
                  and personalized luxury furnishings.
                </p>
              </div>

              <div className="border-l-2 border-[#D1C19E] pl-5">
                <h3 className="text-xl font-semibold mb-2">
                  Renovation & Design Build
                </h3>

                <p className="text-[#A7ADB3]">
                  End-to-end renovation services from
                  planning through final execution.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-[#D1C19E] pl-5">
                <h3 className="text-xl font-semibold mb-2">
                  Premium Consultation
                </h3>

                <p className="text-[#A7ADB3]">
                  Personalized design consultation
                  tailored to your lifestyle.
                </p>
              </div>

              <div className="border-l-2 border-[#D1C19E] pl-5">
                <h3 className="text-xl font-semibold mb-2">
                  Luxury Living Spaces
                </h3>

                <p className="text-[#A7ADB3]">
                  Modern luxury living rooms,
                  bedrooms, kitchens, and dining areas.
                </p>
              </div>

              <div className="border-l-2 border-[#D1C19E] pl-5">
                <h3 className="text-xl font-semibold mb-2">
                  Turnkey Project Service
                </h3>

                <p className="text-[#A7ADB3]">
                  Complete project handling from
                  concept to finishing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}

        <div className="mt-24 text-center">
          <button
            onClick={() => navigate("/projects")}
            className="
              rounded-xl
              bg-[#D1C19E]
              px-12
              py-5
              text-lg
              font-semibold
              hover:scale-105
              hover:shadow-[0_0_40px_rgba(184,138,46,0.3)]
              transition
            "
          >
            Explore Our Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;