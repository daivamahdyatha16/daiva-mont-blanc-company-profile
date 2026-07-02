import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const Login = () => {
  const { login, currentUser } = useAuth();

  const navigate = useNavigate();

  const [popup, setPopup] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: yup.object({
      email: yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),

      password: yup
        .string()
        .min(6, "Minimum 6 characters")
        .required("Password is required"),
    }),

    onSubmit: async (values) => {
      const success = await login(
        values.email,
        values.password,
      );

      if (success) {
        setPopup(
          `Welcome back, ${
            currentUser?.name ??
            values.email.split("@")[0]
          }!`
        );

        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        alert(
          "Login failed. Please check your email and password."
        );
      }
    },
  });

  return (
    <div
      className="
        min-h-screen
        bg-[#0F1921]
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

      {popup && (
        <div
          className="
            fixed
            top-8
            left-1/2
            -translate-x-1/2
            z-50
            bg-[#D1C19E]
            text-[#0F1921]
            px-8
            py-4
            rounded-xl
            shadow-2xl
            font-semibold
            animate-pulse
          "
        >
          {popup}
        </div>
      )}

      <div className="absolute inset-0 bg-[#0F1921]/80"></div>

      <form
        onSubmit={formik.handleSubmit}
        className="
          relative
          z-10
          w-full
          max-w-md
          p-10
          rounded-3xl
          backdrop-blur-md
          bg-[#0F1921]/50
          border
          border-yellow-700/30
          shadow-2xl
        "
      >

        <div className="text-center mb-8">
          <p className="text-[#D1C19E] tracking-[8px] text-sm">
            WELCOME BACK
          </p>

          <h1 className="text-6xl font-bold text-white mt-4 font-serif">
            Login
          </h1>

          <div className="w-16 h-[2px] bg-[#D1C19E] mx-auto mt-4"></div>
        </div>


        <div className="mb-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="
              w-full
              p-4
              bg-zinc-900/70
              border
              border-zinc-700
              rounded-xl
              text-white
              focus:outline-none
              focus:border-[#D1C19E]
            "
          />

          {formik.touched.email &&
            formik.errors.email && (
              <p className="text-red-500 text-sm mt-2">
                {formik.errors.email}
              </p>
            )}
        </div>


        <div className="mb-5">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="
              w-full
              p-4
              bg-zinc-900/70
              border
              border-zinc-700
              rounded-xl
              text-white
              focus:outline-none
              focus:border-[#D1C19E]
            "
          />

          {formik.touched.password &&
            formik.errors.password && (
              <p className="text-red-500 text-sm mt-2">
                {formik.errors.password}
              </p>
            )}
        </div>

        <div className="text-right mb-6">
          <span className="text-[#D1C19E] text-sm cursor-pointer">
            Forgot password?
          </span>
        </div>


        <button
          type="submit"
          className="
            w-full
            bg-gradient-to-r
            from-yellow-700
            to-yellow-500
            py-4
            rounded-xl
            font-bold
            transition
            hover:-translate-y-1
            hover:scale-105
            hover:shadow-xl
            hover:shadow-yellow-600/50
          "
        >
          Login
        </button>

        <p className="text-center mt-8 text-[#A7ADB3]">
          Don't have account?{" "}
          <span
            onClick={() =>
              navigate("/register")
            }
            className="
              text-[#D1C19E]
              cursor-pointer
            "
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;