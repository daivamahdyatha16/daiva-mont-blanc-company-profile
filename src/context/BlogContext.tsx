import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getArticle,
  createArticle,
  deleteArticle,
  updateArticle,
} from "../lib/articleService";

export type Blog = {
  objectId?: string;
  title: string;
  image: string;
  content: string;
  author: string;
  ownerEmail: string;
  createdAt: string;
};

type BlogContextType = {
  blogs: Blog[];
  addBlog: (blog: Blog) => Promise<void>;
  deleteBlog: (id: string) => Promise<void>;
  editBlog: (id: string, blog: Blog) => Promise<void>;
  fetchBlogs: () => Promise<void>;
};

const BlogContext = createContext<BlogContextType>(
  {} as BlogContextType
);



export const BlogProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    try {
      const result = await getArticle();

      setBlogs(
        result.map((item: any) => ({
          objectId: item.objectId,
          title: item.title,
          image: item.image,
          content: item.content,
          author: item.author,
          ownerEmail: item.ownerEmail,
          createdAt: item.createdAt,
        }))
      );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const addBlog = async (blog: Blog) => {
    await createArticle(blog);
    await fetchBlogs();
  };

  const deleteBlog = async (id: string) => {
    await deleteArticle(id);
    await fetchBlogs();
  };

  const editBlog = async (
    id: string,
    blog: Blog
  ) => {
    await updateArticle({
      objectId: id,
      ...blog,
    });

    await fetchBlogs();
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        addBlog,
        deleteBlog,
        editBlog,
        fetchBlogs,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () =>
  useContext(BlogContext);