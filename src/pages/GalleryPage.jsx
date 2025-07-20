import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice"; // ✅ Đừng quên import action toggleTheme
import SearchBar from "../components/SearchBar.jsx";
import CategoryFilter from "../components/CategoryFilter.jsx";
import Gallery from "../components/Gallery.jsx";
import sampleImages from "../data/images";

export default function GalleryPage() {
  const dispatch = useDispatch();
  const { category, searchTerm } = useSelector((state) => state.filter);
  const theme = useSelector((state) => state.theme);
  const isDark = theme === "dark";
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  const imagesFromRedux = useSelector((state) => state.image) || [];
  const allImages = [...(sampleImages || []), ...imagesFromRedux];

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    navigate("/");
  };

  const filteredImages = allImages.filter((img) => {
    if (!img.name) return false;
    const matchCategory = category === "All" || img.category === category;
    const matchSearch = img.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div
      style={{
        backgroundColor: isDark ? "#222" : "#fafafa",
        minHeight: "100vh",
      }}
    >
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
          )}

          {/* ✅ Nút chuyển Dark/Light Theme */}
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

      {/* Nội dung chính */}
      <SearchBar />
      <CategoryFilter />
      <Gallery images={filteredImages} />
    </div>
  );
}
