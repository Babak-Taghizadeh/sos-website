import { memo } from "react";
import { Todo } from "@/types/types";
import { Button, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface TodoCardProps {
  todo: Todo;
  handleEdit: (todo: Todo) => void;
  handleDelete: (id: number) => void;
}

const TodoCard = ({ todo, handleEdit, handleDelete }: TodoCardProps) => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <Card>
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
    </Grid>
  );
};

export default memo(TodoCard);
