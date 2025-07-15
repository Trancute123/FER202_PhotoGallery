import React from "react";
import Header from "../components/layout/Header";
import Gallery from "../components/Gallery.jsx";
import images from "../data/images";

export default function GalleryPage() {
  return (
    <>
      <Header />
      <Gallery images={images} />
    </>
  );
}
