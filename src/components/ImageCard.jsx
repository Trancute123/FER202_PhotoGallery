import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../redux/slices/favoriteSlice";
import { openModal } from "../redux/slices/modalSlice";

export default function ImageCard({ img }) {
  const [comment, setComment] = useState(""); // State cho comment
  const [comments, setComments] = useState([]); // State lưu danh sách comment
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite);
  const isFavorite = favorites.some((item) => item.id === img.id);

  // Xử lý việc thêm comment vào local state
  const handleAddComment = () => {
    if (comment.trim() === "") return;

    setComments([...comments, { text: comment, createdAt: new Date() }]);
    setComment(""); // Reset input comment
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
        cursor: "pointer",
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
        onClick={handleOpenModal}
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

      <div className="comments-section" style={{ marginTop: "20px" }}>
        <h3>Comments</h3>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment..."
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        ></textarea>
        <button
          onClick={handleAddComment}
          style={{
            backgroundColor: "#20a829ff",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Comment
        </button>
        <div className="comments-list" style={{ marginTop: "15px" }}>
          {comments.map((comment, index) => (
            <div
              key={index}
              className="comment-item"
              style={{ marginBottom: "10px" }}
            >
              <p>{comment.text}</p>
              <span style={{ fontSize: "12px", color: "#777" }}>
                {new Date(comment.createdAt).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
