import React, { useState } from "react";
import { FaBan, FaUnlock } from "react-icons/fa";

const initialBlockedUsers = [
  { id: 6, name: "Nguyễn Đình", avatar: "https://i.pravatar.cc/150?img=8" },
  { id: 7, name: "Phạm Quang", avatar: "https://i.pravatar.cc/150?img=10" },
  { id: 8, name: "Trần Mai", avatar: "https://i.pravatar.cc/150?img=12" },
];

export default function BlockedAccounts() {
  const [blockedUsers, setBlockedUsers] = useState(initialBlockedUsers);

  const handleUnblock = (user) => {
    const confirmUnblock = window.confirm(`Bạn có chắc muốn bỏ chặn ${user.name}?`);
    if (confirmUnblock) {
      setBlockedUsers((prev) => prev.filter((u) => u.id !== user.id));
      alert(`✅ Đã bỏ chặn ${user.name} (giả lập)`);
    }
  };

  return (
    <div className="p-4">
      <h3 className="fw-bold text-danger mb-3 d-flex align-items-center gap-2">
        <FaBan /> Tài khoản bị chặn
      </h3>

      {blockedUsers.length === 0 ? (
        <p className="text-muted">Không có tài khoản nào bị chặn.</p>
      ) : (
        <div className="d-flex flex-column gap-3">
          {blockedUsers.map((user) => (
            <div
              key={user.id}
              className="d-flex align-items-center justify-content-between p-3 rounded shadow-sm"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #eee",
              }}
            >
              <div className="d-flex align-items-center gap-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="rounded-circle"
                  style={{
                    width: "52px",
                    height: "52px",
                    objectFit: "cover",
                    border: "2px solid #ccc",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                />
                <div>
                  <div className="fw-semibold">{user.name}</div>
                </div>
              </div>
              <button
                className="btn btn-outline-danger btn-sm d-flex align-items-center gap-1"
                onClick={() => handleUnblock(user)}
              >
                <FaUnlock size={14} /> Bỏ chặn
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
