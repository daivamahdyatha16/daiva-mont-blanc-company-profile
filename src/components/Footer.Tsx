import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="
        bg-black
        border-t
        border-zinc-800
        text-white
        mt-20
      "
    >
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
          <h2
            className="
              text-3xl
              font-bold
              tracking-widest
              text-[#B88A2E]
              mb-6
            "
          >
            MONT BLANC
          </h2>

          <p className="text-zinc-400 leading-7">
            Transforming spaces into
            timeless experiences through
            premium interior design,
            architecture, and luxury
            craftsmanship.
          </p>
        </div>

        {/* QUICK LINKS */}

        <div>
          <h3
            className="
              text-xl
              font-semibold
              mb-6
            "
          >
            Quick Links
          </h3>

          <div className="space-y-3">
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
          <h3
            className="
              text-xl
              font-semibold
              mb-6
            "
          >
            Contact
          </h3>

          <div className="space-y-3 text-zinc-400">
            <p>Semarang, Indonesia</p>
            <p>hello@montblanc.com</p>
            <p>+62 812-3456-7890</p>
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
        © 2026 Mont Blanc.
        All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;