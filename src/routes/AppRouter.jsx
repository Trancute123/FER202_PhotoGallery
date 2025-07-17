import React from "react";
import { Routes, Route } from "react-router-dom";
import GalleryPage from "../pages/GalleryPage";
import FilterPage from "../pages/FilterPage";
import FavoritesPage from "../pages/FavoritesPage";
import GuestPage from "../pages/GuestPage"; // Import GuestPage

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<GuestPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      
      <Route path="/filter" element={<FilterPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
}
