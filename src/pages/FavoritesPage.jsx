import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Gallery from "../components/Gallery";
import Header from "../components/layout/Header";

export default function FavoritesPage() {
  const favorites = useSelector((state) => state.favorite);
  const navigate = useNavigate();

  return (
    <>
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
      </div>

      {favorites.length === 0 ? (
        <p style={{ padding: "20px", textAlign: "center" }}>
          Bạn chưa thích ảnh nào.
        </p>
      ) : (
        <Gallery images={favorites} />
      )}
    </>
  );
}
