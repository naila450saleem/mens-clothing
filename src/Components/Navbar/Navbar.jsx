import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo1.png';
import { Search, ShoppingCart, Menu, X,  } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const navLinks = [
    { name: "Home", to: "#" },
    { name: "About", to: "#" },
    { name: "Blog", to: "#" },
    { name: "Shop", to: "#" },
    { name: "Services", to: "#" },
    { name: "FAQs", to: "#" },
    { name: "Privacy", to: "#" },
    { name: "Contact", to: "#" },
  ];

  const categories = ["Men", "Women", "Kids", "Accessories"];

  return (
    <>
      {/* Top Strip */}
      <div className="top-strip">
        FREE SHIPPING ON ORDERS OVER $50 | CALL US: 1-800-CORE-WEAR
      </div>

      {/* Navbar */}
      <header className="navbar">
        <div className="logo-links">
          <a href="#" className="logo">
            <img src={logo} alt="Logo" />
          </a>

          <nav className="nav-links">
            {navLinks.map(link => (
              <a key={link.name} href={link.to}>{link.name}</a>
            ))}
            <div className="dropdown">
              <span onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>
                Categories ▾
              </span>
              {isSubMenuOpen && (
                <div className="dropdown-menu">
                  {categories.map(cat => (
                    <a key={cat} href="#">{cat}</a>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className="right-icons">
          <Search className="icon-btn" onClick={() => setShowSearchBar(!showSearchBar)} />
          <ShoppingCart className="icon-btn" />
          <Menu className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </header>

      {/* Search Bar */}
      {showSearchBar && (
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      )}

     



      

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <X className="close-btn" onClick={() => setIsMenuOpen(false)} />
          <nav className="mobile-nav">
            {navLinks.map(link => (
              <a key={link.name} href={link.to} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <div className="mobile-dropdown">
              <div onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>Categories ▾</div>
              {isSubMenuOpen && (
                <div className="mobile-dropdown-menu">
                  {categories.map(cat => (
                    <a key={cat} href="#" onClick={() => setIsMenuOpen(false)}>{cat}</a>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
