import React from "react";
import { Link, Outlet } from "react-router-dom"; // <- QUAN TRỌNG
import { FaSearch } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const MainLayout = () => (
  <div className="container-fluid p-0">
    <header className="bg-light border-bottom shadow-sm">
      <div className="d-flex align-items-center justify-content-between px-3" style={{ height: '80px' }}>
        <Link to="/home" className="d-flex align-items-center text-decoration-none text-dark">
          <img
            src="https://static.topcv.vn/company_logos/DFtAiouYgEptwb56ISZeWgbcXgmxnLfm_1650885574____64525bcbe563d4a7599cc12cc508db75.png"
            alt="F88 Logo"
            style={{
              maxHeight: '48px',  // 👈 Giới hạn chiều cao tối đa
              width: 'auto',
              objectFit: 'contain'
            }}
          />

          <h1 className="h4 ms-2">Photo Gallery</h1>
        </Link>

        <div className="d-flex gap-2 align-items-center">
          <div className="input-group" style={{ maxWidth: "300px" }}>
            <input type="text" className="form-control" placeholder="Search photos..." />
            <button className="btn btn-outline-secondary"><FaSearch /></button>
          </div>
          <Link to="/favorites" className="btn btn-outline-secondary">Favorites</Link>
        </div>
      </div>
    </header>

    <main className="container py-4">
      <Outlet /> {/* 👈 Thay vì children */}
    </main>
  </div>
);

export default MainLayout;
