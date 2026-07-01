import { useNavigate, useParams } from "react-router-dom";
import { useBlog } from "../context/BlogContext";

import { useFormik } from "formik";
import * as yup from "yup";

const EditBlog = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { blogs, editBlog } = useBlog();

  const blog = blogs.find(
    (blog) => blog.objectId === id
  );

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#0F1921] text-white flex justify-center items-center">
        Article not found
      </div>
    );
  }

  const formik = useFormik({
    enableReinitialize: true,

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

    onSubmit: async (values) => {
      try {
        await editBlog(id!, {
          ...blog,
          title: values.title,
          image: values.image,
          content: values.content,
        });

        alert("Article updated successfully");

        navigate("/blogs");
      } catch (err) {
        console.error(err);
        alert("Failed to update article");
      }
    },
  });

  return (
    <div className="min-h-screen bg-[#0F1921] text-white pt-32 px-6">
      <div className="max-w-4xl mx-auto">

        <p className="text-[#D1C19E] tracking-[6px] mb-3">
          EDIT ARTICLE
        </p>

        <h1 className="text-5xl font-bold mb-10">
          Update Article
        </h1>

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

          {formik.values.image && (
            <img
              src={formik.values.image}
              onError={(e) => {
                e.currentTarget.src =
                  "/placeholder.webp";
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
              bg-[#D1C19E]
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