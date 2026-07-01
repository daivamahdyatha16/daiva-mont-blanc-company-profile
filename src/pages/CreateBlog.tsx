import { useNavigate } from "react-router-dom";
import { useBlog } from "../context/BlogContext";
import { useAuth } from "../context/AuthContext";

import { useFormik } from "formik";
import * as yup from "yup";

const CreateBlog = () => {
  const { addBlog } = useBlog();
  const { currentUser } = useAuth();

  const navigate = useNavigate();

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

    onSubmit: (values) => {
      addBlog({
        title: values.title,
        image: values.image,
        content: values.content,
        author:
          currentUser?.name ||
          "Anonymous",
        date:
          new Date().toLocaleDateString(),
      });

      navigate("/blogs");
    },
  });

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="mb-10">
          <p className="text-[#B88A2E] tracking-[6px] mb-3">
            PUBLISH ARTICLE
          </p>

          <h1 className="text-5xl font-bold">
            Share New Insights
          </h1>

          <p className="text-zinc-400 mt-4">
            Publish articles about interior design,
            architecture, renovation, and luxury lifestyle.
          </p>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="
            bg-zinc-950
            border
            border-zinc-800
            rounded-2xl
            p-8
            space-y-6
          "
        >
          {/* TITLE */}

          <div>
            <label className="block mb-3">
              Article Title
            </label>

            <input
              type="text"
              name="title"
              value={formik.values.title}
              onChange={
                formik.handleChange
              }
              onBlur={
                formik.handleBlur
              }
              className="
                w-full
                p-4
                rounded-xl
                bg-zinc-900
                border
                border-zinc-700
              "
            />

            {formik.touched.title &&
              formik.errors.title && (
                <p className="text-red-500 mt-2 text-sm">
                  {formik.errors.title}
                </p>
              )}
          </div>

          {/* IMAGE URL */}

          <div>
            <label className="block mb-3">
              Image URL
            </label>

            <input
              type="text"
              name="image"
              placeholder="https://images.unsplash.com/..."
              value={formik.values.image}
              onChange={
                formik.handleChange
              }
              onBlur={
                formik.handleBlur
              }
              className="
                w-full
                p-4
                rounded-xl
                bg-zinc-900
                border
                border-zinc-700
              "
            />

            {formik.touched.image &&
              formik.errors.image && (
                <p className="text-red-500 mt-2 text-sm">
                  {formik.errors.image}
                </p>
              )}
          </div>

          {/* PREVIEW */}

          {formik.values.image && (
            <img
              src={formik.values.image}
              onError={(e) => {
                e.currentTarget.src =
                  "/placeholder.jpg";
              }}
              className="
                w-full
                h-72
                object-cover
                rounded-xl
              "
            />
          )}

          {/* CONTENT */}

          <div>
            <label className="block mb-3">
              Article Content
            </label>

            <textarea
              rows={10}
              name="content"
              value={formik.values.content}
              onChange={
                formik.handleChange
              }
              onBlur={
                formik.handleBlur
              }
              className="
                w-full
                p-4
                rounded-xl
                bg-zinc-900
                border
                border-zinc-700
              "
            />

            {formik.touched.content &&
              formik.errors.content && (
                <p className="text-red-500 mt-2 text-sm">
                  {formik.errors.content}
                </p>
              )}
          </div>

          <button
            type="submit"
            className="
              bg-[#B88A2E]
              text-black
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