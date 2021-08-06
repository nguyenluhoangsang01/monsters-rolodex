import React from "react";
import { Input } from "./SearchBox.styles";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <Input type="search" placeholder={placeholder} onChange={handleChange} />
  );
};

export default SearchBox;
