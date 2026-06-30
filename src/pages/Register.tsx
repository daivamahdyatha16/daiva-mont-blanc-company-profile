import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const { register } = useAuth();

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    register({
      name,
      email,
      password,
    });

    navigate("/login");
  };

  return (
    <div
      className="
      min-h-screen
      flex
      justify-center
      items-center
      px-4
      bg-black
    "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/85"></div>

      <form
        onSubmit={submit}
        className="
        relative
        z-10
        w-full
        max-w-lg
        p-10
        rounded-3xl
        bg-zinc-950/80
        backdrop-blur-md
        border
        border-[#B88A2E]
        shadow-[0_0_50px_rgba(202,138,4,0.15)]
      "
      >
        <div className="text-center mb-8">
          <p className="text-[#B88A2E] tracking-[5px]">CREATE ACCOUNT</p>

          <h1 className="text-6xl
    font-bold
    text-white
    mt-4
    drop-shadow-lg
    font-serif

">Register</h1>

          <p className="text-zinc-400 mt-4">Join us and start your journey</p>
        </div>

        <div className="space-y-4">
          <input
            placeholder="Full Name"
            className="
            w-full
            p-4
            rounded-xl
            bg-zinc-900
            border
            border-zinc-700
            text-white
            focus:border-[#B88A2E]
            outline-none
          "
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email"
            className="
            w-full
            p-4
            rounded-xl
            bg-zinc-900
            border
            border-zinc-700
            text-white
            focus:border-[#B88A2E]
            outline-none
          "
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="
            w-full
            p-4
            rounded-xl
            bg-zinc-900
            border
            border-zinc-700
            text-white
            focus:border-[#B88A2E]
            outline-none
          "
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="
            mt-4
            w-full
            py-4
            rounded-xl
            bg-gradient-to-r
            from-yellow-700
            to-yellow-500
            font-bold
            hover:scale-105
            transition
          "
          >
            Create Account
          </button>
        </div>

        <p className="text-center mt-8 text-zinc-400">
          Already have account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[#B88A2E] cursor-pointer"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
