import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import currentUser from "../utils/currentUser";
import Gallery from "../components/Gallery";
import Header from "../components/layout/Header";

import {
  FaGlobe,
  FaMapMarkerAlt,
  FaUserFriends,
  FaRetweet,
  FaCalendarAlt,
} from "react-icons/fa";

export default function ProfilePage() {
  const userImages = useSelector((state) => state.favorite);

  return (
    <>
      <Header />

      <div
        className="container py-5"
        style={{ background: "linear-gradient(to bottom, #ffe0ec, #fce4ec)" }}
      >
        <div className="text-center mb-5">
          <img
            src={currentUser.avatar}
            alt="Avatar"
            className="rounded-circle shadow mb-3"
            style={{
              width: "160px",
              height: "160px",
              objectFit: "cover",
              border: "5px solid white",
            }}
          />
          <h2 className="fw-bold mb-1">{currentUser.name}</h2>
          <p className="text-muted">@{currentUser.username}</p>
          <span className="me-3">
            <FaUserFriends className="me-1 text-secondary" /> {currentUser.followers} followers
          </span>
          <span>
            <FaRetweet className="me-1 text-secondary" /> {currentUser.following} following
          </span>
          <p className="mt-3">{currentUser.bio}</p>

          <div className="d-flex flex-column align-items-center gap-2 mt-2 text-dark fs-6">
            <span>
              <FaGlobe className="me-1 text-secondary" />
              <a
                href={currentUser.website}
                className="text-dark"
                target="_blank"
                rel="noreferrer"
              >
                <strong>{currentUser.website}</strong>
              </a>
            </span>
            <span>
              <FaMapMarkerAlt className="me-1 text-secondary" /> {currentUser.location}
            </span>
            <span>
              <FaCalendarAlt className="me-1 text-secondary" /> {currentUser.joinDate}
            </span>
          </div>

          <Link to="/settings" className="btn btn-outline-dark mt-4">
            ⚙️ Cài đặt tài khoản
          </Link>
        </div>

        <div className="container">
          <h3 className="mb-4 text-center">📸 Ảnh Đã Lưu</h3>
          {userImages.length === 0 ? (
            <p className="text-muted text-center">Chưa có ảnh nào được lưu.</p>
          ) : (
            <Gallery images={userImages} />
          )}
        </div>
      </div>
    </>
  );
}
