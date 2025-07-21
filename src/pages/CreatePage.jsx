import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addImage } from "../redux/slices/imageSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      alert("Tải ảnh thành công 🎉");
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      style={{
        backgroundColor: "#ffe0e9",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "system-ui",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "24px",
          padding: "40px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          maxWidth: "500px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Nút quay lại */}
        <div style={{ marginBottom: "20px", textAlign: "left" }}>
          <button
            onClick={() => navigate("/gallery")}
            style={{
              background: "transparent",
              border: "none",
              color: "#d6336c",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            ← Back
          </button>
        </div>
        <h2 style={{ color: "#d6336c", marginBottom: "16px" }}>
          Share your moments with the world ✨
        </h2>
        Every photo holds a story, a feeling, an inspiration. Pick your favorite
        image, give it a name, and upload it to PinkPin to keep the memory alive
        and share it with others. Whether it’s a dreamy landscape, a lovely
        handmade item, or a simple sunset — every moment matters.
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          style={{
            marginBottom: "12px",
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "12px",
          }}
        />
        <input
          type="text"
          placeholder="Tên ảnh"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            marginBottom: "16px",
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "12px",
          }}
        />
        <button
          onClick={handleUpload}
          disabled={!file}
          style={{
            backgroundColor: "#ff69b4",
            color: "#fff",
            border: "none",
            borderRadius: "999px",
            padding: "12px 24px",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: file ? "pointer" : "not-allowed",
            width: "100%",
          }}
        >
          Upload Ảnh
        </button>
      </div>
    </div>
  );
};

export default CreatePage;
