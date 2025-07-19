import React, { useState } from "react";
import followersData from "../../data/followers";
import BackToProfileButton from "../../components/profile/BackToProfileButton";

const FollowersList = () => {
  const [followers, setFollowers] = useState(followersData);
  const [currentPage, setCurrentPage] = useState(1);
  const followersPerPage = 6;

  const totalPages = Math.ceil(followers.length / followersPerPage);
  const indexOfLast = currentPage * followersPerPage;
  const indexOfFirst = indexOfLast - followersPerPage;
  const currentFollowers = followers.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (pageNum) => {
    if (pageNum > 0 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  const handleRemove = (id) => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa follower này?");
    if (confirmDelete) {
      setFollowers((prev) => prev.filter((f) => f.id !== id));
    }
  };

  return (
    <div>
      <BackToProfileButton />
      <h4 className="mb-4">👥 Danh sách Follower</h4>

      {currentFollowers.length === 0 ? (
        <p className="text-muted">Không còn follower nào ở trang này.</p>
      ) : (
        currentFollowers.map((follower) => (
          <div
            key={follower.id}
            className="d-flex align-items-center justify-content-between mb-3 p-2 border rounded shadow-sm"
          >
            <div className="d-flex align-items-center">
              <img
                src={follower.avatar}
                alt={follower.name}
                className="rounded-circle me-3"
                style={{ width: 50, height: 50, objectFit: "cover" }}
              />
              <div>
                <h6 className="mb-0">{follower.name}</h6>
                {follower.username && (
                  <small className="text-muted">@{follower.username}</small>
                )}
              </div>
            </div>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => handleRemove(follower.id)}
            >
              Xóa
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
};

export default FollowersList;
