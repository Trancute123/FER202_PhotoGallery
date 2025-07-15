import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/layout/Header";
import Gallery from "../components/Gallery";
import images from "../data/images";

export default function FavoritesPage() {
  const favorites = useSelector((state) => state.favorite.favorites);
  const favoriteImages = images.filter((img) => favorites.includes(img.id));

  return (
    <>
      <Header />
      <h2 style={{ textAlign: "center" }}>Your Favorite Images</h2>
      <Gallery images={favoriteImages} />
    </>
  );
}
