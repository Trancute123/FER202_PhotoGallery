import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    category: "All",
    searchTerm: "",
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { setCategory, setSearchTerm } = filterSlice.actions;
export default filterSlice.reducer;