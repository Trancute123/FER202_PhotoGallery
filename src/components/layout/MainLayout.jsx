// src/components/layout/MainLayout.jsx
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from "react-icons/fa";

const MainLayout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const menuItemStyle = {
    transition: 'background-color 0.2s',
  };

  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = '#f0f0f0'; // Màu xám sáng hơn
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = '';
  };

  return (
    <div className="container-fluid p-0">
      <header className="bg-light border-bottom shadow-sm">
        <div
          className="d-flex align-items-center justify-content-between w-100 m-0 px-0"
          style={{ height: '80px' }}
        >
          <div className="d-flex align-items-center ps-0" style={{ height: '100%' }}>
            <Link to="/home" className="d-flex align-items-center text-decoration-none text-dark" style={{ height: '100%' }}>
              <img
                src="https://static.topcv.vn/company_logos/DFtAiouYgEptwb56ISZeWgbcXgmxnLfm_1650885574____64525bcbe563d4a7599cc12cc508db75.png"
                alt="F88 Logo"
                style={{ height: '100%', width: 'auto', objectFit: 'contain' }}
              />
              <h1 className="h4 m-0 ms-2">Photo Gallery</h1>
            </Link>
          </div>
          <div className="d-flex align-items-center gap-3 flex-grow-1 justify-content-end pe-3">
            <div className="input-group me-3" style={{ width: '500px' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search photos..."
              />
              <button className="btn" type="button" style={{ backgroundColor: '#007A3D', color: 'white' }}>
                <FaSearch />
              </button>
            </div>
            <div className="position-relative">
              <img
                src="/images/avatar/OIP.webp"
                alt="User Avatar"
                className="rounded-circle"
                style={{ width: '40px', height: '40px', objectFit: 'cover', cursor: 'pointer', border: '1px solid #ccc' }}
                onClick={toggleMenu}
              />
              {showMenu && (
                <div className="position-absolute end-0 mt-2 bg-white border rounded shadow p-3 user-menu" style={{ minWidth: '200px', zIndex: 10 }}>
                  <button
                    className="btn btn-light w-100 text-start mb-2 menu-item"
                    style={menuItemStyle}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    View Profile
                  </button>
                  <Link
                    to="/favorites"
                    className="btn btn-light w-100 text-start mb-2 menu-item"
                    style={menuItemStyle}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    My Favorites
                  </Link>
                  <button
                    className="btn btn-light w-100 text-start menu-item"
                    style={menuItemStyle}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <main className="container py-4">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
