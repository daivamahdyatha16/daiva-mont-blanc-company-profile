const Home = () => {
  return (
    <main className="bg-black text-white">
      <section
        className="
          relative
          h-screen
          bg-cover
          bg-center
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
          <p className="mb-6 tracking-[8px] text-[#B88A2E]">
            INTERIOR DESIGN & BUILD
          </p>

          <h1 className="mb-6
  text-center
  text-5xl
  font-bold
  md:text-7xl
  lg:text-8xl
">
            MONT BLANC
          </h1>

          <p className="mb-10
  max-w-2xl
  text-center
  text-base
  md:text-lg
  text-gray-300
">
            Transforming spaces into timeless experiences through premium
            interior design, architecture, and custom furniture craftsmanship.
          </p>

          <div className="flex
  flex-col
  md:flex-row
  gap-5">
            <button className="rounded bg-yellow-700 px-8 py-4">
              Explore Services
            </button>

            <button className="rounded border border-white px-8 py-4">
              View Projects
            </button>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-16">
        <div className="max-w-7xl
  mx-auto
  grid
  grid-cols-2
  md:grid-cols-4
  gap-8
  text-center">
          <div>
            <h2 className="text-5xl font-bold text-[#B88A2E]">5+</h2>
            <p>Years Experience</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-[#B88A2E]">150+</h2>
            <p>Projects</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-[#B88A2E]">98%</h2>
            <p>Satisfaction</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-[#B88A2E]">50+</h2>
            <p>Experts</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-24">
        <div className="grid
  md:grid-cols-2
  gap-20
  px-6">
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
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 py-24">
        <h2 className="mb-20 text-center text-5xl font-bold">Our Services</h2>

        <div className="mx-auto
  grid
  max-w-7xl
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  gap-8
  px-6
">
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
            <h3 className="text-2xl mb-4">Interior Design</h3>

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
            <h3 className="text-2xl mb-4">Renovation</h3>
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
            <h3 className="text-2xl mb-4">Custom Furniture</h3>
            <p>Furniture built for your space.</p>
          </div>
        </div>
      </section>
      <section className="py-24">
        <h2 className="mb-16 text-center text-5xl font-bold">
          Featured Projects
        </h2>

        <div className="mx-auto
  grid
  max-w-7xl
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  gap-4
  px-6
">
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
                <p className="text-[#B88A2E]">Interior</p>

                <h3 className="text-2xl font-bold">Luxury Living Room</h3>
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
                <p className="text-[#B88A2E]">Residential</p>

                <h3 className="text-2xl font-bold">Modern Family House</h3>
              </div>
            </div>
          </div>

          {/* PROJECT 3 */}

          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde"
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
                <p className="text-[#B88A2E]">Architecture</p>

                <h3 className="text-2xl font-bold">Contemporary Villa</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 py-24">
        <h2 className="mb-16 text-center text-5xl font-bold">Testimonials</h2>

        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-2xl italic">
            "The quality exceeded our expectations."
          </p>

          <p className="text-[#B88A2E]">— Client Semarang</p>
        </div>
      </section>
      <section className="py-24 text-center">
        <h2 className="mb-8 text-5xl font-bold">
          Ready To Build Your Dream Space?
        </h2>

        <button className="rounded bg-[#B88A2E] px-10 py-4">Contact Us</button>
      </section>
    </main>
  );
};

export default Home;
