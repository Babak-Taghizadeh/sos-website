import { API_URL } from "@/constants/links";
import { ArticlesProps, Todo } from "@/types/types";

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

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch(`${API_URL}/todos`, {
    next: { tags: ["todos"] },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return response.json();
};
