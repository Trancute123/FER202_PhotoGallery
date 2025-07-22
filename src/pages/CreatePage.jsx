import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addImage } from "../redux/slices/imageSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { GoogleGenAI, Modality } from "@google/genai";
import "react-toastify/dist/ReactToastify.css";

const CreatePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("User Upload");
  const [aiPrompt, setAiPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isDark, setIsDark] = useState(false);

  const ai = new GoogleGenAI({
    apiKey: "AIzaSyC3u3WOCCtNkcwB9hEq9pVD_VmEfnr35W0",
  });

  useEffect(() => {
    setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  const themeStyles = {
    bg: isDark ? "#1e1e1e" : "#ffffff",
    text: isDark ? "#eee" : "#333",
    card: isDark ? "#2a2a2a" : "#fff",
    border: isDark ? "#444" : "#ddd",
    button: "#ff69b4",
  };

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setName(selectedFile?.name.replace(/\.[^/.]+$/, "") || "");
  };

  const handleUpload = () => {
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const newImage = {
        id: uuidv4(),
        url: reader.result,
        name: name,
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

  const handleAiChat = async () => {
    if (!aiPrompt.trim()) return;
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-preview-image-generation",
        contents: [{ role: "user", parts: [{ text: aiPrompt }] }],
        config: {
          responseModalities: [Modality.TEXT, Modality.IMAGE],
        },
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.text) {
          setAiResponse(part.text);
        } else if (part.inlineData) {
          const imageData = part.inlineData.data;
          const imageUrl = "data:image/png;base64," + imageData;
          setAiResponse(
  <img
    src={imageUrl}
    alt="AI generated"
    style={{
      marginTop: "12px",
      maxWidth: "100%",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    }}
  />
);

        }
      }
      setAiPrompt("");
    } catch (err) {
      toast.error("❌ Lỗi AI: " + err.message);
    }
  };

  return (
    <div
      style={{
        backgroundColor: themeStyles.bg,
        color: themeStyles.text,
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />

      {/* Header */}
      <header
        style={{
          backgroundColor: themeStyles.card,
          padding: "16px 32px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <h1
          onClick={() => navigate("/")}
          style={{ fontSize: "20px", fontWeight: "700", color: "#d6336c", cursor: "pointer", margin: 0 }}
        >
          PinkPin
        </h1>
        <button
          onClick={() => navigate("/gallery")}
          style={{
            backgroundColor: themeStyles.button,
            color: "#fff",
            border: "none",
            borderRadius: "999px",
            padding: "8px 16px",
            fontWeight: "600",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Xem Gallery
        </button>
      </header>

      {/* Form */}
      <div style={{ maxWidth: 800, margin: "40px auto", padding: "0 20px" }}>
        <div
          style={{
            background: themeStyles.card,
            padding: "32px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            borderRadius: "0px",
          }}
        >
          <h2 style={{ color: "#d6336c", marginBottom: "20px", fontWeight: 700 }}>
            📤 Upload Ảnh của bạn
          </h2>

          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              border: `1px solid ${themeStyles.border}`,
              backgroundColor: themeStyles.card,
              marginBottom: "12px",
              fontSize: "14px",
              color: themeStyles.text,
            }}
          />

          <input
            type="text"
            placeholder="Tên ảnh"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              border: `1px solid ${themeStyles.border}`,
              backgroundColor: themeStyles.card,
              marginBottom: "12px",
              fontSize: "14px",
              color: themeStyles.text,
            }}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              border: `1px solid ${themeStyles.border}`,
              backgroundColor: themeStyles.card,
              marginBottom: "16px",
              fontSize: "14px",
              color: themeStyles.text,
            }}
          >
            <option value="User Upload">Ảnh người dùng</option>
            <option value="Nature">Thiên nhiên</option>
            <option value="Art">Nghệ thuật</option>
            <option value="Animal">Động vật</option>
            <option value="Travel">Du lịch</option>
            <option value="Food">Ẩm thực</option>
          </select>

          <button
            onClick={handleUpload}
            disabled={!file}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: file ? themeStyles.button : "#ccc",
              color: "#fff",
              border: "none",
              borderRadius: "999px",
              fontWeight: "600",
              cursor: file ? "pointer" : "not-allowed",
              boxShadow: "0 4px 14px rgba(255,105,180,0.3)",
            }}
          >
            Upload
          </button>
        </div>

        {/* AI Chat */}
        <div
          style={{
            background: isDark ? "#2b2b2b" : "#f8f9fa",
            marginTop: "32px",
            padding: "24px",
            borderRadius: "0px",
          }}
        >
          <h3 style={{ color: "#d6336c", marginBottom: "12px" }}>🤖 Chat AI – Tạo ảnh & nội dung</h3>
          <input
            type="text"
            placeholder="Nhập prompt AI..."
            value={aiPrompt}
            onChange={(e) => setAiPrompt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAiChat()}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: `1px solid ${themeStyles.border}`,
              backgroundColor: themeStyles.card,
              color: themeStyles.text,
            }}
          />
          <button
            onClick={handleAiChat}
            style={{
              padding: "10px 20px",
              backgroundColor: themeStyles.button,
              border: "none",
              borderRadius: "6px",
              color: "#fff",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Gửi prompt
          </button>

          <div style={{ marginTop: "16px", fontStyle: "italic", color: themeStyles.text }}>
            {aiResponse}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
