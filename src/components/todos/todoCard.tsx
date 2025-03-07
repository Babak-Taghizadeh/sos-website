import { Todo } from "@/types/types";
import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";

interface TodoCardProps {
  todo: Todo;
  handleEdit: (todo: Todo) => void;
  handleDelete: (id: number) => void;
}

const TodoCard = ({ todo, handleEdit, handleDelete }: TodoCardProps) => {
  return (
    <Card key={todo.id}>
      <CardContent>
        <Typography variant="h6">{todo.title}</Typography>
        <Typography>Priority: {todo.priority}</Typography>
        <Typography>Due Date: {todo.dueDate}</Typography>
        <Button onClick={() => handleEdit(todo)} color="primary">
          Edit
        </Button>
        <Button onClick={() => handleDelete(todo.id)} color="error">
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default TodoCard;
