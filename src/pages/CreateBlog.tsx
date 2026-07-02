import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { createArticle } from "../lib/articleService";
import { useBlog } from "../context/BlogContext";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const CreateBlog = () => {
  const { currentUser } = useAuth();
  const { fetchBlogs } = useBlog();

  const navigate = useNavigate();
  const [popup, setPopup] = useState("");
  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      content: "",
    },

    validationSchema: yup.object({
      title: yup
        .string()
        .min(5, "Minimum 5 characters")
        .required("Title is required"),

      image: yup
        .string()
        .url("Must be a valid URL")
        .required("Image URL is required"),

      content: yup
        .string()
        .min(20, "Minimum 20 characters")
        .required("Content is required"),
    }),

    onSubmit: async (values) => {
      try {
        await createArticle({
          title: values.title,
          image: values.image,
          content: values.content,
          author: currentUser?.name || "Anonymous",
          ownerEmail: currentUser?.email || "",
          createdAt: new Date().toISOString(),
        });

        await fetchBlogs();

        setPopup(
          `Article "${values.title}" published successfully!`
        );

        setTimeout(() => {
          navigate("/blogs");
        }, 1500);
      } catch (err) {
        console.error(err);

        setPopup(
          "Failed to publish article."
        );
      }
    },
  });

  return (
    <div className="min-h-screen bg-[#0F1921] text-white pt-32 px-6">
      <div className="max-w-4xl mx-auto">
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
        <div className="mb-10">
          <p className="text-[#D1C19E] tracking-[6px] mb-3">PUBLISH ARTICLE</p>

          <h1 className="text-5xl font-bold">Share New Insights</h1>

          <p className="text-[#A7ADB3] mt-4">
            Publish articles about interior design, architecture, renovation,
            and luxury lifestyle.
          </p>
        </div>


        <form
          onSubmit={formik.handleSubmit}
          className="
            bg-[#16222B]
            border
            border-[#2A3842]
            rounded-2xl
            p-8
            space-y-6
          "
        >

          <div>
            <label className="block mb-3">Article Title</label>

            <input
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="
                w-full
                p-4
                rounded-xl
                bg-zinc-900
                border
                border-zinc-700
                focus:outline-none
                focus:border-[#D1C19E]
              "
            />

            {formik.touched.title && formik.errors.title && (
              <p className="text-red-500 mt-2 text-sm">{formik.errors.title}</p>
            )}
          </div>


          <div>
            <label className="block mb-3">Image URL</label>

            <input
              type="text"
              name="image"
              placeholder="https://images.unsplash.com/..."
              value={formik.values.image}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="
                w-full
                p-4
                rounded-xl
                bg-zinc-900
                border
                border-zinc-700
                focus:outline-none
                focus:border-[#D1C19E]
              "
            />

            {formik.touched.image && formik.errors.image && (
              <p className="text-red-500 mt-2 text-sm">{formik.errors.image}</p>
            )}
          </div>


          {formik.values.image && (
            <img
              src={formik.values.image}
              onError={(e) => {
                e.currentTarget.src = "/placeholder.webp";
              }}
              className="
                w-full
                h-72
                object-cover
                rounded-xl
              "
            />
          )}


          <div>
            <label className="block mb-3">Article Content</label>

            <textarea
              rows={10}
              name="content"
              value={formik.values.content}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="
                w-full
                p-4
                rounded-xl
                bg-zinc-900
                border
                border-zinc-700
                focus:outline-none
                focus:border-[#D1C19E]
              "
            />

            {formik.touched.content && formik.errors.content && (
              <p className="text-red-500 mt-2 text-sm">
                {formik.errors.content}
              </p>
            )}
          </div>


          <button
            type="submit"
            className="
              bg-[#D1C19E]
              text-[#0F1921]
              font-semibold
              px-8
              py-3
              rounded-xl
              hover:scale-105
              transition
            "
          >
            Publish Article
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
