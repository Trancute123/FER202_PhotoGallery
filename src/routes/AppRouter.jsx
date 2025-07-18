import React from "react";
import { Routes, Route } from "react-router-dom";
import GalleryPage from "../pages/GalleryPage";
import FilterPage from "../pages/FilterPage";
import FavoritesPage from "../pages/FavoritesPage";
import GuestPage from "../pages/GuestPage";
import RegisterPage from "../pages/RegisterPage"; // 🆕 thêm trang đăng ký

// Có thể thêm các trang khác nếu cần như ExplorePage, AboutPage...
import ExplorePage from "../pages/ExplorePage";
import AboutPage from "../pages/AboutPage";
import CreatePage from "../pages/CreatePage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<GuestPage />} />
      <Route path="/login" element={<GuestPage />} />
      <Route path="/register" element={<RegisterPage />} /> {/* ✅ mới thêm */}
      {/* Các trang trong app chính */}
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/create" element={<CreatePage />} />
      {/* Các trang gallery */}
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/filter" element={<FilterPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
}
