import { Link } from "react-router-dom";
import { useBlog } from "../context/BlogContext";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const BlogList = () => {
  const { blogs, deleteBlog } = useBlog();
  const { currentUser } = useAuth();

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.content.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-[#0F1921] text-white pt-32 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <p className="text-[#D1C19E] tracking-[6px] mb-3">
            INTERIOR INSIGHTS
          </p>

          <h1 className="text-5xl font-bold">
            Articles & Inspirations
          </h1>

          <p className="text-[#A7ADB3] mt-4">
            Explore our latest thoughts on interior design,
            architecture, renovation, and luxury living.
          </p>

          <div className="mt-8">
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                md:max-w-xl
                bg-[#16222B]
                border
                border-[#2A3842]
                rounded-xl
                px-5
                py-4
                text-white
                placeholder:text-zinc-500
                focus:outline-none
                focus:border-[#D1C19E]
                transition
              "
            />
          </div>
        </div>


        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-3xl mb-4">
              No articles found
            </h2>

            <p className="text-zinc-500">
              Try another keyword.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.objectId}
                className="
                  bg-[#16222B]
                  border
                  border-[#2A3842]
                  rounded-xl
                  overflow-hidden
                  hover:border-[#D1C19E]
                  hover:-translate-y-2
                  transition
                  duration-300
                "
              >

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

                  <p className="text-[#D1C19E] text-sm mb-2">
                    {blog.createdAt
                      ? new Date(
                          blog.createdAt
                        ).toLocaleDateString()
                      : "-"}
                  </p>


                  <h2 className="text-2xl font-bold mb-4">
                    {blog.title}
                  </h2>


                  <p className="text-[#A7ADB3] mb-6">
                    {blog.content.slice(0, 100)}...
                  </p>


                  <p className="text-zinc-500 mb-6">
                    By {blog.author}
                  </p>


                  <div className="flex gap-3 flex-wrap">
                    <Link
                      to={`/blogs/${blog.objectId}`}
                      className="
                        px-4
                        py-2
                        border
                        border-[#D1C19E]
                        text-[#D1C19E]
                        rounded
                        hover:bg-[#D1C19E]
                        hover:text-black
                        transition
                      "
                    >
                      Read More
                    </Link>

                    {currentUser &&
                      currentUser.email ===
                        blog.ownerEmail && (
                        <>
                          <Link
                            to={`/edit-blog/${blog.objectId}`}
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
                                blog.objectId!
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