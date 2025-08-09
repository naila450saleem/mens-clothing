import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import "./NavbarServices.css";
import logo1 from '../assets/logo1.png';

const NavbarServices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className="navbar-services">
      <div className="navbar-container">
        {/* Left Links */}
        <ul className="navbar-links left">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/features">Features</Link></li>
        </ul>

        {/* Logo Centered */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo1} alt="Reprizo Logo" />
          </Link>
        </div>

        {/* Right Links */}
        <ul className="navbar-links right">
          <li><Link to="/signin" className="signin-btn"><FiLogIn /> Sign In</Link></li>
          <li><Link to="/cart" className="cart-btn"><FaShoppingCart /> (0)</Link></li>
          <li>
            <button className="search-button" onClick={toggleSearch}>
              <FaSearch />
            </button>
          </li>
        </ul>

        {/* Hamburger for Mobile */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Search Bar (Toggle) */}
      {showSearch && (
        <div className="search-bar-wrapper">
          <input
            type="text"
            placeholder="Search here..."
            className="search-input"
          />
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/cart">Cart (0)</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarServices;
