import React from "react";

const CreatePage = () => {
  return (
    <div
      style={{
        backgroundColor: "#ffe0e9",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <h1 style={{ fontSize: "36px", color: "#b02e53" }}>
        Trang Tin tức từ Pinterest
      </h1>
      <p style={{ fontSize: "18px", color: "#333" }}>
        Đọc tin tức chính thức, cập nhật sản phẩm và xu hướng sáng tạo tại:
      </p>
      <a
        href="https://newsroom.pinterest.com/?utm_campaign=pinterest_homepage_blogicon_all_evergreen&utm_medium=organic-pinterest&utm_source=organicpins_pinsite_homepageicon"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "12px 24px",
          backgroundColor: "#d6336c",
          color: "white",
          fontWeight: "bold",
          textDecoration: "none",
          borderRadius: "999px",
        }}
      >
        Đến trang tin Pinterest
      </a>
    </div>
  );
};

export default CreatePage;
