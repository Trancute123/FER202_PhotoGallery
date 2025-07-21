import React, { useState } from "react";
import { FaUserFriends, FaTrashAlt, FaSearch } from "react-icons/fa";
import followersData from "../../data/followers";

export default function FollowersList() {
  const [followers, setFollowers] = useState(followersData);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const followersPerPage = 6;

  const filteredFollowers = followers.filter((f) =>
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredFollowers.length / followersPerPage);
  const indexOfLast = currentPage * followersPerPage;
  const indexOfFirst = indexOfLast - followersPerPage;
  const currentFollowers = filteredFollowers.slice(indexOfFirst, indexOfLast);

  const handleRemove = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa follower này?")) {
      setFollowers((prev) => prev.filter((f) => f.id !== id));
    }
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-4">
      {/* Tiêu đề */}
      <h3 className="fw-bold text-primary mb-3 d-flex align-items-center gap-2">
        <FaUserFriends /> Danh sách Follower
      </h3>

      {/* Tìm kiếm */}
      <div className="mb-4 d-flex align-items-center gap-2">
        <FaSearch className="text-muted" />
        <input
          type="text"
          className="form-control"
          placeholder="Tìm kiếm theo tên hoặc username..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // reset về trang 1
          }}
          style={{ maxWidth: "400px" }}
        />
      </div>

      {/* Danh sách follower */}
      {currentFollowers.length === 0 ? (
        <p className="text-muted">Không tìm thấy follower nào.</p>
      ) : (
        <div className="d-flex flex-column gap-3">
          {currentFollowers.map((follower) => (
            <div
              key={follower.id}
              className="d-flex align-items-center justify-content-between p-3 rounded shadow-sm"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #eee",
              }}
            >
              <div className="d-flex align-items-center gap-3">
                <img
                  src={follower.avatar}
                  alt={follower.name}
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
                  <div className="fw-semibold">{follower.name}</div>
                  <small className="text-muted">@{follower.username}</small>
                </div>
              </div>
              <button
                className="btn btn-outline-danger btn-sm d-flex align-items-center gap-1"
                onClick={() => handleRemove(follower.id)}
              >
                <FaTrashAlt size={14} /> Xóa
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                ←
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
              >
                <button className="page-link" onClick={() => handlePageChange(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                →
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
