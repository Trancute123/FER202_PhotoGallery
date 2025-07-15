// src/pages/HomePage.jsx
import React from "react";
import Gallery from "../components/Gallery";
import images from "../data/images";

const HomePage = () => (
  <div>
    <h1>📸 Photo Gallery</h1>
    <Gallery images={images} />

    {/* --- BONUS: nếu muốn thêm ảnh random demo ở dưới --- */}
    {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-5">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div key={idx} className="col">
          <div className="card h-100">
            <img
              src={`https://source.unsplash.com/random/300x200?sig=${idx}`}
              className="card-img-top"
              alt="Gallery"
            />
            <div className="card-body">
              <h5 className="card-title">Demo Photo #{idx + 1}</h5>
              <p className="card-text">Random image from Unsplash</p>
            </div>
          </div>
        </div>
      ))}
    </div> */}
  </div>
);

export default HomePage;
