import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/slices/favoriteSlice";

export default function FavoriteButton({ id }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.favorites);
  const isFavorite = favorites.includes(id);

  return (
    <button onClick={() => dispatch(toggleFavorite(id))}>
      {isFavorite ? "♥" : "♡"}
    </button>
  );
}
