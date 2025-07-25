import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/slices/themeSlice";
import {
  FaUserEdit,
  FaUserShield,
  FaUsers,
  FaUserFriends,
  FaUserSlash,
  FaArrowLeft,
  FaMoon,
  FaSun,
  FaCog,
} from "react-icons/fa";

export default function AccountSettings() {
  const dispatch = useDispatch();
  const location = useLocation();
  const theme = useSelector((state) => state.theme);
  const isDark = theme === "dark";

  const navItems = [
    { to: "edit-profile", label: "Edit Profile", icon: <FaUserEdit /> },
    {
      to: "account-manager",
      label: "Account Management",
      icon: <FaUserShield />,
    },
    { to: "followers", label: "Followers", icon: <FaUsers /> },
    { to: "following", label: "Following", icon: <FaUserFriends /> },
    { to: "blocked", label: "Blocked Accounts", icon: <FaUserSlash /> },
  ];

  // Automatically detect page title
  const pageTitle = navItems.find((item) =>
    location.pathname.includes(item.to)
  )?.label;

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
      <div
        className="p-4 shadow-sm"
        style={{
          width: 300,
          backgroundColor: isDark ? "#1a1a1a" : "#ffffff",
          color: isDark ? "#fff" : "#000",
        }}
      >
        {/* Mini Avatar */}
        <div className="d-flex align-items-center mb-4">
          <img
            src="/images/avatar-default.jpg"
            alt="avatar"
            className="rounded-circle me-2"
            style={{ width: 40, height: 40, objectFit: "cover" }}
          />
          <div>
            <strong>Hello, Trung!</strong>
            <br />
            <small className="text-muted">@trung0709</small>
          </div>
        </div>

        {/* Section Title */}
        <h5
          className="mb-3 d-flex align-items-center gap-2"
          style={{ color: "#ffb6c1", fontWeight: "600" }}
        >
          <FaCog /> Account Settings
        </h5>

        {/* Navigation Items */}
        <div className="list-group">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `list-group-item list-group-item-action border-0 px-3 py-2 mb-2 d-flex align-items-center gap-2 rounded-pill ${
                  isDark ? "bg-dark text-light" : "bg-light text-dark"
                } ${isActive ? "fw-bold shadow-sm" : ""}`
              }
              style={{ textDecoration: "none", fontSize: "15px" }}
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Back to Profile */}
        <NavLink
          to="/profile"
          className="btn btn-outline-secondary mt-4 w-100 d-flex align-items-center justify-content-center gap-2"
        >
          <FaArrowLeft /> Back to Profile
        </NavLink>

        {/* Toggle Dark Mode */}
        <button
          onClick={() => dispatch(toggleTheme())}
          className="btn btn-sm mt-3 w-100 d-flex align-items-center justify-content-center gap-2"
          style={{
            backgroundColor: isDark ? "#fff" : "#222",
            color: isDark ? "#222" : "#fff",
            border: "none",
            borderRadius: "6px",
          }}
        >
          {isDark ? <FaSun /> : <FaMoon />} {isDark ? "Light" : "Dark"}
        </button>
      </div>

      {/* Main Content */}
      <div
        className="flex-grow-1 p-4 animate__animated animate__fadeIn"
        style={{
          backgroundColor: isDark ? "#181818" : "#fff",
          borderRadius: "12px",
          margin: "20px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          color: isDark ? "#fff" : "#000",
        }}
      >
        <h4 className="mb-4">{pageTitle}</h4>
        <Outlet />
      </div>
    </div>
  );
}
