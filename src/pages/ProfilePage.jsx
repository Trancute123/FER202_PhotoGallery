import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleTheme } from "../redux/slices/themeSlice";
import currentUser from "../utils/currentUser";
import { FaMapMarkerAlt, FaUserFriends, FaRetweet } from "react-icons/fa";

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
                Log out
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

      {/* Profile Info Section */}
      <div
        style={{
          background: "linear-gradient(to bottom, #ffdce5, #fff0f5)",
          padding: "80px 20px 40px",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            background: "#fff",
            borderRadius: "24px",
            padding: "60px 24px 40px",
            boxShadow: "0 20px 40px rgba(255, 105, 180, 0.15)",
            position: "relative",
            textAlign: "center",
          }}
        >
          <img
            src={currentUser.avatar}
            alt="Avatar"
            style={{
              width: "220px",
              height: "220px",
              borderRadius: "80%",
              objectFit: "cover",
              border: "5px solid white",
              boxShadow: "0 12px 25px rgba(0, 0, 0, 0.15)",
              position: "absolute",
              top: "-75px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#fff",
            }}
          />

          <h2
            style={{ fontWeight: "800", fontSize: "30px", marginTop: "90px" }}
          >
            {currentUser.name}
          </h2>
          <p style={{ color: "#888", marginBottom: "8px" }}>
            @{currentUser.username}
          </p>

          <p style={{ fontSize: "15px", marginBottom: "20px", color: "#555" }}>
            {currentUser.bio}
          </p>

          <p style={{ color: "#777", fontSize: "14px", marginBottom: "16px" }}>
            <FaMapMarkerAlt style={{ marginRight: "6px" }} />
            {currentUser.location}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "32px",
              fontSize: "15px",
              color: "#444",
              marginBottom: "24px",
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

          <button
            onClick={() => navigate("/settings")}
            style={{
              background: "linear-gradient(to right, #ff758c, #ff7eb3)",
              color: "#fff",
              border: "none",
              padding: "10px 24px",
              fontSize: "15px",
              fontWeight: "600",
              borderRadius: "999px",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(255,105,180,0.3)",
              transition: "all 0.3s ease",
            }}
          >
            Account Settings
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
            Saved Images
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
            Created Images
          </button>
        </div>

        {/* Gallery */}
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
          {(activeTab === "saved" ? savedImages : createdImages).map(
            (src, idx) => (
              <div
                key={idx}
                style={{
                  width: "100%",
                  aspectRatio: "1/1",
                  overflow: "hidden",
                }}
              >
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
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
