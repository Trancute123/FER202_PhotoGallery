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

  const navButton = {
    padding: "8px 18px",
    fontSize: "14px",
    fontWeight: "bold",
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "12px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #eee",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      {/* Logo */}
      <NavLink
        to="/"
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          color: "#d72660",
          textDecoration: "none",
        }}
      >
        PinkPin
      </NavLink>

      {/* Navigation Buttons */}
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        {(isGalleryPage || isProfilePage) && (
          <>
            <NavLink
              to="/create"
              style={{
                ...navButton,
                backgroundColor: "#ff69b4",
                color: "#fff",
              }}
            >
              Create now
            </NavLink>

            <NavLink
              to="/favorites"
              style={{
                ...navButton,
                backgroundColor: "#ff69b4",
                color: "#fff",
              }}
            >
              Favorites
            </NavLink>

            <button
              onClick={handleLogout}
              style={{
                ...navButton,
                backgroundColor: "#fff",
                color: "#ff69b4",
                border: "2px solid #ff69b4",
              }}
            >
              Log out
            </button>

            {/* Avatar */}
            <img
              src="https://i.pravatar.cc/36"
              alt="avatar"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </>
        )}

        {/* Theme Toggle */}
        <button
          onClick={() => dispatch(toggleTheme())}
          style={{
            ...navButton,
            backgroundColor: theme === "light" ? "#222" : "#fff",
            color: theme === "light" ? "#fff" : "#222",
          }}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </div>
  );
};

export default Header;
