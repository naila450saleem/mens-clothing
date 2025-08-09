import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo1.png';
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { NavLink } from 'react-router-dom'; // ✅ Use NavLink for routing

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Blog", to: "/blog" },
    { name: "Shop", to: "/shop" },
    { name: "Services", to: "/services" },
    { name: "FAQs", to: "/faqs" },
    { name: "Privacy", to: "/privacy" },
    { name: "Contact", to: "/contact" },
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
          <NavLink to="/" className="logo">
            <img src={logo} alt="Logo" />
          </NavLink>



          <nav className="nav-links">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {link.name}
              </NavLink>
            ))}

            <div className="dropdown">
              <span onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>
                Categories ▾
              </span>
              {isSubMenuOpen && (
                <div className="dropdown-menu">
                  {categories.map(cat => (
                    <a key={cat} href="#">{cat}</a> // Category pages not routed yet
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>

       {/* Right icons only show if mobile menu is closed */}
{!isMenuOpen && (
  <div className="right-icons">
    <Search className="icon-btn" onClick={() => setShowSearchBar(!showSearchBar)} />
    <ShoppingCart className="icon-btn" />
    <Menu className="menu-btn" onClick={() => setIsMenuOpen(true)} />
  </div>
)}

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
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {link.name}
              </NavLink>
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
