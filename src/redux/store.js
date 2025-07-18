import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import modalReducer from "./slices/modalSlice";
import favoriteReducer from "./slices/favoriteSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    filter: filterReducer,
    modal: modalReducer,
    favorite: favoriteReducer,
  },
});

export default store;
