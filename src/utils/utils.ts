import { ArticlesProps } from "@/types/types";

const API_URL = "http://localhost:4000";

export const fetchAllArticles = async (): Promise<ArticlesProps[]> => {
  const response = await fetch(`${API_URL}/articles`);
  if (!response.ok) {
    throw new Error("خطا در دریافت مقالات");
  }
  return response.json();
};

export const fetchArticleById = async (id: string): Promise<ArticlesProps> => {
  const response = await fetch(`${API_URL}/articles/${id}`);
  if (!response.ok) {
    throw new Error("خطا در دریافت مقاله");
  }
  return response.json();
};
