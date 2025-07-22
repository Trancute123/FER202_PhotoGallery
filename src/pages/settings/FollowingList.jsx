import React, { useState } from "react";
import followingData from "../../data/following";
import { FaUserCheck, FaSearch, FaUserMinus } from "react-icons/fa";

export default function FollowingList() {
  const [following, setFollowing] = useState(followingData);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const filteredFollowing = following.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredFollowing.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filteredFollowing.slice(indexOfFirst, indexOfLast);

  const handleUnfollow = (id) => {
    const confirmUnfollow = window.confirm(
      "Are you sure you want to unfollow this user?"
    );
    if (confirmUnfollow) {
      setFollowing((prev) => prev.filter((user) => user.id !== id));
    }
  };

  const handlePageChange = (pageNum) => {
    if (pageNum > 0 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <div className="p-4">
      {/* Title */}
      <h3
        className="fw-bold mb-3 d-flex align-items-center gap-2"
        style={{ color: "#d6336c" }}
      >
        <FaUserCheck /> Following List
      </h3>

      {/* Search bar */}
      <div className="mb-4 d-flex align-items-center gap-2">
        <FaSearch style={{ color: "#d6336c" }} />
        <input
          type="text"
          className="form-control"
          placeholder="Search by name or username..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // reset to first page
          }}
          style={{ maxWidth: "400px" }}
        />
      </div>

      {/* Following list */}
      {currentItems.length === 0 ? (
        <p className="text-muted">No matching users found.</p>
      ) : (
        <div className="d-flex flex-column gap-3">
          {currentItems.map((user) => (
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
                  <small className="text-muted">@{user.username}</small>
                </div>
              </div>
              <button
                className="btn btn-sm d-flex align-items-center gap-1"
                style={{
                  border: "1px solid #d6336c",
                  color: "#d6336c",
                  fontWeight: "500",
                  backgroundColor: "white",
                }}
                onClick={() => handleUnfollow(user.id)}
              >
                <FaUserMinus size={14} /> Unfollow
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
              <button
                className="page-link"
                style={{ color: "#d6336c", borderColor: "#d6336c" }}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                ←
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  style={{
                    color: "#d6336c",
                    backgroundColor:
                      currentPage === i + 1 ? "#ffe0e9" : "white",
                    borderColor: "#d6336c",
                  }}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                style={{ color: "#d6336c", borderColor: "#d6336c" }}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                →
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
