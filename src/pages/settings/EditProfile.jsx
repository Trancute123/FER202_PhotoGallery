import React, { useState, useRef } from "react";
import { FaCamera } from "react-icons/fa";
import currentUser from "../../utils/currentUser";

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
    alert("✅ Profile updated successfully!");
  };

  const fileInputRef = useRef();

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        currentUser.avatar = reader.result;
        setFormData((prev) => ({ ...prev }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="animate__animated animate__fadeInUp"
      style={{
        padding: "40px 60px",
        maxWidth: "960px",
        margin: "0 auto",
      }}
    >
      <h3
        style={{
          fontWeight: "700",
          color: "#ff8fb2",
          marginBottom: "24px",
          textAlign: "center",
          letterSpacing: "0.3px",
        }}
      >
        ✏️ Edit Profile
      </h3>

      {/* Avatar + Change button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          marginBottom: "30px",
        }}
      >
        <div style={{ position: "relative" }}>
          <img
            src={currentUser.avatar}
            alt="Avatar"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          />

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleAvatarChange}
          />

          <button
            title="Change avatar"
            onClick={() => fileInputRef.current.click()}
            style={{
              position: "absolute",
              bottom: "-8px",
              right: "-8px",
              background: "#333",
              border: "none",
              color: "#fff",
              borderRadius: "50%",
              padding: "6px 8px",
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            }}
          >
            <FaCamera />
          </button>
        </div>
      </div>

      {/* Form fields */}
      <form onSubmit={handleSave}>
        <div className="mb-3">
          <label className="form-label fw-semibold">Display Name</label>
          <input
            type="text"
            className="form-control"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Username</label>
          <input
            type="text"
            className="form-control"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Bio</label>
          <textarea
            className="form-control"
            rows={2}
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Website</label>
          <input
            type="text"
            className="form-control"
            value={formData.website}
            onChange={(e) =>
              setFormData({ ...formData, website: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label className="form-label fw-semibold">Location</label>
          <input
            type="text"
            className="form-control"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />
        </div>

        <div style={{ textAlign: "right" }}>
          <button type="submit" className="btn btn-success px-4">
            💾 Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
