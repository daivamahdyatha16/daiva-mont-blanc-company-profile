import { Link } from "react-router-dom";
import { FaInstagram, FaThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-800 text-white">
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-16
          grid
          grid-cols-1
          md:grid-cols-3
          gap-12
        "
      >
        {/* BRAND */}

        <div>
          <div>
            <h2
              className="
      text-3xl
      font-bold
      tracking-[8px]
      text-[#B88A2E]
      mb-4
    "
            >
              MONT BLANC
            </h2>

            <p className="text-zinc-400 leading-8 max-w-sm">
              Transforming spaces into timeless experiences through premium
              interior design, architecture, and luxury craftsmanship.
            </p>
          </div>

          <p className="text-zinc-400 leading-8 max-w-sm">
            Transforming spaces into timeless experiences through premium
            interior design, architecture, and luxury craftsmanship.
          </p>
        </div>

        {/* QUICK LINKS */}

        <div>
          <h3 className="text-xl font-semibold mb-6">Quick Links</h3>

          <div className="space-y-4">
            <Link
              to="/"
              className="
                block
                text-zinc-400
                hover:text-[#B88A2E]
                transition
              "
            >
              Home
            </Link>

            <Link
              to="/about"
              className="
                block
                text-zinc-400
                hover:text-[#B88A2E]
                transition
              "
            >
              About
            </Link>

            <Link
              to="/projects"
              className="
                block
                text-zinc-400
                hover:text-[#B88A2E]
                transition
              "
            >
              Projects
            </Link>

            <Link
              to="/services"
              className="
                block
                text-zinc-400
                hover:text-[#B88A2E]
                transition
              "
            >
              Services
            </Link>

            <Link
              to="/teams"
              className="
                block
                text-zinc-400
                hover:text-[#B88A2E]
                transition
              "
            >
              Teams
            </Link>

            <Link
              to="/blogs"
              className="
                block
                text-zinc-400
                hover:text-[#B88A2E]
                transition
              "
            >
              Insights
            </Link>
          </div>
        </div>

        {/* CONTACT */}

        <div>
          <h3 className="text-xl font-semibold mb-6">Contact</h3>

          <div className="space-y-4 text-zinc-400">
            <p>Semarang, Indonesia</p>

            <a
              href="mailto:hello@montblanc.com"
              className="
                block
                hover:text-[#B88A2E]
                transition
              "
            >
              hello@montblanc.com
            </a>

            <a
              href="tel:+6285106413100"
              className="
                block
                hover:text-[#B88A2E]
                transition
              "
            >
              +62 851-0641-3100
            </a>
          </div>

          <div className="mt-8">
            <p className="font-semibold mb-4 text-white">Follow Us</p>

            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/montblanc_smg/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-zinc-400
                  hover:text-[#B88A2E]
                  hover:scale-110
                  transition
                  text-3xl
                "
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.threads.com/@montblanc_smg"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-zinc-400
                  hover:text-[#B88A2E]
                  hover:scale-110
                  transition
                  text-3xl
                "
              >
                <FaThreads />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}

      <div
        className="
          border-t
          border-zinc-800
          py-6
          text-center
          text-zinc-500
        "
      >
        © 2026 Mont Blanc. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
