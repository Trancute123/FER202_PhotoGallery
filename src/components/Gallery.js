import React from "react";

function Gallery({ images }) {
  return (
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
        </div>
      ))}
    </div>
  );
}

export default Gallery;
