import Grid from "@mui/material/Grid2";
import { TextField } from "@mui/material";
import { memo } from "react";

interface DueDateInputProps {
  dueDate: string;
  setDueDate: (value: string) => void;
}
const DueDateInput = ({ dueDate, setDueDate }: DueDateInputProps) => {
  return (
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
  );
};

export default memo(DueDateInput);
