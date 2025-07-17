import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../redux/slices/favoriteSlice";
import { openModal } from "../redux/slices/modalSlice";

export default function ImageCard({ img }) {
  const [rating, setRating] = useState(0); // State cho rating
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite);
  const isFavorite = favorites.some((item) => item.id === img.id);

  // Hàm xử lý khi người dùng click vào sao để đánh giá
  const handleRating = (value) => {
    setRating(value); // Cập nhật rating theo giá trị người dùng chọn
  };

  const handleLike = () => {
    dispatch(addToFavorites(img));
  };

  const handleUnlike = () => {
    dispatch(removeFromFavorites(img));
  };

  const handleOpenModal = () => {
    dispatch(openModal(img));
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
        cursor: "pointer", // Cho hiệu ứng click ảnh
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
        onClick={handleOpenModal} // Click ảnh mở modal
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
              padding: "8px 12px", // Đảm bảo padding không bị trùng lặp
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
            padding: "8px 12px", // Đảm bảo padding không bị trùng lặp
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
              padding: "8px 12px", // Đảm bảo padding không bị trùng lặp
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            💔 Unlike
          </button>
        )}

        {/* Nút Rating */}
        <button
          style={{
            backgroundColor: "#f39c12",
            color: "#fff",
            padding: "8px 15px", // Điều chỉnh padding sao cho hợp lý
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Hiệu ứng đổ bóng
            transition: "background-color 0.3s, transform 0.2s", // Hiệu ứng chuyển màu và phóng to
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#e67e22")} // Màu khi hover vào
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#f39c12")} // Màu trở về khi hover ra
        >
          ⭐ Rating
        </button>
      </div>

      {/* Phần Rating (hiển thị sao) */}
      <div
        className="rating-section"
        style={{
          marginTop: "20px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleRating(star)} // Cập nhật rating khi người dùng click vào sao
            style={{
              fontSize: "35px",
              cursor: "pointer",
              color: star <= rating ? "#ffcc00" : "#ccc", // Màu vàng cho sao đã chọn
              transition: "transform 0.3s, color 0.3s ease-in-out", // Hiệu ứng mượt cho màu sắc và sao
              transform: star <= rating ? "scale(1.2)" : "scale(1)", // Phóng to sao đã chọn
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#ffcc00"; // Hover vào sao
              e.target.style.transform = "scale(1.2)"; // Phóng to sao khi hover
            }}
            onMouseLeave={(e) => {
              e.target.style.color = star <= rating ? "#ffcc00" : "#ccc"; // Hover ra
              e.target.style.transform = "scale(1)"; // Trả về kích thước ban đầu
            }}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
}
