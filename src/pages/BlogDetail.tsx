import { useParams } from "react-router-dom";
import { useBlog } from "../context/BlogContext";

const BlogDetail = () => {
  const { id } = useParams();

  const { blogs } = useBlog();

  const blog = blogs[Number(id)];

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center">
        Article not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6">

      <div className="max-w-4xl mx-auto">

        <p className="text-[#B88A2E] mb-4">
          {blog.date}
        </p>

        <h1 className="text-5xl font-bold mb-6">
          {blog.title}
        </h1>

        <p className="text-zinc-500 mb-10">
          By {blog.author}
        </p>

        <div className="text-lg leading-9 text-zinc-300">
          {blog.content}
        </div>

      </div>

    </div>
  );
};

export default BlogDetail;