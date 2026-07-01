import { useNavigate, useParams } from "react-router-dom";
import { useBlog } from "../context/BlogContext";

import { useFormik } from "formik";
import * as yup from "yup";

const EditBlog = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { blogs, editBlog } = useBlog();

  const blog = blogs[Number(id)];

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center">
        Article not found
      </div>
    );
  }

  const formik = useFormik({
    initialValues: {
      title: blog.title,
      image: blog.image,
      content: blog.content,
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
      editBlog(Number(id), {
        ...blog,
        title: values.title,
        image: values.image,
        content: values.content,
      });

      navigate("/blogs");
    },
  });

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}

        <p className="text-[#B88A2E] tracking-[6px] mb-3">
          EDIT ARTICLE
        </p>

        <h1 className="text-5xl font-bold mb-10">
          Update Article
        </h1>

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
              "
            />

            {formik.touched.title &&
              formik.errors.title && (
                <p className="text-red-500 mt-2 text-sm">
                  {formik.errors.title}
                </p>
              )}
          </div>

          {/* IMAGE */}

          <div>
            <label className="block mb-3">
              Image URL
            </label>

            <input
              name="image"
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
                  "/montblanc-full-logo-text.webp";
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
              Content
            </label>

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
            Save Changes
          </button>
        </form>

      </div>
    </div>
  );
};

export default EditBlog;