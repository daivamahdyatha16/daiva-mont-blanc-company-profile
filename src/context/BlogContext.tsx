import { createContext, useContext, useEffect, useState } from "react";

export type Blog = {
  title: string;
  content: string;
  image : string;
  author: string;
  date: string;
};

type BlogContextType = {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  deleteBlog: (index: number) => void;
  editBlog: (
    index: number,
    blog: Blog
  ) => void;

};

const BlogContext = createContext<BlogContextType>({} as BlogContextType);

export const BlogProvider = ({ children }: { children: React.ReactNode }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("blogs");

    if (saved) {
      setBlogs(JSON.parse(saved));
    }
  }, []);

  const addBlog = (blog: Blog) => {
    const updated = [...blogs, blog];

    setBlogs(updated);

    localStorage.setItem("blogs", JSON.stringify(updated));
  };

  const deleteBlog = (index: number) => {
  const updated = blogs.filter(
    (_, i) => i !== index
  );

  setBlogs(updated);

  localStorage.setItem(
    "blogs",
    JSON.stringify(updated)
  );
};

const editBlog = (
  index: number,
  updatedBlog: Blog
) => {
  const newBlogs = [...blogs];

  newBlogs[index] = updatedBlog;

  setBlogs(newBlogs);

  localStorage.setItem(
    "blogs",
    JSON.stringify(newBlogs)
  );
};

  return (
    <BlogContext.Provider
      value={{
        blogs,
        addBlog,
        deleteBlog,
        editBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => useContext(BlogContext);
