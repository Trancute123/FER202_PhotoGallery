// src/pages/settings/AccountSettings.jsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";


const AccountSettings = () => {
  const menuItems = [
    { label: "✏️ Chỉnh sửa Hồ sơ", path: "edit-profile" },
    { label: "🔐 Quản lý tài khoản", path: "account-manager" },
    { label: "👥 Danh sách follower", path: "followers" },
    { label: "🔁 Danh sách following", path: "following" },
    { label: "🚫 Tài khoản bị chặn", path: "blocked" },
  ];

  return (
    <div className="container-fluid py-4">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 border-end">
          <h5 className="mb-4 px-3">⚙️ Cài đặt tài khoản</h5>
          <ul className="list-group">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end
                className={({ isActive }) =>
                  `list-group-item list-group-item-action ${
                    isActive ? "active fw-bold" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </ul>
        </div>

        {/* Nội dung bên phải */}
        <div className="col-md-9 px-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
