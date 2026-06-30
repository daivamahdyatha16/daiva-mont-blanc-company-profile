const About = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-[#B88A2E] tracking-[6px] mb-4">
          ABOUT US
        </p>

        <h1 className="text-6xl font-bold mb-8">
          Luxury Interior Design Experience
        </h1>

        <p className="text-zinc-400 text-lg leading-8 max-w-4xl">
          Mont Blanc specializes in luxury interior design,
          architecture, renovation, and custom furniture.
          We transform spaces into timeless experiences,
          combining elegance, functionality, and craftsmanship.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div
            className="
            border
            border-zinc-800
            rounded-xl
            p-10
            hover:border-[#B88A2E]
            hover:-translate-y-2
            transition
            duration-300
          "
          >
            <h2 className="text-5xl font-bold text-[#B88A2E]">
              12+
            </h2>

            <p className="mt-4 text-zinc-400">
              Years Experience
            </p>
          </div>

          <div
            className="
            border
            border-zinc-800
            rounded-xl
            p-10
            hover:border-[#B88A2E]
            hover:-translate-y-2
            transition
            duration-300
          "
          >
            <h2 className="text-5xl font-bold text-[#B88A2E]">
              250+
            </h2>

            <p className="mt-4 text-zinc-400">
              Completed Projects
            </p>
          </div>

          <div
            className="
            border
            border-zinc-800
            rounded-xl
            p-10
            hover:border-[#B88A2E]
            hover:-translate-y-2
            transition
            duration-300
          "
          >
            <h2 className="text-5xl font-bold text-[#B88A2E]">
              98%
            </h2>

            <p className="mt-4 text-zinc-400">
              Client Satisfaction
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;