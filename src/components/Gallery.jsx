import React from "react";
import ImageCard from "./ImageCard";

export default function Gallery({ images }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {images.map((img) => (
        <ImageCard key={img.id} img={img} />
      ))}
    </div>
  );
}
