// components/PhotoModal.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/slices/modalSlice";

export default function PhotoModal() {
  const dispatch = useDispatch();
  const { isOpen, image } = useSelector((state) => state.modal);

  if (!isOpen || !image) return null;

  return (
    <div
      onClick={() => dispatch(closeModal())}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
        cursor: "zoom-out",
      }}
    >
      <img
        src={image.url}
        alt={image.name}
        style={{
          maxWidth: "90%",
          maxHeight: "90%",
          borderRadius: "8px",
        }}
      />
    </div>
  );
}
