import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import ImageModal from "./components/ImageModal";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import "../src/theme.css";
function App() {
  const theme = useSelector((state) => state.theme);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <Router>
      <AppRouter />
      <ImageModal />
    </Router>
  );
}

export default App;
