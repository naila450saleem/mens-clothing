import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  <li><Link to="/printings">Printings</Link></li>
  <li><Link to="/embroideries">Embroideries</Link></li>
  <li><Link to="/labels-tags">Labels/Tags</Link></li>
  <li><Link to="/leather-patches">Leather Patches</Link></li>
  <li><Link to="/pvc-rubber-logos">PVC & Rubber Logos</Link></li>
  <li><Link to="/tag-cards">Tag Cards</Link></li>
  <li><Link to="/poly-bags">Poly Bags</Link></li>
  <li><Link to="/fabrics">Fabrics</Link></li>
</ul>

    </nav>
  );
};

export default TopNavbar;
