import { memo } from "react";
import { Button } from "@mui/material";
import { Todo } from "@/types/types";
import Grid from "@mui/material/Grid2";

interface AddUpdateButtonProps {
  todo?: Todo;
  handleEdit: (todo: Todo | null) => void;
}

const AddUpdateButton = ({ todo, handleEdit }: AddUpdateButtonProps) => {
  return (
    <Grid size={12} sx={{ display: "flex", justifyContent: "center" }}>
      <Button type="submit" variant="contained" color="primary" sx={{ mb: 2 }}>
        {todo ? "Update" : "Add"} Todo
      </Button>
      {todo && (
        <Button
          type="button"
          variant="contained"
          color="error"
          sx={{ ml: 2, mb: 2 }}
          onClick={() => handleEdit(null)}
        >
          Cancel
        </Button>
      )}
    </Grid>
  );
};

export default memo(AddUpdateButton);
