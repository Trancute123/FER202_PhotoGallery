import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import HomePage from "../pages/HomePage";
import FavoritesPage from "../pages/FavoritesPage";

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;