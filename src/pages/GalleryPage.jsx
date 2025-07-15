import React from "react";
import Header from "../components/layout/Header";
import Gallery from "../components/Gallery.jsx";
import images from "../data/images";

export default function GalleryPage() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #f85032, #e73827)", // nền đỏ cam tương tự header
        minHeight: "100vh",
        paddingBottom: "40px",
      }}
    >
      <Header />
      <Gallery images={images} />
    </div>
  );
}
