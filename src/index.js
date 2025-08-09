import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // ✅ Use HashRouter
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter> {/* ✅ Works on GitHub Pages and Localhost */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
