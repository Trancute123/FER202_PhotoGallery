// src/redux/slices/store.js hoặc src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import modalReducer from "./slices/modalSlice";
import favoriteReducer from "./slices/favoriteSlice";

const store = configureStore({
  reducer: {
    filter: filterReducer, // ✅ THÊM DÒNG NÀY
    modal: modalReducer,
    favorite: favoriteReducer,
  },
});

export default store;
