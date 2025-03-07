"use server";

import { revalidatePath } from "next/cache";
import { Todo } from "../types/types";
import { API_URL } from "@/constants/links";

export const addTodo = async (todo: Omit<Todo, "id">): Promise<Todo> => {
  const response = await fetch(`${API_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!response.ok) {
    throw new Error("Failed to add todo");
  }
  revalidatePath("todos");

  return response.json();
};

export const updateTodo = async (
  id: number,
  todo: Partial<Todo>
): Promise<Todo> => {
  const response = await fetch(`${API_URL}/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!response.ok) {
    throw new Error("Failed to update todo");
  }
  revalidatePath("todos");
  return response.json();
};

export const deleteTodo = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/todos/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }
  revalidatePath("todos");
};
