import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-flex">
            <div className="footer-section location">
              <h3>Location</h3>
              <p>
                Lansing, Delta Township 6334 W.<br />
                Saginaw, Suite D
              </p>
            </div>

            <div className="divider" />

            <div className="footer-section hours">
              <h3>Working Hours</h3>
              <p>
                Mon – Thu, 9:30 AM – 6:00 PM EST<br />
                Fri, 9:30 AM – 3:00 PM EST
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal divider line here */}
<hr className="section-divider" />

      <div className="footer-middle">
  <div className="footer-container footer-grid">
    <div className="newsletter">
      {/* Newsletter content here */}
      <p>
        Sign up for our newsletter to receive special offers, news and great sales notifications.
      </p>
      <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>

    {/* Divider */}
    <div className="divider" />

    <div className="footer-links">
      {/* Links content here */}
      <div>
        <h3>Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Services</a></li>
        </ul>
      </div>
      <div>
        <h3>Info</h3>
        <ul>
          <li><a href="#">Team</a></li>
          <li><a href="#">Our Mission</a></li>
          <li><a href="#">Our History</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </div>
      <div>
        <h3>Socials</h3>
        <ul>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Pinterest</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">YouTube</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<hr className="section-divider" />

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>AxiomThemes © 2025. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
