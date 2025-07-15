import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      const exists = state.find((img) => img.id === action.payload.id);
      if (!exists) state.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      return state.filter((img) => img.id !== action.payload.id);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
