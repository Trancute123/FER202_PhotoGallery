// src/routes/AppRouter.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import GalleryPage from "../pages/GalleryPage";
import FilterPage from "../pages/FilterPage";
import FavoritesPage from "../pages/FavoritesPage";
import ProfilePage from "../pages/ProfilePage";

// Các trang cài đặt tài khoản
import AccountSettings from "../pages/settings/AccountSettings";
import EditProfile from "../pages/settings/EditProfile";
import AccountManager from "../pages/settings/AccountManager";
import FollowersList from "../pages/settings/FollowersList";
import FollowingList from "../pages/settings/FollowingList";
import BlockedAccounts from "../pages/settings/BlockedAccounts";

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
      <Route path="/profile" element={<ProfilePage />} />
      {/* Các trang setting profile */}
      <Route path="/settings" element={<AccountSettings />}>
        <Route path="edit-profile" element={<EditProfile />} />
        <Route path="account-manager" element={<AccountManager />} />
        <Route path="followers" element={<FollowersList />} />
        <Route path="following" element={<FollowingList />} />
        <Route path="blocked" element={<BlockedAccounts />} />
      </Route>
    </Routes>
  );
}
