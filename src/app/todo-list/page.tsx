import TodoList from "@/components/todos/todoList";
import { fetchTodos } from "@/utils/utils";
import { Box, Typography } from "@mui/material";

export default async function Home() {
  const fetchedTodos = await fetchTodos();
  return (
    <Box dir="ltr" sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Todo App
      </Typography>
      <TodoList fetchedTodos={fetchedTodos} />
    </Box>
  );
}
