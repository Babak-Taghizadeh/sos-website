"use client";

import { useCallback, useState } from "react";
import { Container } from "@mui/material";
import { deleteTodo } from "@/utils/todoActions";
import { PriorityMode, Todo } from "@/types/types";
import TodoForm from "../todoForm/todoForm";
import TodoCard from "./todoCard";
import Grid from "@mui/material/Grid2";
import PriorityModeSelect from "./priorityModeSelect";
import SearchInput from "./searchInput";

const TodoList = ({ fetchedTodos }: { fetchedTodos: Todo[] }) => {
  const [search, setSearch] = useState<string>("");
  const [priorityFilter, setPriorityFilter] = useState<PriorityMode>("All");
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  const handleDelete = async (id: number) => {
    try {
      await deleteTodo(id);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleEdit = useCallback((todo: Todo | null) => {
    setEditingTodo(todo);
  }, []);

  const handleUpdateSuccess = useCallback(() => {
    setEditingTodo(null);
  }, []);

  const filteredTodos = fetchedTodos
    .filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()))
    .filter(
      (todo) => priorityFilter === "All" || todo.priority === priorityFilter
    );

  return (
    <Container>
      <TodoForm
        todo={editingTodo ?? undefined}
        onSuccess={handleUpdateSuccess}
        handleEdit={handleEdit}
      />
      <Grid container spacing={2}>
        <SearchInput search={search} setSearch={setSearch} />
        <PriorityModeSelect
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
        />
      </Grid>

      <Grid container spacing={2}>
        {filteredTodos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default TodoList;
