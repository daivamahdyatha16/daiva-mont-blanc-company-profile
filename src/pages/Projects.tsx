import Loading from "../components/Loading";
import { useEffect, useState } from "react";



const Projects = () => {
    const [loading, setLoading] = useState(true);
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
    <div className="min-h-screen bg-[#0F1921] text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-[#D1C19E] tracking-[6px] mb-4">
          OUR PORTFOLIO
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Featured Projects
        </h1>

        <p className="text-[#A7ADB3] text-lg leading-8 max-w-4xl mb-20">
          Explore our portfolio of luxury residential, commercial,
          renovation, and custom furniture projects designed to
          create timeless and meaningful spaces.
        </p>


        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >

          <div className="group relative overflow-hidden rounded-2xl">
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
                <p className="text-[#D1C19E]">
                  Residential Interior Design
                </p>

                <h3 className="text-2xl font-bold">
                  Modern Family Residence
                </h3>
              </div>
            </div>
          </div>


          <div className="group relative overflow-hidden rounded-2xl">
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
                <p className="text-[#D1C19E]">
                  Modern Luxury Living Room
                </p>

                <h3 className="text-2xl font-bold">
                  Elegant Living Space
                </h3>
              </div>
            </div>
          </div>


          <div className="group relative overflow-hidden rounded-2xl">
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
                <p className="text-[#D1C19E]">
                  Office Interior
                </p>

                <h3 className="text-2xl font-bold">
                  Corporate Workspace
                </h3>
              </div>
            </div>
          </div>


          <div className="group relative overflow-hidden rounded-2xl">
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
                <p className="text-[#D1C19E]">
                  Custom Furniture
                </p>

                <h3 className="text-2xl font-bold">
                  Built-In Wardrobe
                </h3>
              </div>
            </div>
          </div>


          <div className="group relative overflow-hidden rounded-2xl">
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
                <p className="text-[#D1C19E]">
                  Renovation & Design Build
                </p>

                <h3 className="text-2xl font-bold">
                  Complete Home Renovation
                </h3>
              </div>
            </div>
          </div>


          <div className="group relative overflow-hidden rounded-2xl">
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
                <p className="text-[#D1C19E]">
                  Commercial Space / Café Interior
                </p>

                <h3 className="text-2xl font-bold">
                  Modern Café Concept
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;