import React, { useState } from "react";
import currentUser from "../../utils/currentUser";
import {
  FaEnvelope,
  FaLock,
  FaBirthdayCake,
  FaVenusMars,
  FaGlobeAsia,
  FaLanguage,
  FaUserEdit,
} from "react-icons/fa";

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
    description: "No Shy, I Try",
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
    <div className="container py-5">
      {/* Tiêu đề chính */}
      <h2 className="mb-4 fw-bold text-primary d-flex align-items-center gap-2">
        <FaUserEdit />
        <span>Quản lý Tài khoản</span>
      </h2>

      <div className="bg-light p-3 rounded shadow-sm mb-4 d-flex align-items-center gap-3">
        <FaEnvelope className="text-secondary" />
        <span className="fw-semibold">Email:</span> {currentUser.email}
      </div>

      <div className="mb-4">
        <button
          className="btn btn-outline-dark d-flex align-items-center gap-2"
          onClick={() => setShowPasswordFields(!showPasswordFields)}
        >
          <FaLock />
          {showPasswordFields ? "Hủy đổi mật khẩu" : "Đổi mật khẩu"}
        </button>
      </div>

      {showPasswordFields && (
        <form onSubmit={handleSubmit} className="mb-5">
          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Mật khẩu hiện tại</label>
              <input
                type="password"
                className="form-control"
                value={form.currentPassword}
                onChange={(e) =>
                  setForm({ ...form, currentPassword: e.target.value })
                }
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Mật khẩu mới</label>
              <input
                type="password"
                className="form-control"
                value={form.newPassword}
                onChange={(e) =>
                  setForm({ ...form, newPassword: e.target.value })
                }
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Xác nhận mật khẩu mới</label>
              <input
                type="password"
                className="form-control"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Cập nhật mật khẩu
          </button>
        </form>
      )}

      <h4 className="mb-3 text-info d-flex align-items-center gap-2">
        <FaUserEdit /> Thông tin cá nhân
      </h4>

      <form>
        <div className="row g-3">
          <div className="col-md-4">
            {/* Ngày sinh */}
            <label className="form-label d-flex align-items-center gap-2">
              <FaBirthdayCake className="text-secondary" />
              <span>Ngày sinh</span>
            </label>
            <input
              type="date"
              className="form-control"
              name="birthDate"
              value={profileInfo.birthDate}
              onChange={handleProfileChange}
            />
          </div>

          <div className="col-md-8">
            {/* Giới tính */}
            <label className="form-label d-flex align-items-center gap-2">
              <FaVenusMars className="text-secondary" />
              <span>Giới tính</span>
            </label>
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

          <div className="col-12">
            <label className="form-label">Giới thiệu</label>
            <textarea
              className="form-control"
              name="description"
              rows={3}
              maxLength={500}
              value={profileInfo.description}
              onChange={handleProfileChange}
            />
            <small className="text-muted">
              {profileInfo.description.length}/500 ký tự
            </small>
          </div>

          <div className="col-md-6">
            {/* Quốc gia */}
            <label className="form-label d-flex align-items-center gap-2">
              <FaGlobeAsia className="text-secondary" />
              <span>Quốc gia / Khu vực</span>
            </label>
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

          <div className="col-md-6">
            {/* Ngôn ngữ */}
            <label className="form-label d-flex align-items-center gap-2">
              <FaLanguage className="text-secondary" />
              <span>Ngôn ngữ</span>
            </label>
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
        </div>

        <div className="text-end mt-4">
          <button type="button" className="btn btn-success px-4">
            💾 Lưu thay đổi
          </button>
        </div>
      </form>
    </div>
  );
}
