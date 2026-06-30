import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-[#B88A2E] font-semibold transition duration-300"
      : "text-white hover:text-[#B88A2E] transition duration-300";

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/90 backdrop-blur border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold tracking-widest text-[#B88A2E] hover:text-[#B88A2E] transition">
            MONT BLANC
          </h1>
        </Link>

        {/* Menu */}
        <div className="flex gap-8 items-center text-sm font-medium">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
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
  font-semibold
  px-8
  py-3
  rounded-xl

  shadow-lg
  shadow-yellow-700/30

  hover:-translate-y-1
  hover:scale-105
  hover:shadow-xl
  hover:shadow-yellow-600/50

  transition-all
  duration-300

  "
              >
                <span className="relative z-10">Logout</span>

                <span
                  className="
      absolute
      bottom-2
      left-1/2
      h-[2px]
      w-0
      bg-black
      -translate-x-1/2
      transition-all
      duration-300
      group-hover:w-10
    "
                />
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
      duration-300
        shadow-lg
  shadow-yellow-700/30

  hover:-translate-y-1
  hover:scale-105
  hover:shadow-xl
  hover:shadow-yellow-600/50
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
      hover:bg-[#B88A2E]
      transition
      duration-300
        shadow-lg
  shadow-yellow-700/30

  hover:-translate-y-1
  hover:scale-105
  hover:shadow-xl
  hover:shadow-yellow-600/50

    "
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
