import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar.jsx";
import CategoryFilter from "../components/CategoryFilter.jsx";
import Gallery from "../components/Gallery.jsx";
import sampleImages from "../data/images"; // Nếu có file này

export default function GalleryPage() {
  const { category, searchTerm } = useSelector((state) => state.filter);
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  const imagesFromRedux = useSelector((state) => state.image) || [];
  const allImages = [...(sampleImages || []), ...imagesFromRedux];

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    navigate("/"); // Quay lại trang GuestPage
  };

  const filteredImages = allImages.filter((img) => {
    if (!img.name) return false;
    const matchCategory = category === "All" || img.category === category;
    const matchSearch = img.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      {/* Navbar Hồng - Đã sửa chỉ còn 3 nút: Tạo, Favorites, Đăng xuất */}
      <div style={styles.navbar}>
        <div style={styles.logo}>PinkPin</div>
        <div style={styles.navItems}>
          <span style={styles.navButton} onClick={() => navigate("/create")}>
            Tạo
          </span>
          <span style={styles.navButton} onClick={() => navigate("/favorites")}>
            Favorites
          </span>
          {isAuthenticated && (
            <span style={styles.navButtonOutline} onClick={handleLogout}>
              Đăng xuất
            </span>
          )}
        </div>
      </div>

      {/* Nội dung chính */}
      <SearchBar />
      <CategoryFilter />
      <Gallery images={filteredImages} />
    </>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 40px",
    backgroundColor: "#fff",
    borderBottom: "1px solid #eee",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "24px",
    color: "#d6336c",
  },
  navItems: {
    display: "flex",
    gap: "12px",
  },
  navButton: {
    backgroundColor: "#ff69b4",
    border: "none",
    borderRadius: "999px",
    padding: "8px 16px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "14px",
    cursor: "pointer",
  },
  navButtonOutline: {
    backgroundColor: "transparent",
    border: "2px solid #d6336c",
    borderRadius: "999px",
    padding: "8px 16px",
    color: "#d6336c",
    fontWeight: "bold",
    fontSize: "14px",
    cursor: "pointer",
  },
};
