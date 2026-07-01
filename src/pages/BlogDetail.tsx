import { useParams, Link } from "react-router-dom";
import { useBlog } from "../context/BlogContext";

const BlogDetail = () => {
  const { id } = useParams();

  const { blogs } = useBlog();

  const blog = blogs[Number(id)];

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center">
        <h1 className="text-3xl">
          Article not found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* BACK */}

        <Link
          to="/blogs"
          className="
            inline-block
            mb-10
            text-[#B88A2E]
            hover:text-yellow-400
            transition
          "
        >
          ← Back to Articles
        </Link>

        {/* IMAGE */}

        <img
          src={blog.image}
          onError={(e) => {
            e.currentTarget.src =
              "/montblanc-full-logo-text.webp";
          }}
          className="
            w-full
            h-[500px]
            object-cover
            rounded-2xl
            mb-10
          "
        />

        {/* DATE */}

        <p className="
          text-[#B88A2E]
          tracking-[4px]
          uppercase
          mb-4
        ">
          {blog.date}
        </p>

        {/* TITLE */}

        <h1 className="
          text-5xl
          font-bold
          mb-6
        ">
          {blog.title}
        </h1>

        {/* AUTHOR */}

        <p className="
          text-zinc-500
          mb-10
        ">
          By {blog.author}
        </p>

        {/* ARTICLE */}

        <div
          className="
            text-lg
            leading-9
            text-zinc-300
            whitespace-pre-wrap
          "
        >
          {blog.content}
        </div>

      </div>
    </div>
  );
};

export default BlogDetail;