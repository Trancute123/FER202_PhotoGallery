import React from "react";

function Gallery({ images }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
      }}
    >
      {images.map((img) => (
        <div key={img.id}>
          <img src={img.url} alt={img.name} style={{ width: "100%" }} />
          <p>{img.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
