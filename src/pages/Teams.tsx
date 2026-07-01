const teams = [
  {
    img: "https://images.unsplash.com/photo-1697517529954-b6845f3245a0?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Aditya Pratama",
    role: "Founder & Creative Director",
    desc: "Leading the vision and design philosophy of Mont Blanc.",
  },
  {
    img: "https://images.unsplash.com/photo-1677208313211-21b569fc4420?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Nadia Putri",
    role: "Lead Interior Designer",
    desc: "Specializing in luxury residential and modern interiors.",
  },
  {
    img: "https://images.unsplash.com/photo-1640682193580-0384343a2eaf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Rizky Mahendra",
    role: "Architect",
    desc: "Creating elegant and functional architectural solutions.",
  },
  {
    img: "https://images.unsplash.com/photo-1760574740388-870d93c658a6?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Bima Saputra",
    role: "Project Manager",
    desc: "Ensuring every project is delivered on time and on budget.",
  },
  {
    img: "https://images.unsplash.com/photo-1573103610506-cce3f53b6980?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sarah Wijaya",
    role: "Furniture Specialist",
    desc: "Designing bespoke furniture tailored to every client.",
  },
  {
    img: "https://images.unsplash.com/photo-1731335213287-d902c76d0ec1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Michelle Tan",
    role: "Design Consultant",
    desc: "Transforming ideas into luxurious living experiences.",
  },
];

const Teams = () => {
  return (
    <div className="min-h-screen bg-[#0F1921] text-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <p className="text-[#D1C19E] tracking-[6px] mb-4">OUR TEAM</p>

        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Meet The Experts
        </h1>

        <p className="text-[#A7ADB3] text-lg leading-8 max-w-4xl mb-20">
          Behind every successful project is a team of passionate architects,
          interior designers, project managers, and craftsmen dedicated to
          creating timeless luxury spaces.
        </p>

        {/* TEAM GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((member) => (
            <div
              key={member.name}
              className="
    bg-[#16222B]
    border
    border-[#2A3842]
    rounded-2xl
    overflow-hidden
    hover:border-[#D1C19E]
    hover:-translate-y-2
    hover:shadow-[0_0_30px_rgba(184,138,46,0.15)]
    transition
    duration-300
  "
            >
              {/* PHOTO */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="
      w-full
      h-full
      object-cover
      object-center
      transition
      duration-700
      hover:scale-110
    "
                />
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-2">{member.name}</h2>

                <p className="text-[#D1C19E] mb-4">{member.role}</p>

                <p className="text-[#A7ADB3] leading-7">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
