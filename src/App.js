import React from "react";
import images from "./data/images";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <h1>📸 Photo Gallery</h1>
      <Gallery images={images} />
    </div>
  );
}

export default App;
