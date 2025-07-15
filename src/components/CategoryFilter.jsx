import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/filterSlice";

export default function CategoryFilter() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.filter.category);

  const handleChange = (e) => {
    dispatch(setCategory(e.target.value));
  };

  return (
    <select
      value={category}
      onChange={handleChange}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "8px",
        margin: "10px auto",
        display: "block",
      }}
    >
      <option value="All">All</option>
      <option value="Animals">Animals</option>
      <option value="Nature">Nature</option>
      <option value="Cities">Cities</option>
    </select>
  );
}
