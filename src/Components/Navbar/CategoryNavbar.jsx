import React, { useState } from "react";
import "./CategoryNavbar.css";

const CategoryNavbar = () => {
  const navItems = [
    "Custom Team Wear",
    "Fitness Wear",
    "Ski & Snow Wear",
    "Horse Racing",
    "Street Wears",
    "Shorts",
    "Jackets",
    "Head Wear & Accessories",
  ];

  const [activeIndex, setActiveIndex] = useState(0); // first item active by default

  return (
    <nav className="custom-navbar">
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <button
              className={activeIndex === index ? "active" : ""}
              onClick={() => setActiveIndex(index)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryNavbar;
