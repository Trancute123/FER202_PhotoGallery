import React, { useState } from "react";
import followingData from "../../data/following";
import BackToProfileButton from "../../components/profile/BackToProfileButton";

export default function FollowingList() {
  const [following, setFollowing] = useState(followingData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(following.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = following.slice(indexOfFirst, indexOfLast);

  const handleUnfollow = (id) => {
    const confirmUnfollow = window.confirm("Bạn có chắc chắn muốn bỏ theo dõi người này?");
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
    <div>
      <BackToProfileButton />
      <h4 className="mb-4">🔁 Danh sách Following</h4>

      {currentItems.length === 0 ? (
        <p className="text-muted">Không có người đang theo dõi ở trang này.</p>
      ) : (
        currentItems.map((user) => (
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
              <div>
                <h6 className="mb-0">{user.name}</h6>
                <small className="text-muted">@{user.username}</small>
              </div>
            </div>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => handleUnfollow(user.id)}
            >
              Bỏ theo dõi
            </button>
          </div>
        ))
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav>
          <ul className="pagination justify-content-center mt-4">
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
