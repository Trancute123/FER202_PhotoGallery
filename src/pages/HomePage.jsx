// src/pages/HomePage.jsx
import React from "react";
import Gallery from "../components/Gallery";
import images from "../data/images";

const HomePage = () => (
  <>
    <h1>📸 Photo Gallery</h1>
    <Gallery images={images} />
  </>
);

export default HomePage;
