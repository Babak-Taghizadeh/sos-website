import React, { memo } from "react";
import { Button } from "@mui/material";
import { Todo } from "@/types/types";
import Grid from "@mui/material/Grid2";

const AddUpdateButton = ({ todo }: { todo?: Todo }) => {
  return (
    <Grid size={12} sx={{ display: "flex", justifyContent: "center" }}>
      <Button type="submit" variant="contained" color="primary" sx={{ mb: 2 }}>
        {todo ? "Update" : "Add"} Todo
      </Button>
    </Grid>
  );
};

export default memo(AddUpdateButton);
