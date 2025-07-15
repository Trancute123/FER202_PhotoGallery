import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    toggleFavorite: (state, action) => {
      const exists = state.find(photo => photo.id === action.payload.id);
      if (exists) {
        return state.filter(photo => photo.id !== action.payload.id);
      } else {
        state.push(action.payload);
      }
    }
  }
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
