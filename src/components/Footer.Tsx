import { Link } from "react-router-dom";
import { FaInstagram, FaThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0F1921] border-t border-[#2A3842] text-white">
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
      text-[#D1C19E]
      mb-4
    "
            >
              MONT BLANC
            </h2>

            <p className="text-[#A7ADB3] leading-8 max-w-sm">
              Transforming spaces into timeless experiences through premium
              interior design, architecture, and luxury craftsmanship.
            </p>
          </div>

          <p className="text-[#A7ADB3] leading-8 max-w-sm">
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
                text-[#A7ADB3]
                hover:text-[#D1C19E]
                transition
              "
            >
              Home
            </Link>

            <Link
              to="/about"
              className="
                block
                text-[#A7ADB3]
                hover:text-[#D1C19E]
                transition
              "
            >
              About
            </Link>

            <Link
              to="/projects"
              className="
                block
                text-[#A7ADB3]
                hover:text-[#D1C19E]
                transition
              "
            >
              Projects
            </Link>

            <Link
              to="/services"
              className="
                block
                text-[#A7ADB3]
                hover:text-[#D1C19E]
                transition
              "
            >
              Services
            </Link>

            <Link
              to="/teams"
              className="
                block
                text-[#A7ADB3]
                hover:text-[#D1C19E]
                transition
              "
            >
              Teams
            </Link>

            <Link
              to="/blogs"
              className="
                block
                text-[#A7ADB3]
                hover:text-[#D1C19E]
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

          <div className="space-y-4 text-[#A7ADB3]">
            <p>Semarang, Indonesia</p>

            <a
              href="mailto:hello@montblanc.com"
              className="
                block
                hover:text-[#D1C19E]
                transition
              "
            >
              hello@montblanc.com
            </a>

            <a
              href="tel:+6285106413100"
              className="
                block
                hover:text-[#D1C19E]
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
                  text-[#A7ADB3]
                  hover:text-[#D1C19E]
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
                  text-[#A7ADB3]
                  hover:text-[#D1C19E]
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
          border-[#2A3842]
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
