import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import ImageModal from "./components/ImageModal"; // ✅ thêm dòng này

function App() {
  return (
    <Router>
      <AppRouter />
      <ImageModal /> {/* ✅ thêm modal vào đây để luôn hiển thị */}
    </Router>
  );
}

export default App;
