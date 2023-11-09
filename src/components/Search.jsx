import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

const Search = ({ setNewUrl }) => {
  const searchText = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = searchText.current.value;
    setNewUrl(query);
    console.log(searchText.current);
  };

  return (
    <Box sx={{ marginBottom: "40px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          inputRef={searchText} // using inputRef instead of ref
          // onChange={handleSubmit} // provide a function to handle the search input change
          InputProps={{
            startAdornment: (
              <SearchIcon color="action" style={{ marginRight: "8px" }} />
            ),
          }}
        />
        {/* <input type="text" ref={searchText} /> */}
      </form>
    </Box>
  );
};

export default Search;
