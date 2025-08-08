import React, { useState } from "react";
import { FaExchangeAlt, FaHeart, FaShoppingCart } from "react-icons/fa";
import "./FloatingIcons.css";

const FloatingIcons = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="floating-icons">
      {/* Buy Theme */}
      <div
        className="icon-wrapper"
        onMouseEnter={() => setHoveredButton("buy")}
        onMouseLeave={() => setHoveredButton(null)}
      >
        {hoveredButton === "buy" && (
          <button className="floating-button">Buy Theme</button>
        )}
        <div className="icon-box">
          <FaExchangeAlt />
        </div>
      </div>

      {/* Our Bestsellers */}
      <div
        className="icon-wrapper"
        onMouseEnter={() => setHoveredButton("bestsellers")}
        onMouseLeave={() => setHoveredButton(null)}
      >
        {hoveredButton === "bestsellers" && (
          <button className="floating-button">Our Bestsellers</button>
        )}
        <div className="icon-box">
          <FaHeart />
        </div>
      </div>

      {/* Hide Panel */}
      <div
        className="icon-wrapper"
        onMouseEnter={() => setHoveredButton("hide")}
        onMouseLeave={() => setHoveredButton(null)}
      >
        {hoveredButton === "hide" && (
          <button className="floating-button">Hide Panel</button>
        )}
        <div className="icon-box">
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default FloatingIcons;
