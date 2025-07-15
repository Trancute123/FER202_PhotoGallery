import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/slices/filterSlice";

export default function SearchBar() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.filter.searchTerm);

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search images..."
      value={searchTerm}
      onChange={handleChange}
      style={{
        padding: "12px 20px",
        margin: "20px auto",
        display: "block",
        width: "80%",
        fontSize: "18px",
        borderRadius: "10px",
        border: "1px solid #ccc",
      }}
    />
  );
}
