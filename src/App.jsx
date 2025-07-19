import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import ImageModal from "./components/ImageModal";

function App() {
  return (
    <Router>
      <AppRouter />
      <ImageModal />
    </Router>
  );
}

export default App;
