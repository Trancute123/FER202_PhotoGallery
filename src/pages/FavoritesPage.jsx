import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Gallery from "../components/Gallery";
import Header from "../components/layout/Header";
import { toggleTheme } from "../redux/slices/themeSlice";

export default function FavoritesPage() {
  const favorites = useSelector((state) => state.favorite);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const backgroundColor = theme === "light" ? "#ffe0e9" : "#1a1a1a";
  const textColor = theme === "light" ? "#000" : "#fff";

  return (
    <div style={{ backgroundColor, color: textColor, minHeight: "100vh" }}>
      <Header />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <button
          onClick={() => navigate("/gallery")}
          style={{
            backgroundColor: "#ff69b4",
            color: "#fff",
            border: "none",
            borderRadius: "999px",
            padding: "10px 20px",
            fontWeight: "bold",
            fontSize: "14px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          ← Quay lại Gallery
        </button>
        <button
          onClick={() => dispatch(toggleTheme())}
          style={{
            marginLeft: "12px",
            padding: "8px 16px",
            borderRadius: "999px",
            border: "none",
            backgroundColor: "#fff",
            color: "#d6336c",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      {favorites.length === 0 ? (
        <p style={{ padding: "20px", textAlign: "center" }}>
          Bạn chưa thích ảnh nào.
        </p>
      ) : (
        <Gallery images={favorites} />
      )}
    </div>
  );
}
