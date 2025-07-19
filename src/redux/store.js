import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import modalReducer from "./slices/modalSlice";
import favoriteReducer from "./slices/favoriteSlice";
import authReducer from "./slices/authSlice";
import imageReducer from "./slices/imageSlice"; // Đảm bảo dòng này có

const store = configureStore({
  reducer: {
    auth: authReducer,
    filter: filterReducer,
    modal: modalReducer,
    favorite: favoriteReducer,
    image: imageReducer, // Đảm bảo dòng này có
  },
});

export default store;