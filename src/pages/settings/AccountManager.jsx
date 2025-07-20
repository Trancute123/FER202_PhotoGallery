import React, { useState } from "react";
import currentUser from "../../utils/currentUser";
import BackToProfileButton from "../../components/profile/BackToProfileButton";

export default function AccountManager() {
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [profileInfo, setProfileInfo] = useState({
    birthDate: "2001-11-11",
    gender: "other",
    description: "không có",
    country: "Việt Nam",
    language: "Tiếng Việt",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.newPassword !== form.confirmPassword) {
      alert("❌ Mật khẩu xác nhận không khớp.");
    } else {
      alert("✅ Đổi mật khẩu thành công (giả lập).");
    }
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <BackToProfileButton />
      <h4 className="mb-4">🔐 Quản lý Tài khoản</h4>

      <div className="mb-4">
        <strong>Email:</strong> {currentUser.email}
      </div>

      <div className="mb-3">
        <button
          className="btn btn-outline-dark"
          onClick={() => setShowPasswordFields(!showPasswordFields)}
        >
          {showPasswordFields ? "❌ Hủy" : "Đổi mật khẩu"}
        </button>
      </div>

      {showPasswordFields && (
        <form onSubmit={handleSubmit} className="mb-5">
          <div className="mb-3">
            <label>Mật khẩu hiện tại</label>
            <input
              type="password"
              className="form-control"
              value={form.currentPassword}
              onChange={(e) => setForm({ ...form, currentPassword: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label>Mật khẩu mới</label>
            <input
              type="password"
              className="form-control"
              value={form.newPassword}
              onChange={(e) => setForm({ ...form, newPassword: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label>Xác nhận mật khẩu mới</label>
            <input
              type="password"
              className="form-control"
              value={form.confirmPassword}
              onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Cập nhật mật khẩu
          </button>
        </form>
      )}

      <h5 className="mb-3">📋 Thông tin cá nhân</h5>
      <form>
        <div className="mb-3">
          <label className="form-label">Ngày sinh</label>
          <input
            type="date"
            className="form-control"
            name="birthDate"
            value={profileInfo.birthDate}
            onChange={handleProfileChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label d-block">Giới tính</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="male"
              checked={profileInfo.gender === "male"}
              onChange={handleProfileChange}
            />
            <label className="form-check-label">Nam</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="female"
              checked={profileInfo.gender === "female"}
              onChange={handleProfileChange}
            />
            <label className="form-check-label">Nữ</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="other"
              checked={profileInfo.gender === "other"}
              onChange={handleProfileChange}
            />
            <label className="form-check-label">Khác</label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Giới thiệu</label>
          <textarea
            className="form-control"
            name="description"
            rows={2}
            maxLength={500}
            value={profileInfo.description}
            onChange={handleProfileChange}
          />
          <small className="text-muted">{profileInfo.description.length}/500</small>
        </div>

        <div className="mb-3">
          <label className="form-label">Quốc gia/Khu vực</label>
          <select
            className="form-select"
            name="country"
            value={profileInfo.country}
            onChange={handleProfileChange}
          >
            <option>Việt Nam</option>
            <option>Hoa Kỳ</option>
            <option>Nhật Bản</option>
            <option>Hàn Quốc</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Ngôn ngữ</label>
          <select
            className="form-select"
            name="language"
            value={profileInfo.language}
            onChange={handleProfileChange}
          >
            <option>Tiếng Việt</option>
            <option>English</option>
            <option>日本語</option>
            <option>한국어</option>
          </select>
        </div>

        <button type="button" className="btn btn-success">
          Lưu thông tin cá nhân
        </button>
      </form>
    </div>
  );
}
