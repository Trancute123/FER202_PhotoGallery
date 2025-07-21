// src/pages/settings/AccountSettings.jsx
import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/slices/themeSlice";

export default function AccountSettings() {
  const dispatch = useDispatch();
  const location = useLocation();
  const theme = useSelector((state) => state.theme);
  const isDark = theme === "dark";

  const navItems = [
    { to: "edit-profile", label: "✏️ Chỉnh sửa Hồ sơ", icon: "✏️" },
    { to: "account-manager", label: "🔐 Quản lý tài khoản", icon: "🔐" },
    { to: "followers", label: "👥 Danh sách follower", icon: "👥" },
    { to: "following", label: "🔁 Danh sách following", icon: "🔁" },
    { to: "blocked", label: "🚫 Tài khoản bị chặn", icon: "🚫" },
  ];

  return (
    <div
      className="d-flex"
      style={{
        minHeight: "100vh",
        background: isDark
          ? "linear-gradient(to bottom, #222, #111)"
          : "linear-gradient(to bottom, #ffe0ec, #fce4ec)",
      }}
    >
      {/* Sidebar */}
      <div className="p-4 bg-white shadow-sm" style={{ width: 300 }}>
        {/* Avatar mini */}
        <div className="d-flex align-items-center mb-4">
          <img
            src="/images/avatar-default.jpg"
            alt="avatar"
            className="rounded-circle me-2"
            style={{ width: 40, height: 40, objectFit: "cover" }}
          />
          <div>
            <strong>Xin chào, Trung!</strong>
            <br />
            <small className="text-muted">@trung0709</small>
          </div>
        </div>

        <h5 className="mb-3 text-primary">
          <i className="bi bi-gear"></i> Cài đặt tài khoản
        </h5>

        <div className="list-group">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `list-group-item list-group-item-action border-0 rounded-pill px-3 py-2 mb-2 ${
                  isDark ? "bg-dark text-light" : "bg-light"
                } ${isActive ? "active-link fw-bold" : ""}`
              }
              style={{ textDecoration: "none" }}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/profile"
          className="btn btn-outline-secondary mt-4 w-100"
        >
          ⬅️ Quay lại hồ sơ
        </NavLink>

        <button
          onClick={() => dispatch(toggleTheme())}
          className="btn btn-sm btn-dark mt-3"
        >
          {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      {/* Nội dung phải */}
      <div
        className="flex-grow-1 p-4 animate__animated animate__fadeIn"
        style={{
          backgroundColor: isDark ? "#181818" : "#fff",
          borderRadius: "12px",
          margin: "20px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        {/* Breadcrumb/tiêu đề tự động */}
        <h4 className="mb-4">
          {location.pathname.includes("edit-profile") && ""}
          {location.pathname.includes("account-manager") && ""}
          {location.pathname.includes("followers") && ""}
          {location.pathname.includes("following") && ""}
          {location.pathname.includes("blocked") && ""}
        </h4>

        <Outlet />
      </div>
    </div>
  );
}