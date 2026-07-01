import Backendless from "./backendless";

const TABLE = "Article";

export type Article = {
  objectId?: string;
  title: string;
  image: string;
  content: string;
  author: string;
  ownerEmail: string;
  createdAt: string;
};

export const getArticle = async () => {
  return await Backendless.Data.of(TABLE).find();
};

export const getArticleById = async (id: string) => {
  return await Backendless.Data.of(TABLE).findById(id);
};

export const createArticle = async (article: Article) => {
  return await Backendless.Data.of(TABLE).save(article);
};

export const updateArticle = async (article: Article) => {
  return await Backendless.Data.of(TABLE).save(article);
};

export const deleteArticle = async (id: string) => {
  return await Backendless.Data.of(TABLE).remove(id);
};