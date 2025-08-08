import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section logo-section">
          <h2 className="logo">FASHIONISTA</h2>
          <p>Your go-to fashion hub for premium jewelry and style.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop/rings">Rings</a></li>
            <li><a href="/shop/necklaces">Necklaces</a></li>
            <li><a href="/shop/bracelets">Bracelets</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@fashionista.com</p>
          <p>Phone: +92 300 1234567</p>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Fashionista. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
