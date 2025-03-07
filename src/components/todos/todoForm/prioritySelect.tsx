import { Priority } from "@/types/types";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { memo } from "react";

interface PrioritySelectProps {
  priority: Priority;
  setPriority: (value: Priority) => void;
}

const PrioritySelect = ({ priority, setPriority }: PrioritySelectProps) => {
  return (
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
  );
};

export default memo(PrioritySelect);
