import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/slices/themeSlice";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme);
  const isGalleryPage = location.pathname === "/gallery";
  const isProfilePage = location.pathname === "/profile";

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

  const buttonStyle = {
    fontSize: "16px",
    padding: "8px 16px",
    borderRadius: "999px",
    border: "none",
    backgroundColor: "#fff",
    color: "#bb1c5a",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    transition: "0.3s",
  };

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

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        {isGalleryPage && isProfilePage &&(
          <>
            <NavLink to="/create" style={navStyle}>
              Tạo
            </NavLink>
            <NavLink to="/favorites" style={navStyle}>
              Thích
            </NavLink>
            <NavLink to="/favorites" style={navStyle}>
              Thích
            </NavLink>
            <span onClick={handleLogout} style={navStyle}>
              Đăng xuất
            </span>
          </>
        )}

        <button onClick={() => dispatch(toggleTheme())} style={buttonStyle}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

      </div>

    </div>
  );
};

export default Header;