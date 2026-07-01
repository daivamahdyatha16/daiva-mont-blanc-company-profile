import { Link } from "react-router-dom";
import { useBlog } from "../context/BlogContext";
import { useAuth } from "../context/AuthContext";

const BlogList = () => {
  const {
    blogs,
    deleteBlog,
  } = useBlog();

  const { currentUser } =
    useAuth();

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="mb-12">
          <p className="text-[#B88A2E] tracking-[6px] mb-3">
            INTERIOR INSIGHTS
          </p>

          <h1 className="text-5xl font-bold">
            Articles & Inspirations
          </h1>

          <p className="text-zinc-400 mt-4">
            Explore our latest thoughts on
            interior design, architecture,
            renovation, and luxury living.
          </p>
        </div>

        {/* EMPTY */}

        {blogs.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-3xl mb-4">
              No articles yet
            </h2>

            <p className="text-zinc-500">
              Publish your first article.
            </p>
          </div>
        ) : (

          /* GRID */

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {blogs.map((blog, index) => (
              <div
                key={index}
                className="
                  bg-zinc-950
                  border
                  border-zinc-800
                  rounded-xl
                  overflow-hidden
                  hover:border-[#B88A2E]
                  hover:-translate-y-2
                  transition
                  duration-300
                "
              >

                {/* IMAGE */}

                <img
                  src={blog.image}
                  onError={(e) => {
                    e.currentTarget.src =
                      "/montblanc-full-logo-text.webp";
                  }}
                  className="
                    w-full
                    h-56
                    object-cover
                  "
                />

                <div className="p-6">

                  {/* DATE */}

                  <p className="text-[#B88A2E] text-sm mb-2">
                    {blog.date}
                  </p>

                  {/* TITLE */}

                  <h2 className="text-2xl font-bold mb-4">
                    {blog.title}
                  </h2>

                  {/* CONTENT */}

                  <p className="text-zinc-400 mb-6">
                    {blog.content.slice(
                      0,
                      100
                    )}
                    ...
                  </p>

                  {/* AUTHOR */}

                  <p className="text-zinc-500 mb-6">
                    By {blog.author}
                  </p>

                  {/* BUTTONS */}

                  <div className="flex gap-3 flex-wrap">

                    <Link
                      to={`/blogs/${index}`}
                      className="
                        px-4
                        py-2
                        border
                        border-[#B88A2E]
                        text-[#B88A2E]
                        rounded
                        hover:bg-[#B88A2E]
                        hover:text-black
                        transition
                      "
                    >
                      Read More
                    </Link>

                    {currentUser &&
                      currentUser.name ===
                        blog.author && (
                        <>
                          <Link
                            to={`/edit-blog/${index}`}
                            className="
                              px-4
                              py-2
                              bg-blue-700
                              rounded
                              hover:bg-blue-600
                              transition
                            "
                          >
                            Edit
                          </Link>

                          <button
                            onClick={() =>
                              deleteBlog(
                                index
                              )
                            }
                            className="
                              px-4
                              py-2
                              bg-red-700
                              rounded
                              hover:bg-red-600
                              transition
                            "
                          >
                            Delete
                          </button>
                        </>
                      )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;