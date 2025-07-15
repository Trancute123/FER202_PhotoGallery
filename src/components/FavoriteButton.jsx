// src/components/FavoriteButton.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../redux/slices/favoriteSlice";

export default function FavoriteButton({ img }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite);

  const isLiked = favorites.some((fav) => fav.id === img.id);

  const handleToggle = () => {
    if (isLiked) {
      dispatch(removeFromFavorites(img.id));
    } else {
      dispatch(addToFavorites(img));
    }
  };

  return (
    <button
      onClick={handleToggle}
      style={{
        backgroundColor: isLiked ? "#ff6b81" : "#eee",
        color: isLiked ? "white" : "black",
        padding: "8px 12px",
        borderRadius: "8px",
        border: "1px solid lightgray",
        marginRight: "10px",
        cursor: "pointer",
      }}
    >
      {isLiked ? "💔 Unlike" : "💗 Like"}
    </button>
  );
}
