// src/routes/AppRouter.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import HomePage from "../pages/HomePage";
import FavoritesPage from "../pages/FavoritesPage";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Navigate to="/home" />} />
      <Route path="home" element={<HomePage />} />
      <Route path="favorites" element={<FavoritesPage />} />
    </Route>
  </Routes>
);

export default AppRouter;
