const teams = [
  {
    name: "Alexander Blanc",
    role: "Founder & Lead Architect",
  },
  {
    name: "Sophia Laurent",
    role: "Senior Interior Designer",
  },
  {
    name: "Daniel Morgan",
    role: "Project Manager",
  },
  {
    name: "Emma Wilson",
    role: "Furniture Specialist",
  },
  {
    name: "Michael Ross",
    role: "Architect",
  },
  {
    name: "Olivia White",
    role: "Design Consultant",
  },
];

const Teams = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6">

      <div className="max-w-7xl mx-auto">

        <p className="text-[#B88A2E] tracking-[6px] mb-4">
          OUR TEAM
        </p>

        <h1 className="text-6xl font-bold mb-16">
          Meet The Experts
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {teams.map((member) => (
            <div
              key={member.name}
              className="
                bg-zinc-950
                border
                border-zinc-800
                rounded-xl
                p-8
                text-center
                hover:border-[#B88A2E]
                hover:-translate-y-2
                transition
                duration-300
              "
            >

              <div
                className="
                  w-28
                  h-28
                  rounded-full
                  bg-zinc-800
                  mx-auto
                  mb-6
                "
              />

              <h2 className="text-2xl font-bold">
                {member.name}
              </h2>

              <p className="text-[#B88A2E] mt-3">
                {member.role}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Teams;