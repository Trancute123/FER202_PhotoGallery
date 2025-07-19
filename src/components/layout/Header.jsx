import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isGalleryPage = location.pathname === "/gallery";

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    navigate("/");
  };

  const navStyle = ({ isActive }) => ({
    color: isActive ? "#fff" : "#f0f0f0",
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "16px",
    padding: "8px 16px",
    borderRadius: "999px",
    backgroundColor: isActive ? "#bb1c5a" : "transparent",
    transition: "all 0.3s ease",
  });

  return (
    <div
      style={{
        background: "linear-gradient(to right, #FF512F, #DD2476)",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "4px solid #bb1c5a",
        borderRadius: "0 0 15px 15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <NavLink
        to="/"
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          color: "#fff",
          textDecoration: "none",
        }}
      >
        PinkPin
      </NavLink>

      {/* Chỉ hiện 3 nút khi ở trang /gallery */}
      {isGalleryPage && (
        <div style={{ display: "flex", gap: "12px" }}>
          <NavLink to="/create" style={navStyle}>
            Tạo
          </NavLink>
          <NavLink to="/favorites" style={navStyle}>
            Thích
          </NavLink>
          <span onClick={handleLogout} style={navStyle}>
            Đăng xuất
          </span>
        </div>
      )}

      <NavLink to="/profile" title="Your Account">
        <img
          src="/images/avatar-default.jpg"
          alt="Avatar"
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid white",
            cursor: "pointer",
            boxShadow: "0 0 5px rgba(0,0,0,0.15)",
          }}
        />
      </NavLink>

    </div>
  );
};

export default Header;