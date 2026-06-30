import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    const success = login(email, password);

    if (success) {
      navigate("/");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div
      className="
      min-h-screen
      bg-black
      flex
      items-center
      justify-center
      px-4
    "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <form
        onSubmit={submit}
        className="
        relative
        z-10
        w-full
        max-w-md
        p-10
        rounded-3xl
        backdrop-blur-md
        bg-black/50
        border
        border-[#B88A2E]-700/30
        shadow-2xl
      "
      >
        <div className="text-center mb-8">
          <p className="text-[#B88A2E] tracking-[8px] text-sm">WELCOME BACK</p>

          <h1
            className="text-6xl
            font-bold
            text-white
            mt-4
            drop-shadow-lg
            font-serif"
          >
            Login
          </h1>

          <div className="w-16 h-[2px] bg-[#B88A2E] hover:bg-[#C89A3E] mx-auto mt-4"></div>
        </div>

        <div className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="
            w-full
            p-4
            bg-zinc-900/70
            border
            border-zinc-700
            rounded-xl
            text-white
            focus:outline-none
            focus:border-[#B88A2E]
          "
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="
            w-full
            p-4
            bg-zinc-900/70
            border
            border-zinc-700
            rounded-xl
            text-white
            focus:outline-none
            focus:border-[#B88A2E]
          "
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="text-right">
            <span className="text-[#B88A2E] text-sm cursor-pointer">
              Forgot password?
            </span>
          </div>

          <button
            className="
            w-full
            bg-gradient-to-r
            from-yellow-700
            to-yellow-500
            py-4
            rounded-xl
            font-bold
            hover:scale-105
            transition
            shadow-lg
            shadow-yellow-700/30

            hover:-translate-y-1
            hover:scale-105
            hover:shadow-xl
            hover:shadow-yellow-600/50
          "
          >
            Login
          </button>
        </div>

        <p className="text-center mt-8 text-zinc-400">
          Don't have account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-[#B88A2E] cursor-pointer"
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
