import type { FC } from "react";

import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchbarProps {
  setSearchQuery: (query: string) => void;
}

const Searchbar: FC<SearchbarProps> = ({ setSearchQuery }) => {
  return (
    <Box
      sx={{
        marginTop: 3.5,
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search"
        sx={{
          "& .MuiOutlinedInput-root": {
            paddingRight: "25px",
          },
        }}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <SearchIcon sx={{ color: "grey", position: "absolute", right: 8 }} />
    </Box>
  );
};

export default Searchbar;
