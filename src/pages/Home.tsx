import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Testimonials from "../components/Testimonials";
import Counter from "../components/Counter";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="bg-black text-white">
      <section
        className="
          relative
          h-screen
          bg-cover
          bg-center
          animate-fade
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />

        {/* content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-8">
          <img
  src="/montblanc-logo.webp"
  alt="Mont Blanc"
  className="
    w-32
    md:w-40
    mb-8
    object-contain
    drop-shadow-[0_0_20px_rgba(184,138,46,0.15)]
  "
/>

<p className="mb-6 tracking-[8px] text-[#B88A2E]">
  INTERIOR DESIGN & BUILD
</p>

<h1
  className="
    mb-6
    text-center
    text-5xl
    font-bold
    md:text-7xl
    lg:text-8xl
  "
>
  MONT BLANC
</h1>

          <p
            className="mb-10
  max-w-2xl
  text-center
  text-base
  md:text-lg
  text-gray-300
"
          >
            Transforming spaces into timeless experiences through premium
            interior design, architecture, and custom furniture craftsmanship.
          </p>

          <div
            className="flex
    flex-col
    md:flex-row
    gap-5
    animate-fade
"
          >
            <button
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="
    rounded
    bg-[#B88A2E]
    px-8
    py-4
    hover:scale-105
    hover:shadow-[0_0_30px_rgba(184,138,46,0.3)]
    transition
  "
            >
              Explore Services
            </button>

            <button
              onClick={() => navigate("/projects")}
              className="
    rounded
    border
    border-white
    px-8
    py-4
    hover:scale-105
    hover:shadow-[0_0_30px_rgba(184,138,46,0.3)]
    transition
  "
            >
              View Projects
            </button>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-10">
        <p
          className="
    text-center
    text-[#B88A2E]
    tracking-[6px]
    mb-4
  "
        >
          OUR ACHIEVEMENTS
        </p>

        <div
          className="max-w-7xl
  mx-auto
  grid
  grid-cols-2
  md:grid-cols-4
  gap-8
  text-center"
        >
          <div>
            <h2 className="text-5xl font-bold text-[#B88A2E]">
              <Counter end={5} />+
            </h2>
            <p>Years Experience</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-[#B88A2E]">
              <Counter end={150} />+
            </h2>
            <p>Projects</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-[#B88A2E]">
              <Counter end={98} />%
            </h2>
            <p>Satisfaction</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-[#B88A2E]">
              <Counter end={20} />+
            </h2>
            <p>Experts</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-24">
        <div
          className="grid
  md:grid-cols-2
  gap-20
  px-6"
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858"
              className="rounded"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-4 text-[#B88A2E]">ABOUT US</p>

            <h2 className="mb-6 text-5xl font-bold">
              Luxury Interior Design Experience
            </h2>

            <p className="text-gray-400">
              Mont Blanc specializes in luxury interior design, architecture,
              renovation, and custom furniture.
            </p>
            <div className="mt-8 space-y-3">
              <p>✓ Luxury Interior Design</p>
              <p>✓ Architecture Planning</p>
              <p>✓ Renovation Service</p>
              <p>✓ Custom Furniture</p>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="bg-zinc-950 py-24">
        <h2 className="mb-20 text-center text-5xl font-bold">Our Services</h2>

        <div
          className="mx-auto
  grid
  max-w-7xl
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  gap-8
  px-6
"
        >
          <div
            className="
border border-zinc-700
p-8
rounded
hover:border-[#B88A2E]
hover:-translate-y-2
hover:shadow-[0_0_30px_rgba(202,138,4,0.2)]
transition
duration-300
"
          >
            <h3 className="text-2xl mb-4">🏠 Interior Design</h3>

            <p>Luxury residential & commercial.</p>
          </div>

          <div
            className="
border border-zinc-700
p-8
rounded
hover:border-[#B88A2E]
hover:-translate-y-2
hover:shadow-[0_0_30px_rgba(202,138,4,0.2)]
transition
duration-300
"
          >
            <h3 className="text-2xl mb-4">🛠 Renovation</h3>
            <p>Premium renovation services.</p>
          </div>

          <div
            className="
border border-zinc-700
p-8
rounded
hover:border-[#B88A2E]
hover:-translate-y-2
hover:shadow-[0_0_30px_rgba(202,138,4,0.2)]
transition
duration-300
"
          >
            <h3 className="text-2xl mb-4">🪑 Custom Furniture</h3>
            <p>Furniture built for your space.</p>
          </div>
        </div>
      </section>
      <section id="projects" className="py-24">
        <h2 className="mb-16 text-center text-5xl font-bold">
          Featured Projects
        </h2>

        <div
          className="
    mx-auto
    grid
    max-w-7xl
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    gap-4
    px-6
  "
        >
          {/* PROJECT 1 */}
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
              className="
        h-96
        w-full
        object-cover
        transition
        duration-500
        group-hover:scale-110
        group-hover:brightness-50
      "
            />

            <div
              className="
        absolute
        inset-0
        flex
        items-end
        p-6
        opacity-0
        transition
        duration-300
        group-hover:opacity-100
      "
            >
              <div>
                <p className="text-[#B88A2E]">Residential Interior Design</p>
                <h3 className="text-2xl font-bold">Modern Family Residence</h3>
              </div>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea"
              className="
        h-96
        w-full
        object-cover
        transition
        duration-500
        group-hover:scale-110
        group-hover:brightness-50
      "
            />

            <div
              className="
        absolute
        inset-0
        flex
        items-end
        p-6
        opacity-0
        transition
        duration-300
        group-hover:opacity-100
      "
            >
              <div>
                <p className="text-[#B88A2E]">Modern Luxury Living Room</p>
                <h3 className="text-2xl font-bold">Elegant Living Space</h3>
              </div>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
              className="
        h-96
        w-full
        object-cover
        transition
        duration-500
        group-hover:scale-110
        group-hover:brightness-50
      "
            />

            <div
              className="
        absolute
        inset-0
        flex
        items-end
        p-6
        opacity-0
        transition
        duration-300
        group-hover:opacity-100
      "
            >
              <div>
                <p className="text-[#B88A2E]">Office Interior</p>
                <h3 className="text-2xl font-bold">Corporate Workspace</h3>
              </div>
            </div>
          </div>

          {/* PROJECT 4 */}
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
              className="
        h-96
        w-full
        object-cover
        transition
        duration-500
        group-hover:scale-110
        group-hover:brightness-50
      "
            />

            <div
              className="
        absolute
        inset-0
        flex
        items-end
        p-6
        opacity-0
        transition
        duration-300
        group-hover:opacity-100
      "
            >
              <div>
                <p className="text-[#B88A2E]">Custom Furniture</p>
                <h3 className="text-2xl font-bold">Built-In Wardrobe</h3>
              </div>
            </div>
          </div>

          {/* PROJECT 5 */}
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
              className="
        h-96
        w-full
        object-cover
        transition
        duration-500
        group-hover:scale-110
        group-hover:brightness-50
      "
            />

            <div
              className="
        absolute
        inset-0
        flex
        items-end
        p-6
        opacity-0
        transition
        duration-300
        group-hover:opacity-100
      "
            >
              <div>
                <p className="text-[#B88A2E]">Renovation & Design Build</p>
                <h3 className="text-2xl font-bold">Complete Home Renovation</h3>
              </div>
            </div>
          </div>

          {/* PROJECT 6 */}
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
              className="
        h-96
        w-full
        object-cover
        transition
        duration-500
        group-hover:scale-110
        group-hover:brightness-50
      "
            />

            <div
              className="
        absolute
        inset-0
        flex
        items-end
        p-6
        opacity-0
        transition
        duration-300
        group-hover:opacity-100
      "
            >
              <div>
                <p className="text-[#B88A2E]">
                  Commercial Space / Café Interior
                </p>
                <h3 className="text-2xl font-bold">Modern Café Concept</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="bg-zinc-950 py-24 text-center">
        <h2 className="mb-8 text-5xl font-bold">
          Ready To Build Your Dream Space?
        </h2>
        <a
          href="mailto:hello@montblanc.com"
          className="
    inline-block
    rounded
    bg-[#B88A2E]
    px-10
    py-4
    hover:scale-105
    hover:shadow-[0_0_30px_rgba(184,138,46,0.3)]
    transition
  "
        >
          Contact Us
        </a>{" "}
        
      </section>
    </main>
  );
};

export default Home;
