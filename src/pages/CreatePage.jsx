import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addImage } from "../redux/slices/imageSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreatePage = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("User Upload");
  const [isDark, setIsDark] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(prefersDark);
  }, []);

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
        category: category,
        liked: false,
        rating: 0,
      };
      dispatch(addImage(newImage));
      setFile(null);
      setName("");
      setCategory("User Upload");
      toast.success("🎉 Tải ảnh thành công!");
    };
    reader.readAsDataURL(file);
  };

  const themeStyles = {
    bg: isDark ? "#1e1e1e" : "#ffffff",
    text: isDark ? "#eee" : "#333",
    card: isDark ? "#2a2a2a" : "#fff",
    border: isDark ? "#444" : "#ddd",
    button: "#ff69b4",
  };

  return (
    <div
      style={{
        backgroundColor: themeStyles.bg,
        color: themeStyles.text,
        minHeight: "100vh",
        fontFamily: `"Inter", system-ui, sans-serif`,
      }}
    >
      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={2500} hideProgressBar />

      {/* Header */}
      <header
        style={{
          backgroundColor: themeStyles.card,
          padding: "16px 32px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#d6336c",
            margin: 0,
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          PinkPin 
        </h1>
        <button
          onClick={() => navigate("/gallery")}
          style={{
            backgroundColor: themeStyles.button,
            border: "none",
            color: "#fff",
            padding: "8px 16px",
            borderRadius: "999px",
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Go to Gallery
        </button>
      </header>

      {/* Form Upload */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            background: themeStyles.card,
            color: themeStyles.text,
            borderRadius: "24px",
            padding: "32px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "500px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#d6336c",
              marginBottom: "16px",
              fontWeight: 700,
              fontSize: "22px",
            }}
          >
            Share your moments with the world ✨
          </h2>
          <p
            style={{
              marginBottom: "24px",
              color: isDark ? "#aaa" : "#555",
              fontSize: "15px",
              lineHeight: "1.6",
            }}
          >
            Upload your favorite image, give it a name and a category, and
            inspire others on PinkPin.
          </p>

          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            style={{
              marginBottom: "12px",
              width: "100%",
              padding: "12px",
              border: `1px solid ${themeStyles.border}`,
              borderRadius: "12px",
              fontSize: "14px",
              backgroundColor: isDark ? "#1e1e1e" : "#fff",
              color: themeStyles.text,
            }}
          />

          <input
            type="text"
            placeholder="Tên ảnh"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              marginBottom: "12px",
              width: "100%",
              padding: "12px",
              border: `1px solid ${themeStyles.border}`,
              borderRadius: "12px",
              fontSize: "14px",
              backgroundColor: isDark ? "#1e1e1e" : "#fff",
              color: themeStyles.text,
            }}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              marginBottom: "16px",
              width: "100%",
              padding: "12px",
              border: `1px solid ${themeStyles.border}`,
              borderRadius: "12px",
              fontSize: "14px",
              backgroundColor: isDark ? "#1e1e1e" : "#fff",
              color: themeStyles.text,
            }}
          >
            <option value="User Upload">Ảnh người dùng</option>
            <option value="Nature">Thiên nhiên</option>
            <option value="Animal">Động vật</option>
            <option value="Art">Nghệ thuật</option>
            <option value="Food">Ẩm thực</option>
            <option value="Travel">Du lịch</option>
            <option value="Other">Khác</option>
          </select>

          <button
            onClick={handleUpload}
            disabled={!file}
            style={{
              backgroundColor: file ? themeStyles.button : "#ccc",
              color: "#fff",
              border: "none",
              borderRadius: "999px",
              padding: "12px 24px",
              fontWeight: "600",
              fontSize: "15px",
              cursor: file ? "pointer" : "not-allowed",
              width: "100%",
              boxShadow: file
                ? "0 4px 14px rgba(255,105,180,0.3)"
                : "none",
              transition: "all 0.3s ease",
            }}
          >
            Upload Ảnh
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
