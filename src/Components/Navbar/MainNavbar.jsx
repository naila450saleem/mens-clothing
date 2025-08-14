import React, { useState, useEffect } from "react";
import "./MainNavbar.css";
import logo from "../../assets/logo.png";
import { Search, Menu, X, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showCompactNav, setShowCompactNav] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    {
      name: "Our Categories",
      to: "/categories",
      subLinks: [
        { name: "Sky & Snow Wear", to: "/categories/sky-snow-wear" },
        { name: "Street Wears", to: "/categories/street-wears" },
        { name: "Custom Team Wears", to: "/categories/custom-team-wears" },
        { name: "Fitness Wear", to: "/categories/fitness-wear" },
        { name: "Head Wear & Accessories", to: "/categories/head-wear-accessories" },
        { name: "Bags", to: "/categories/bags" }
      ]
    },
    { name: "Sitemap", to: "/sitemap" },
    { name: "Privacy Policy", to: "/privacy" },
    { name: "FAQs", to: "/faqs" },
    { name: "Customer Services", to: "/services" },
    { name: "Catalogue", to: "/catalogue" },
    { name: "Customization", to: "/customization" },
    { name: "Contact Us", to: "/contact" },
  ];

  const renderNavLinks = (links) =>
    links.map(link => (
      <div key={link.name} className="nav-item">
        <NavLink
          to={link.to}
          className={({ isActive }) =>
            `${link.subLinks ? "has-submenu" : ""} ${
              link.name !== "Home" && isActive ? "active" : ""
            }`
          }
        >
          {link.name}
        </NavLink>
        {link.subLinks && (
          <ul className="dropdown-menu">
            {link.subLinks.map(sub => (
              <li key={sub.name}>
                <NavLink to={sub.to} className="submenu-link">
                  {sub.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    ));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setShowCompactNav(true);
      } else {
        setShowCompactNav(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categoryLinks = navLinks.find(link => link.name === "Our Categories")?.subLinks || [];
  const mobileMainLinks = navLinks.filter(link => !link.subLinks); // no categories in mobile menu

  return (
    <div className="main-navbar-container">
      {/* Compact nav for scroll */}
      {showCompactNav && (
        <div className="compact-navbar">
          {categoryLinks.map(sub => (
            <NavLink key={sub.name} to={sub.to} className="submenu-link">
              {sub.name}
            </NavLink>
          ))}
        </div>
      )}

      {/* Full navbar */}
      {!showCompactNav && (
        <div className="unified-navbar">
          <div className="unified-navbar-top">
            <div className="unified-left">
              <a href="mailto:coresportswears@gmail.com" className="email-link">
                <Mail size={16} style={{ marginRight: "6px", verticalAlign: "middle" }} />
                coresportswears@gmail.com
              </a>
            </div>

            <div className="unified-center">
              <NavLink to="/" className="logo">
                <img src={logo} alt="Logo" />
              </NavLink>
            </div>

            <div className="unified-right">
              <button
                className="search-toggle-btn"
                onClick={() => setShowSearchBar(prev => !prev)}
                aria-label="Toggle Search"
              >
                <Search />
              </button>

              {!isMenuOpen && (
                <Menu className="menu-btn" onClick={() => setIsMenuOpen(true)} />
              )}
            </div>
          </div>

          {showSearchBar && (
            <div className="top-info-searchbox">
              <input type="text" placeholder="Search..." />
            </div>
          )}

          <div className="unified-navbar-bottom">
            <nav className="navbar-left">
              {renderNavLinks(navLinks.slice(0, Math.ceil(navLinks.length / 2)))}
            </nav>

            <nav className="navbar-right">
              {renderNavLinks(navLinks.slice(Math.ceil(navLinks.length / 2)))}
            </nav>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <X className="close-btn" onClick={() => setIsMenuOpen(false)} />
          <nav className="mobile-nav">
            {mobileMainLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MainNavbar;
