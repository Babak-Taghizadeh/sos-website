export interface ArticlesProps {
  id: number;
  title: string;
  readTime: string;
  description: string;
  image: string;
}

export interface Todo {
  id: number;
  title: string;
  priority: "High" | "Medium" | "Low";
  dueDate: string;
}
