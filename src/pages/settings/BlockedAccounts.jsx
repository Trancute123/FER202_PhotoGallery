import React from "react";
import BackToProfileButton from "../../components/profile/BackToProfileButton";

const blockedUsers = [
  { id: 6, name: "Nguyễn Đình", avatar: "https://i.pravatar.cc/150?img=8" },
  { id: 7, name: "Phạm Quang", avatar: "https://i.pravatar.cc/150?img=10" },
  { id: 8, name: "Trần Mai", avatar: "https://i.pravatar.cc/150?img=12" },
];

export default function BlockedAccounts() {
  const handleUnblock = (user) => {
    alert(`✅ Đã bỏ chặn ${user.name} (giả lập)`);
    console.log("Bỏ chặn:", user);
  };

  return (
    <div>
      <BackToProfileButton />
      <h4 className="mb-4">🚫 Tài khoản bị chặn</h4>
      {blockedUsers.length === 0 ? (
        <p className="text-muted">Không có tài khoản nào bị chặn.</p>
      ) : (
        blockedUsers.map((user) => (
          <div
            key={user.id}
            className="d-flex align-items-center justify-content-between mb-3 p-2 border rounded shadow-sm"
          >
            <div className="d-flex align-items-center">
              <img
                src={user.avatar}
                alt={user.name}
                className="rounded-circle me-3"
                style={{ width: 50, height: 50, objectFit: "cover" }}
              />
              <span>{user.name}</span>
            </div>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => handleUnblock(user)}
            >
              Bỏ chặn
            </button>
          </div>
        ))
      )}
    </div>
  );
}
