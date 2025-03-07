import { memo } from "react";
import { Todo } from "@/types/types";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface TodoCardProps {
  todo: Todo;
  handleEdit: (todo: Todo) => void;
  handleDelete: (id: number) => void;
}

const TodoCard = ({ todo, handleEdit, handleDelete }: TodoCardProps) => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Card
        sx={{ minHeight: "13rem", display: "flex", flexDirection: "column" }}
      >
        <CardContent
          sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6">{todo.title}</Typography>
            <Typography>Priority: {todo.priority}</Typography>
            <Typography>Due Date: {todo.dueDate}</Typography>
          </Box>

          <Box sx={{ mt: "auto", pt: 1, display: "flex", gap: 1 }}>
            <Button
              onClick={() => handleEdit(todo)}
              color="primary"
              variant="outlined"
            >
              Edit
            </Button>
            <Button
              onClick={() => handleDelete(todo.id)}
              color="error"
              variant="outlined"
            >
              Delete
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default memo(TodoCard);
