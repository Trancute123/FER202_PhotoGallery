import React from "react";

const HomePage = () => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      {Array.from({ length: 12 }).map((_, idx) => (
        <div key={idx} className="col">
          <div className="card h-100">
            <img
              src={`https://source.unsplash.com/random/300x200?sig=${idx}`}
              className="card-img-top"
              alt="Gallery"
            />
            <div className="card-body">
              <h5 className="card-title">Photo #{idx + 1}</h5>
              <p className="card-text">Some description for this photo.</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;