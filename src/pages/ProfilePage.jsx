import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleTheme } from "../redux/slices/themeSlice";
import currentUser from "../utils/currentUser";
import Gallery from "../components/Gallery";
import {
  FaGlobe,
  FaMapMarkerAlt,
  FaUserFriends,
  FaRetweet,
  FaCalendarAlt,
} from "react-icons/fa";

export default function ProfilePage() {
  const userImages = useSelector((state) => state.favorite);
  const theme = useSelector((state) => state.theme);
  const isDark = theme === "dark";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      {/* Navbar + Theme Switcher */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 40px",
          backgroundColor: isDark ? "#333" : "#fff",
          borderBottom: `1px solid ${isDark ? "#555" : "#eee"}`,
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: "24px",
            color: isDark ? "#ffe0e9" : "#d6336c",
          }}
        >
          PinkPin
        </div>

        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>

        <span
          style={{
            backgroundColor: isDark ? "#bb1c5a" : "#ff69b4",
            border: "none",
            borderRadius: "999px",
            padding: "8px 16px",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "14px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/gallery")}
        >
          Gallery
        </span>
          <span
            style={{
              backgroundColor: isDark ? "#bb1c5a" : "#ff69b4",
              border: "none",
              borderRadius: "999px",
              padding: "8px 16px",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "14px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/create")}
          >
            Tạo
          </span>
          <span
            style={{
              backgroundColor: isDark ? "#bb1c5a" : "#ff69b4",
              border: "none",
              borderRadius: "999px",
              padding: "8px 16px",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "14px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/favorites")}
          >
            Favorites
          </span>

          {isAuthenticated && (
            <>
              <span
                style={{
                  backgroundColor: "transparent",
                  border: `2px solid ${isDark ? "#ffe0e9" : "#d6336c"}`,
                  borderRadius: "999px",
                  padding: "8px 16px",
                  color: isDark ? "#ffe0e9" : "#d6336c",
                  fontWeight: "bold",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
                onClick={handleLogout}
              >
                Đăng xuất
              </span>

              <img
                src="/images/avatar-default.jpg"
                alt="Avatar"
                title="Your Account"
                onClick={() => navigate("/profile")}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid white",
                  cursor: "pointer",
                  boxShadow: "0 0 5px rgba(0,0,0,0.15)",
                  transition: "transform 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </>
          )}

          <button
            onClick={() => dispatch(toggleTheme())}
            style={{
              fontSize: "16px",
              padding: "8px 16px",
              borderRadius: "999px",
              border: "none",
              backgroundColor: isDark ? "#ffe0e9" : "#333",
              color: isDark ? "#333" : "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              transition: "0.3s",
            }}
          >
            {isDark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>

      {/* Profile Info */}
      <div
        className="container py-5"
        style={{ background: "linear-gradient(to bottom, #ffe0ec, #fce4ec)" }}
      >
        <div className="text-center mb-5">
          <img
            src={currentUser.avatar}
            alt="Avatar"
            className="rounded-circle shadow mb-3"
            style={{
              width: "160px",
              height: "160px",
              objectFit: "cover",
              border: "5px solid white",
            }}
          />
          <h2 className="fw-bold mb-1">{currentUser.name}</h2>
          <p className="text-muted">@{currentUser.username}</p>
          <span className="me-3">
            <FaUserFriends className="me-1 text-secondary" /> {currentUser.followers} followers
          </span>
          <span>
            <FaRetweet className="me-1 text-secondary" /> {currentUser.following} following
          </span>
          <p className="mt-3">{currentUser.bio}</p>

          <div className="d-flex flex-column align-items-center gap-2 mt-2 text-dark fs-6">
            <span>
              <FaGlobe className="me-1 text-secondary" />
              <a
                href={currentUser.website}
                className="text-dark"
                target="_blank"
                rel="noreferrer"
              >
                <strong>{currentUser.website}</strong>
              </a>
            </span>
            <span>
              <FaMapMarkerAlt className="me-1 text-secondary" /> {currentUser.location}
            </span>
            <span>
              <FaCalendarAlt className="me-1 text-secondary" /> {currentUser.joinDate}
            </span>
          </div>

          <button
            onClick={() => navigate("/settings")}
            className="btn btn-outline-dark mt-4"
          >
            ⚙️ Cài đặt tài khoản
          </button>
        </div>

        {/* Gallery ảnh */}
        <div className="container">
          <h3 className="mb-4 text-center">📸 Ảnh Đã Lưu</h3>
          {userImages.length === 0 ? (
            <p className="text-muted text-center">Chưa có ảnh nào được lưu.</p>
          ) : (
            <Gallery images={userImages} />
          )}
        </div>
      </div>
    </>
  );
}
