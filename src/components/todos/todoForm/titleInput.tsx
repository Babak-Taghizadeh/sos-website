import { memo } from "react";
import Grid from "@mui/material/Grid2";
import { TextField, Typography } from "@mui/material";

interface TitleInputProps {
  title: string;
  setTitle: (value: string) => void;
  errorMsg: string | null;
}

const TitleInput = ({ title, setTitle, errorMsg }: TitleInputProps) => {
  return (
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
  );
};

export default memo(TitleInput);
