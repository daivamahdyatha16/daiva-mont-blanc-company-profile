import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { HiOutlineMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-[#D1C19E] font-semibold"
      : "text-white hover:text-[#D1C19E] transition";

  return (
    <nav
      className={`
    fixed top-0 z-50 w-full
    backdrop-blur-lg
    transition-all duration-300
    ${
      scrolled
        ? "bg-[#0F1921]/90 border-b border-[#D1C19E]/10"
        : "bg-transparent"
    }
  `}
    >
      <div className="w-full px-6">

        <div className="flex justify-between items-center h-20 w-full">

          <Link
            to="/"
            className="
    flex
    items-center
    justify-center
    overflow-hidden
    h-16
    w-30
  "
          >
            <img
              src="/montblanc-logo.webp"
              alt="Mont Blanc"
              className="
      h-10
      object-contain
      scale-[4.5]
      origin-center
      opacity-90
      hover:opacity-100
      transition
      mt-4
    "
            />
          </Link>

          <div
            className="
            hidden
            md:flex
            gap-6
            items-center
            text-sm
            font-medium
          "
          >
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={navClass}>
              About
            </NavLink>

            <NavLink to="/projects" className={navClass}>
              Projects
            </NavLink>

            <NavLink to="/services" className={navClass}>
              Services
            </NavLink>

            <NavLink to="/teams" className={navClass}>
              Teams
            </NavLink>

            <NavLink to="/blogs" className={navClass}>
              Insights
            </NavLink>

            {currentUser ? (
              <>
                <NavLink to="/create-blog" className={navClass}>
                  Write Article
                </NavLink>

                <div className="h-6 w-px bg-white/20 mx-2" />

                <span className="text-[#A7ADB3] whitespace-nowrap">
                  Hi, {currentUser.name.split(" ")[0]}
                </span>

                <button
                  onClick={logout}
                  className="
      bg-[#D1C19E]
      text-[#0F1921]
      px-5
      py-2
      rounded-full
      hover:opacity-90
      transition
    "
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="
      border
      border-[#D1C19E]
      text-[#D1C19E]
      px-6
      py-2
      rounded-full
      hover:bg-[#D1C19E]
      hover:text-[#0F1921]
      transition
    "
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="
      bg-[#D1C19E]
      text-[#0F1921]
      px-6
      py-2
      rounded-full
      hover:opacity-90
      transition
    "
                >
                  Register
                </Link>
              </>
            )}
          </div>


          <button
            className="
        md:hidden
    flex
    items-center
    justify-center
    text-white
    text-3xl
    ml-4
    shrink-0

  "
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>


        {open && (
          <div
            className="
              md:hidden
              flex
              flex-col
              gap-5
              py-6
              text-center
              border-t
              border-[#2A3842]
            "
          >
            <NavLink to="/" className={navClass} onClick={() => setOpen(false)}>
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={navClass}
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/services"
              className={navClass}
              onClick={() => setOpen(false)}
            >
              Services
            </NavLink>

            <NavLink
              to="/teams"
              className={navClass}
              onClick={() => setOpen(false)}
            >
              Teams
            </NavLink>

            <NavLink
              to="/blogs"
              className={navClass}
              onClick={() => setOpen(false)}
            >
              Insights
            </NavLink>

            {currentUser ? (
              <>
                <NavLink
                  to="/create-blog"
                  className={navClass}
                  onClick={() => setOpen(false)}
                >
                  Write Article
                </NavLink>

                <button
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="
                    bg-[#D1C19E]
                    text-black
                    px-5
                    py-3
                    rounded-xl
                  "
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="
                    border
                    border-[#D1C19E]
                    text-[#D1C19E]
                    py-3
                    rounded-xl
                  "
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="
                    bg-[#D1C19E]
                    text-black
                    py-3
                    rounded-xl
                  "
                >
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
