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
    country: "Vietnam",
    language: "Vietnamese",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.newPassword !== form.confirmPassword) {
      alert("❌ Confirm password does not match.");
    } else {
      alert("✅ Password updated successfully (simulated).");
    }
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container py-5">
      {/* Main Title */}
      <h2
        className="mb-4 fw-bold d-flex align-items-center gap-2"
        style={{ color: "#d6336c" }}
      >
        <FaUserEdit style={{ color: "#d6336c" }} />
        <span>Account Management</span>
      </h2>

      {/* Email Display */}
      <div className="bg-light p-3 rounded shadow-sm mb-4 d-flex align-items-center gap-3">
        <FaEnvelope style={{ color: "#d6336c" }} />
        <span className="fw-semibold">Email:</span> {currentUser.email}
      </div>

      {/* Toggle Password Change */}
      <div className="mb-4">
        <button
          className="btn d-flex align-items-center gap-2"
          style={{
            border: "2px solid #d6336c",
            color: "#d6336c",
            borderRadius: "999px",
            fontWeight: "bold",
            padding: "6px 14px",
          }}
          onClick={() => setShowPasswordFields(!showPasswordFields)}
        >
          <FaLock />
          {showPasswordFields ? "Cancel Password Change" : "Change Password"}
        </button>
      </div>

      {/* Password Form */}
      {showPasswordFields && (
        <form onSubmit={handleSubmit} className="mb-5">
          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Current Password</label>
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
              <label className="form-label">New Password</label>
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
              <label className="form-label">Confirm New Password</label>
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
          <button
            type="submit"
            className="btn mt-3"
            style={{
              backgroundColor: "#ff8fb2",
              color: "white",
              fontWeight: "600",
            }}
          >
            Update Password
          </button>
        </form>
      )}

      {/* Profile Info Title */}
      <h4
        className="mb-3 d-flex align-items-center gap-2"
        style={{ color: "#d6336c" }}
      >
        <FaUserEdit style={{ color: "#d6336c" }} /> Personal Information
      </h4>

      {/* Profile Info Form */}
      <form>
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label d-flex align-items-center gap-2">
              <FaBirthdayCake style={{ color: "#d6336c" }} />
              <span>Date of Birth</span>
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
            <label className="form-label d-flex align-items-center gap-2">
              <FaVenusMars style={{ color: "#d6336c" }} />
              <span>Gender</span>
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
              <label className="form-check-label">Male</label>
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
              <label className="form-check-label">Female</label>
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
              <label className="form-check-label">Other</label>
            </div>
          </div>

          <div className="col-12">
            <label className="form-label">About Me</label>
            <textarea
              className="form-control"
              name="description"
              rows={3}
              maxLength={500}
              value={profileInfo.description}
              onChange={handleProfileChange}
            />
            <small className="text-muted">
              {profileInfo.description.length}/500 characters
            </small>
          </div>

          <div className="col-md-6">
            <label className="form-label d-flex align-items-center gap-2">
              <FaGlobeAsia style={{ color: "#d6336c" }} />
              <span>Country / Region</span>
            </label>
            <select
              className="form-select"
              name="country"
              value={profileInfo.country}
              onChange={handleProfileChange}
            >
              <option>Vietnam</option>
              <option>USA</option>
              <option>Japan</option>
              <option>Korea</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label d-flex align-items-center gap-2">
              <FaLanguage style={{ color: "#d6336c" }} />
              <span>Language</span>
            </label>
            <select
              className="form-select"
              name="language"
              value={profileInfo.language}
              onChange={handleProfileChange}
            >
              <option>Vietnamese</option>
              <option>English</option>
              <option>日本語</option>
              <option>한국어</option>
            </select>
          </div>
        </div>

        <div className="text-end mt-4">
          <button
            type="button"
            style={{
              backgroundColor: "#d6336c",
              color: "white",
              border: "none",
              padding: "10px 24px",
              borderRadius: "12px",
              fontWeight: "600",
              boxShadow: "0 4px 8px rgba(214, 51, 108, 0.2)",
              transition: "all 0.3s ease",
            }}
          >
            💾 Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
