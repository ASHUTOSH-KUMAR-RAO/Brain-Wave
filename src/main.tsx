import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      {/*  BrowserRouter browser history API ko use karta hai - RELOAD SE BACHNE
      ke liye! */}
      <App />
    </Router>
  </StrictMode>
);
