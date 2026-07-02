import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const Register = () => {
  const { register } = useAuth();

  const navigate = useNavigate();
  const [popup, setPopup] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: yup.object({
      name: yup
        .string()
        .min(3, "Minimum 3 characters")
        .required("Name is required"),

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
      const success = await register(
        values.name,
        values.email,
        values.password,
      );

      if (success) {
        setPopup(
          `Account for ${values.name} created successfully!`
        );

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setPopup(
          "Registration failed. Please check your data and try again."
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
          "url('https://images.unsplash.com/photo-1494526585095-c41746248156')",
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
          border-[#D1C19E]/30
          shadow-2xl
        "
      >


        <div className="text-center mb-8">
          <p className="text-[#D1C19E] tracking-[8px] text-sm">
            JOIN MONT BLANC
          </p>

          <h1 className="text-6xl font-bold text-white mt-4 font-serif">
            Register
          </h1>

          <div className="w-16 h-[2px] bg-[#D1C19E] mx-auto mt-4"></div>
        </div>


        <div className="mb-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formik.values.name}
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

          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm mt-2">{formik.errors.name}</p>
          )}
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

          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm mt-2">{formik.errors.email}</p>
          )}
        </div>


        <div className="mb-6">
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

          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm mt-2">
              {formik.errors.password}
            </p>
          )}
        </div>


        <button
          type="submit"
          className="
            w-full
            bg-[#D1C19E]
            text-black
            py-4
            rounded-xl
            font-bold
            transition
            duration-300
            hover:-translate-y-1
            hover:scale-105
            hover:shadow-xl
            hover:shadow-yellow-600/50
          "
        >
          Create Account
        </button>

        <p className="text-center mt-8 text-[#A7ADB3]">
          Already have account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="
              text-[#D1C19E]
              cursor-pointer
            "
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
