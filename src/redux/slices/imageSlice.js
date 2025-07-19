import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
  name: "image",
  initialState: [], // PHẢI là mảng rỗng
  reducers: {
    addImage: (state, action) => {
      state.push(action.payload);
    },
    setImages: (state, action) => {
      return action.payload;
    },
  },
});

export const { addImage, setImages } = imageSlice.actions;
export default imageSlice.reducer;