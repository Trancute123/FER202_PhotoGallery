import React from "react";
import { useSelector } from "react-redux";
import Gallery from "../components/Gallery";
import Header from "../components/layout/Header";

export default function FavoritesPage() {
  const favorites = useSelector((state) => state.favorite);

  return (
    <>
      <Header />
      {favorites.length === 0 ? (
        <p style={{ padding: "20px", textAlign: "center" }}>
          You haven't liked any images yet.
        </p>
      ) : (
        <Gallery images={favorites} />
      )}
    </>
  );
}
