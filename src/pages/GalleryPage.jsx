import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/layout/Header";
import SearchBar from "../components/SearchBar.jsx";
import CategoryFilter from "../components/CategoryFilter.jsx";
import Gallery from "../components/Gallery.jsx";

import images from "../data/images";

export default function FilterPage() {
  const { category, searchTerm } = useSelector((state) => state.filter);

  const filteredImages = images.filter((img) => {
    const matchCategory = category === "All" || img.category === category;
    const matchSearch = img.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <Header />
      <SearchBar />
      <CategoryFilter />
      <Gallery images={filteredImages} />
    </>
  );
}
