import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";

export default function FavoritesPage() {
  const favorites = useSelector((state) => state.favorite);
  const theme = useSelector((state) => state.theme);
  const navigate = useNavigate();

  const backgroundColor =
    theme === "light"
      ? "linear-gradient(to right, #ffffffff, #ffffffff)"
      : "linear-gradient(to right, #121212, #1e1e1e)";
  const textColor = theme === "light" ? "#111" : "#f9f9f9";

  return (
    <div
      style={{
        background: backgroundColor,
        color: textColor,
        minHeight: "100vh",
        transition: "all 0.5s ease",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <Header />

      {/* Navigation buttons */}
      <div style={{ padding: "20px", textAlign: "left" }}>
        <button
          onClick={() => navigate("/gallery")}
          style={{
            backgroundColor: "#ff69b4",
            color: "#fff",
            border: "none",
            borderRadius: "999px",
            padding: "10px 22px",
            fontWeight: "bold",
            fontSize: "14px",
            cursor: "pointer",
            marginRight: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            transition: "transform 0.2s ease",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          ← Back
        </button>
      </div>

      {/* No favorites message */}
      {favorites.length === 0 ? (
        <p
          style={{
            padding: "30px 40px",
            fontSize: "18px",
            opacity: 0.7,
            fontStyle: "italic",
          }}
        >
          Looks like you haven’t liked any photos yet.
        </p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: "20px",
            padding: "20px 40px",
          }}
        >
          {favorites.map((img, index) => (
            <div
              key={index}
              style={{
                width: "240px",
                borderRadius: "16px",
                overflow: "hidden",
                backgroundColor: theme === "light" ? "#fff" : "#2a2a2a",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={img.url}
                alt={img.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  padding: "10px",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: theme === "light" ? "#333" : "#fff",
                }}
              >
                {img.name}
              </div>
              <div style={{ padding: "10px", textAlign: "center" }}>
                <a
                  href={img.url}
                  download
                  style={{
                    backgroundColor: "#ff69b4",
                    color: "#fff",
                    padding: "6px 16px",
                    borderRadius: "20px",
                    textDecoration: "none",
                    fontSize: "13px",
                    fontWeight: "bold",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                    transition: "background 0.3s",
                    display: "inline-block",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#e055a5")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#ff69b4")
                  }
                >
                  ⬇ Download
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
