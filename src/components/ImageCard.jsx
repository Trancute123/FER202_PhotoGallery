import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../redux/slices/favoriteSlice";
import { openModal } from "../redux/slices/modalSlice"; // ✅ Thêm dòng này

export default function ImageCard({ img }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite);
  const isFavorite = favorites.some((item) => item.id === img.id);

  const handleLike = () => {
    dispatch(addToFavorites(img));
  };

  const handleUnlike = () => {
    dispatch(removeFromFavorites(img));
  };

  const handleOpenModal = () => {
    dispatch(openModal(img)); // ✅ Gửi action mở modal
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        paddingBottom: "16px",
        overflow: "hidden",
        width: "260px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "auto",
        cursor: "pointer", // ✅ Cho hiệu ứng click ảnh
      }}
    >
      <img
        src={img.url}
        alt={img.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
        onClick={handleOpenModal} // ✅ Click ảnh mở modal
      />

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <strong>{img.name}</strong>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "10px",
          flexWrap: "wrap",
        }}
      >
        {!isFavorite && (
          <button
            onClick={handleLike}
            style={{
              backgroundColor: "#ff6b81",
              color: "#fff",
              padding: "8px 12px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            ❤️ Like
          </button>
        )}

        <a
          href={img.url}
          download
          style={{
            backgroundColor: "#2ecc71",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          📥 Download
        </a>

        {isFavorite && (
          <button
            onClick={handleUnlike}
            style={{
              backgroundColor: "#ff6b81",
              color: "#fff",
              padding: "8px 12px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            💔 Unlike
          </button>
        )}
      </div>
    </div>
  );
}
