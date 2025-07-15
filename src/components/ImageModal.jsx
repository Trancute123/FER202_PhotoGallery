import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../redux/slices/modalSlice";

export default function ImageModal() {
  const dispatch = useDispatch();
  const { isOpen, image } = useSelector((state) => state.modal);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={() => dispatch(closeModal())}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex", justifyContent: "center", alignItems: "center",
        zIndex: 1000,
      }}
    >
      <di
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "90vw",
          maxHeight: "90vh",
          overflow: "auto",
        }}
      >
        <img
          src={image.url}
          alt={image.name}
          style={{ width: "100%", maxHeight: "70vh", objectFit: "contain" }}
        />
        <p style={{ marginTop: "10px", textAlign: "center" }}>{image.name}</p>
      </di>
    </div>
  );
}
