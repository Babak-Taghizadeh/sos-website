"use client";

import { memo, useEffect, useState, useCallback } from "react";
import { addTodo, updateTodo } from "@/utils/todoActions";
import { Todo } from "@/types/types";
import Grid from "@mui/material/Grid2";
import TitleInput from "./titleInput";
import PrioritySelect from "./prioritySelect";
import DueDateInput from "./dueDateInput";
import AddUpdateButton from "./addUpdateButton";

interface TodoFormProps {
  todo?: Todo;
  onSuccess: () => void;
}

const TodoForm = ({ todo, onSuccess }: TodoFormProps) => {
  const [title, setTitle] = useState<string>("");
  const [priority, setPriority] = useState<"High" | "Medium" | "Low">("Medium");
  const [dueDate, setDueDate] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setPriority(todo.priority);
      setDueDate(todo.dueDate);
    } else {
      setTitle("");
      setPriority("Medium");
      setDueDate("");
    }
  }, [todo]);

  // Memoize state setters
  const handleSetTitle = useCallback((value: string) => {
    setTitle(value);
  }, []);

  const handleSetPriority = useCallback((value: "High" | "Medium" | "Low") => {
    setPriority(value);
  }, []);

  const handleSetDueDate = useCallback((value: string) => {
    setDueDate(value);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      setErrorMsg("Title is required");
      return;
    }
    const newTodo = {
      title,
      priority,
      dueDate,
    };
    try {
      if (todo) {
        await updateTodo(todo.id, newTodo);
      } else {
        await addTodo(newTodo);
      }
      setTitle("");
      setPriority("Medium");
      setDueDate("");
      setErrorMsg(null);
      onSuccess();
    } catch (error) {
      console.error("Error saving todo:", error);
    }
  };

  return (
    <Grid container component="form" onSubmit={handleSubmit} spacing={2}>
      <TitleInput title={title} setTitle={handleSetTitle} errorMsg={errorMsg} />
      <PrioritySelect priority={priority} setPriority={handleSetPriority} />
      <DueDateInput dueDate={dueDate} setDueDate={handleSetDueDate} />
      <AddUpdateButton todo={todo} />
    </Grid>
  );
};

export default memo(TodoForm);
