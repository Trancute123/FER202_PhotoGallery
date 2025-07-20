// src/redux/slices/themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const savedTheme = localStorage.getItem("theme") || "light";

const themeSlice = createSlice({
  name: "theme",
  initialState: savedTheme,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    },
    setTheme: (_, action) => {
      localStorage.setItem("theme", action.payload);
      return action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
