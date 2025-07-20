// src/components/profile/BackToProfileButton.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function BackToProfileButton() {
  return (
    <Link to="/profile" className="btn btn-sm btn-outline-secondary mb-3">
      ← Quay lại Hồ sơ
    </Link>
  );
}
