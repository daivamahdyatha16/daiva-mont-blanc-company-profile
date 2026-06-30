import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBlog } from "../context/BlogContext";

const EditBlog = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { blogs, editBlog } = useBlog();

  const blog = blogs[Number(id)];

  const [title, setTitle] =
    useState(blog.title);

  const [content, setContent] =
    useState(blog.content);

  const submit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    editBlog(Number(id), {
      ...blog,
      title,
      content,
    });

    navigate("/blogs");
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6">
      <div className="max-w-3xl mx-auto">

        <p className="text-[#B88A2E] tracking-[6px] mb-3">
          EDIT ARTICLE
        </p>

        <h1 className="text-5xl font-bold mb-10">
          Update Article
        </h1>

        <form
          onSubmit={submit}
          className="space-y-6"
        >
          <input
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="
              w-full
              bg-zinc-900
              border
              border-zinc-700
              rounded
              p-4
            "
          />

          <textarea
            rows={10}
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
            className="
              w-full
              bg-zinc-900
              border
              border-zinc-700
              rounded
              p-4
            "
          />

          <button
            className="
              bg-[#B88A2E]
              text-black
              px-8
              py-3
              rounded
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