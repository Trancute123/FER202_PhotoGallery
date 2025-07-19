import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfileCard = () => {
  const user = {
    name: "Tran Duc Trung",
    email: "trungtdde181059@fpt.edu.vn",
    bio: "🌟 Designer | 📸 Photographer ",
    avatar: "/images/puppy.jpg",
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body d-flex align-items-center">
        <img
          src={user.avatar}
          alt="Avatar"
          className="rounded-circle me-3"
          style={{ width: "80px", height: "80px", objectFit: "cover" }}
        />
        <div>
          <h5 className="card-title mb-1">{user.name}</h5>
          <p className="card-text mb-1 text-muted">{user.email}</p>
          <p className="card-text">{user.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;