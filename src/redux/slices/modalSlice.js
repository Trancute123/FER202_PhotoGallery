// redux/slices/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    image: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.image = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.image = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
