"use client";

import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
} from "@mui/material";
import { deleteTodo } from "@/utils/todoActions";
import { Todo } from "@/types/types";
import TodoForm from "./todoForm";
import TodoCard from "./todoCard";
import Grid from "@mui/material/Grid2";

const TodoList = ({ fetchedTodos }: { fetchedTodos: Todo[] }) => {
  const [search, setSearch] = useState<string>("");
  const [priorityFilter, setPriorityFilter] = useState<
    "All" | "High" | "Medium" | "Low"
  >("All");
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  const handleDelete = async (id: number) => {
    try {
      await deleteTodo(id);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleEdit = (todo: Todo) => {
    setEditingTodo(todo);
  };

  const handleUpdateSuccess = () => {
    setEditingTodo(null);
  };

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
      />
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <TextField
            label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="priority-label">Priority</InputLabel>
            <Select
              labelId="priority-label"
              label="Priority"
              value={priorityFilter}
              onChange={(e) =>
                setPriorityFilter(
                  e.target.value as "All" | "High" | "Medium" | "Low"
                )
              }
              MenuProps={{
                PaperProps: {
                  sx: {
                    direction: "ltr",
                  },
                },
              }}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {filteredTodos.map((todo) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={todo.id}>
            <TodoCard
              todo={todo}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TodoList;
