import React from "react";

function Gallery({ images }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "30px",
        padding: "20px",
        background: "linear-gradient(135deg, #f8f9fa, #e0e0e0)",
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
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
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
              height: "240px",
              objectFit: "cover",
              borderBottom: "1px solid #eee",
            }}
          />
          <div style={{ padding: "15px", textAlign: "center" }}>
            <h3 style={{ margin: "10px 0", fontWeight: "bold", color: "#333" }}>
              {img.name}
            </h3>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "10px" }}
            >
              <button
                style={buttonStyle("#f87171")} // red - like
                onClick={() => alert(`You liked "${img.name}"`)}
              >
                ❤️ Like
              </button>
              <button
                style={buttonStyle("#60a5fa")} // blue - view
                onClick={() => alert(`Viewing "${img.name}"`)}
              >
                🔍 View
              </button>
              <button
                style={buttonStyle("#34d399")} // green - download
                onClick={() => alert(`Downloading "${img.name}" (fake)`)}
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
    padding: "8px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500",
    transition: "background-color 0.2s ease",
  };
}

export default Gallery;
