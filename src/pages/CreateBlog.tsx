import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../context/BlogContext.tsx";
import { useAuth } from "../context/AuthContext";

const CreateBlog = () => {
  const { addBlog } = useBlog();
  const { currentUser } = useAuth();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    addBlog({
      title,
      content,
      author: currentUser?.name || "Anonymous",
      date: new Date().toLocaleDateString(),
    });

    navigate("/blogs");
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="mb-10">
          <p className="text-[#B88A2E] tracking-[6px] mb-3">PUBLISH ARTICLE</p>

          <h1 className="text-5xl font-bold">Share New Insights</h1>

          <p className="text-zinc-400 mt-4">
            Publish articles about interior design, architecture, renovation,
            and luxury lifestyle.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={submit}
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
            <label className="block mb-3 text-zinc-300">Article Title</label>

            <input
              type="text"
              placeholder="5 Luxury Interior Trends in 2026"
              className="
                w-full
                p-4
                rounded-xl
                bg-zinc-900
                border
                border-zinc-700
                text-white
                focus:outline-none
                focus:border-[#B88A2E]
              "
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* CONTENT */}
          <div>
            <label className="block mb-3 text-zinc-300">Article Content</label>

            <textarea
              rows={10}
              placeholder="Write your article here..."
              className="
                w-full
                p-4
                rounded-xl
                bg-zinc-900
                border
                border-zinc-700
                text-white
                focus:outline-none
                focus:border-[#B88A2E]
              "
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          {/* BUTTON */}
          <button
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
            <span className="relative z-10">Publish Article</span>

            <div
              className="
      absolute
      bottom-3
      left-[-100%]
      w-32
      h-[2px]
      bg-black
      group-hover:left-1/2
      transition-all
      duration-500
      -translate-x-1/2
    "
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
