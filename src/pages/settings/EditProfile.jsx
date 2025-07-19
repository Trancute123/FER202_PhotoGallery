// src/pages/settings/EditProfile.jsx
import React, { useState } from "react";
import currentUser from "../../utils/currentUser";
import BackToProfileButton from "../../components/profile/BackToProfileButton";

export default function EditProfile() {
  const [formData, setFormData] = useState({
    name: currentUser.name,
    username: currentUser.username,
    bio: currentUser.bio,
    website: currentUser.website,
    location: currentUser.location,
  });

  const handleSave = (e) => {
    e.preventDefault();
    Object.assign(currentUser, formData);
    alert("✅ Hồ sơ đã được cập nhật!");
  };

  return (
    <div>
      <BackToProfileButton />
      <h4 className="mb-3">✏️ Chỉnh sửa Hồ sơ</h4>
      <form onSubmit={handleSave}>
        <div className="mb-3">
          <label className="form-label">Tên hiển thị</label>
          <input
            type="text"
            className="form-control"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tên người dùng</label>
          <input
            type="text"
            className="form-control"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tiểu sử</label>
          <textarea
            className="form-control"
            value={formData.bio}
            rows="2"
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Website</label>
          <input
            type="text"
            className="form-control"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Địa điểm</label>
          <input
            type="text"
            className="form-control"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">Lưu thay đổi</button>
      </form>
    </div>
  );
}
