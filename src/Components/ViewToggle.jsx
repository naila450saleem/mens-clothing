import React, { useState } from "react";
import { FaTh, FaList } from "react-icons/fa";
import "./ViewToggle.css";

export default function ViewToggle({ onViewChange }) {
  const [activeView, setActiveView] = useState("grid");

  const handleViewChange = (view) => {
    setActiveView(view);
    if (onViewChange) {
      onViewChange(view);
    }
  };

  return (
    <div className="view-toggle">
      <button
        title="Grid View"
        onClick={() => handleViewChange("grid")}
        className={activeView === "grid" ? "toggle-btn active" : "toggle-btn"}
      >
        <FaTh className="icon" />
      </button>
      <button
        title="List View"
        onClick={() => handleViewChange("list")}
        className={activeView === "list" ? "toggle-btn active" : "toggle-btn"}
      >
        <FaList className="icon" />
      </button>
    </div>
  );
}
