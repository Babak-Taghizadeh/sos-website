import Grid from "@mui/material/Grid2";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { memo } from "react";
import { PriorityMode } from "@/types/types";

interface PriorityModeSelectProps {
  priorityFilter: PriorityMode;
  setPriorityFilter: (value: PriorityMode) => void;
}

const PriorityModeSelect = ({
  setPriorityFilter,
  priorityFilter,
}: PriorityModeSelectProps) => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <FormControl fullWidth margin="normal">
        <InputLabel id="priority-label">Priority</InputLabel>
        <Select
          labelId="priority-label"
          label="Priority"
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value as PriorityMode)}
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
  );
};

export default memo(PriorityModeSelect);
