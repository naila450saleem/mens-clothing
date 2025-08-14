import React, { useState, useEffect } from "react";
import "./TopNavbar.css";

const TopNavbar = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHidden(true); // hide on slight scroll
      } else {
        setHidden(false); // show when at top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`top-navbar ${hidden ? "hidden" : ""}`}>
      <ul>
        <li><a href="#">Printings</a></li>
        <li><a href="#">Embroideries</a></li>
        <li><a href="#">Labels/Tags</a></li>
        <li><a href="#">Leather Patches</a></li>
        <li><a href="#">PVC & Rubber Logos</a></li>
        <li><a href="#">Tag Cards</a></li>
        <li><a href="#">Poly Bags</a></li>
        <li><a href="#">Fabrics</a></li>
      </ul>
    </nav>
  );
};

export default TopNavbar;
