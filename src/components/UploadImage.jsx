import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addImage } from "../redux/slices/imageSlice";
import { v4 as uuidv4 } from "uuid";

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setName(e.target.files[0]?.name.replace(/\.[^/.]+$/, "") || "");
  };

 const handleUpload = () => {
  if (!file) return;
  const reader = new FileReader();
  reader.onloadend = () => {
    const newImage = {
      id: uuidv4(),
      url: reader.result,
      name: name || file.name.replace(/\.[^/.]+$/, ""),
      category: "User Upload",
      liked: false,
      rating: 0,
    };
    dispatch(addImage(newImage));
    setFile(null);
    setName("");
  };
  reader.readAsDataURL(file); // <-- Dòng này phải nằm ngoài onloadend!
};

  return (
    <div
      className="upload-float"
      style={{
        position: "fixed",
        bottom: 30,
        right: 30,
        background: "#fff",
        border: "3px solid #ff69b4",
        borderRadius: "16px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
        padding: "16px",
        zIndex: 999999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: 180,
      }}
    >
      <label style={{ fontWeight: "bold", marginBottom: 8 }}>Upload ảnh</label>
      <input type="file" accept="image/*" onChange={handleChange} style={{ marginBottom: 8 }} />
      <input
        type="text"
        placeholder="Tên ảnh"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: 8, width: "100%" }}
      />
      <button
        onClick={handleUpload}
        disabled={!file}
        style={{
          background: "#ff69b4",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "6px 18px",
          fontWeight: "bold",
          cursor: file ? "pointer" : "not-allowed",
        }}
      >
        Upload
      </button>
    </div>
  );
};

export default UploadImage;