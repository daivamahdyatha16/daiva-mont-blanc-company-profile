import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { HiOutlineMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-[#B88A2E] font-semibold"
      : "text-white hover:text-[#B88A2E] transition";

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/95 backdrop-blur border-b border-zinc-800">
      <div className="w-full px-6">
        {/* DESKTOP HEADER */}

        <div className="flex justify-between items-center h-20 w-full">
          {/* LOGO */}

          {/* LOGO */}
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

          {/* DESKTOP MENU */}

          <div
            className="
            hidden
            md:flex
            gap-8
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

                <span className="text-zinc-400">
                  Hi, {currentUser.name.split(" ")[0]}
                </span>

                <button
                  onClick={logout}
                  className="
                    bg-[#B88A2E]
                    text-black
                    px-5
                    py-2
                    rounded-xl
                    hover:scale-105
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
                    border-[#B88A2E]
                    text-[#B88A2E]
                    px-5
                    py-2
                    rounded-full
                    hover:bg-[#B88A2E]
                    hover:text-black
                    transition
                  "
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="
                    bg-[#B88A2E]
                    text-black
                    px-5
                    py-2
                    rounded-full
                    hover:scale-105
                    transition
                  "
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* MOBILE BUTTON */}

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

        {/* MOBILE MENU */}

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
              border-zinc-800
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
                    bg-[#B88A2E]
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
                    border-[#B88A2E]
                    text-[#B88A2E]
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
                    bg-[#B88A2E]
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
