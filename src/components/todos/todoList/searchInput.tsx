import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface SearchInputProps {
  search: string;
  setSearch: (value: string) => void;
}

const SearchInput = ({ search, setSearch }: SearchInputProps) => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <TextField
        label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        fullWidth
        margin="normal"
      />
    </Grid>
  );
};

export default SearchInput;
