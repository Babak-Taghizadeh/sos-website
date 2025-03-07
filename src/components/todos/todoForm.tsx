"use client";

import { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import { addTodo, updateTodo } from "@/utils/todoActions";
import { Todo } from "@/types/types";
import Grid from "@mui/material/Grid2";

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
      completed: todo?.completed ?? false,
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
      <Grid component="section" size={{ xs: 12, sm: 6, md: 4 }}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        {errorMsg && !title && (
          <Typography color="error" variant="body1">
            {errorMsg}
          </Typography>
        )}
      </Grid>
      <Grid component="section" size={{ xs: 12, sm: 6, md: 4 }}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="priority-label">Priority</InputLabel>
          <Select
            labelId="priority-label"
            label="Priority"
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value as "High" | "Medium" | "Low")
            }
            MenuProps={{
              PaperProps: {
                sx: {
                  direction: "ltr",
                },
              },
            }}
          >
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid component="section" size={{ xs: 12, sm: 6, md: 4 }}>
        <TextField
          label="Due Date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          fullWidth
          margin="normal"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
      </Grid>
      <Grid size={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mb: 2 }}
        >
          {todo ? "Update" : "Add"} Todo
        </Button>
      </Grid>
    </Grid>
  );
};

export default TodoForm;
