import React from "react";
import FavoriteButton from "../components/FavoriteButton";

function Gallery({ images }) {
  return (
    <div className="container mt-4">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {images.map((img) => (
          <div key={img.id}>
            <img
              src={img.url}
              alt={img.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            />
            <p style={{ textAlign: "center", marginTop: "8px" }}>{img.name}</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <FavoriteButton photo={img} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
