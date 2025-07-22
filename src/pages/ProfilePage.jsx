import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleTheme } from "../redux/slices/themeSlice";
import currentUser from "../utils/currentUser";
import {
  FaMapMarkerAlt,
  FaUserFriends,
  FaRetweet,
} from "react-icons/fa";

export default function ProfilePage() {
  const theme = useSelector((state) => state.theme);
  const isDark = theme === "dark";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const [activeTab, setActiveTab] = useState("saved");

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    navigate("/");
  };

  const savedImages = [
    "/images/nature.jpg",
    "/images/nature2.jpg",
    "/images/nature3.jpg",
    "/images/nature4.jpg",
    "/images/nature5.jpg",
    "/images/nature6.jpg",
    "/images/nature7.jpg",
    "/images/nature8.jpg",
    "/images/nature9.jpg",
    "/images/nature10.jpg",
  ];

  const createdImages = [
    "/images/cat-pilot.jpg",
    "/images/mountain.jpg",
    "/images/nature9.jpg",
    "/images/pam.jpg",
    "/images/puppy.jpg",
  ];

  return (
    <>
      {/* Navbar */}
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
          {["gallery", "create", "favorites"].map((page) => (
            <span
              key={page}
              onClick={() => navigate(`/${page}`)}
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
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </span>
          ))}

          {isAuthenticated && (
            <>
              <span
                onClick={handleLogout}
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
              >
                Đăng xuất
              </span>

              <img
                src={currentUser.avatar}
                alt="Avatar"
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
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
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
        style={{
          background: "linear-gradient(to bottom, #ffe0ec, #fce4ec)",
          padding: "40px 20px",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          <img
            src={currentUser.avatar}
            alt="Avatar"
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid white",
              boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
              marginBottom: "16px",
            }}
          />

          <h2 style={{ fontWeight: "700", fontSize: "28px", marginBottom: "4px" }}>
            {currentUser.name}
          </h2>
          <p style={{ color: "#555", fontSize: "16px", marginBottom: "12px" }}>
            @{currentUser.username}
          </p>

          <div
            style={{
              display: "flex",
              gap: "32px",
              justifyContent: "center",
              marginBottom: "12px",
              fontSize: "15px",
              color: "#444",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <FaUserFriends />
              <span>{currentUser.followers} followers</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <FaRetweet />
              <span>{currentUser.following} following</span>
            </div>
          </div>

          <p style={{ fontSize: "16px", marginBottom: "16px", color: "#333" }}>
            {currentUser.bio}
          </p>

          {/* Location only */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              justifyContent: "center",
              fontSize: "15px",
              color: "#444",
              marginTop: "12px",
            }}
          >
            <FaMapMarkerAlt />
            <span>{currentUser.location}</span>
          </div>

          <button
            onClick={() => navigate("/settings")}
            style={{
              marginTop: "24px",
              padding: "10px 24px",
              border: "2px solid #d6336c",
              borderRadius: "999px",
              backgroundColor: "#fff0f5",
              color: "#d6336c",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#d6336c";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#fff0f5";
              e.currentTarget.style.color = "#d6336c";
            }}
          >
            Cài đặt tài khoản
          </button>
        </div>

        {/* Tabs */}
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <button
            onClick={() => setActiveTab("saved")}
            style={{
              padding: "8px 16px",
              borderRadius: "999px",
              marginRight: "8px",
              fontWeight: "bold",
              backgroundColor: activeTab === "saved" ? "#d6336c" : "#eee",
              color: activeTab === "saved" ? "#fff" : "#444",
              border: "none",
              cursor: "pointer",
            }}
          >
            Ảnh đã lưu
          </button>
          <button
            onClick={() => setActiveTab("created")}
            style={{
              padding: "8px 16px",
              borderRadius: "999px",
              fontWeight: "bold",
              backgroundColor: activeTab === "created" ? "#d6336c" : "#eee",
              color: activeTab === "created" ? "#fff" : "#444",
              border: "none",
              cursor: "pointer",
            }}
          >
            Ảnh đã tạo
          </button>
        </div>

        {/* Image Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
            maxWidth: "1200px",
            margin: "40px auto 0",
            padding: "0 20px",
          }}
        >
          {(activeTab === "saved" ? savedImages : createdImages).map((src, idx) => (
            <div key={idx} style={{ width: "100%", aspectRatio: "1/1", overflow: "hidden" }}>
              <img
                src={src}
                alt={`Ảnh ${idx + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                  transition: "transform 0.3s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
