import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/layout/Header";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import images from "../data/images";
import Gallery from "../components/Gallery";

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
