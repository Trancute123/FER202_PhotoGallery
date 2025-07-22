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
      <option value="User Upload">Ảnh người dùng</option>
          <option value="Nature">Thiên nhiên</option>
          <option value="Animal">Động vật</option>
          <option value="Art">Nghệ thuật</option>
          <option value="Food">Ẩm thực</option>
          <option value="Travel">Du lịch</option>
          <option value="Other">Khác</option>
    </select>
  );
}
