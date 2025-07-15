import React from "react";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../redux/slices/favoriteSlice";

function Gallery({ images }) {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "30px",
        padding: "30px",
        background: "linear-gradient(to bottom, #fce4ec, #f8bbd0)",
        minHeight: "100vh",
      }}
    >
      {images.map((img) => (
        <div
          key={img.id}
          style={{
            background: "#fff",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.03)";
            e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
          }}
        >
          <img
            src={img.url}
            alt={img.name}
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              display: "block",
              borderBottom: "1px solid #eee",
            }}
          />
          <div style={{ padding: "15px", textAlign: "center" }}>
            <h3
              style={{
                margin: "10px 0",
                fontWeight: "bold",
                color: "#333",
                fontSize: "18px",
              }}
            >
              {img.name}
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <button
                style={buttonStyle("#f87171")}
                onClick={() => dispatch(addToFavorites(img))}
              >
                ❤️ Like
              </button>
              <button
                style={buttonStyle("#34d399")}
                onClick={() => alert(`Downloading "${img.name}" (fake link)`)}
              >
                📥 Download
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function buttonStyle(color) {
  return {
    backgroundColor: color,
    border: "none",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "14px",
    transition: "all 0.2s ease",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };
}

export default Gallery;
