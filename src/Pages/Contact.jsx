import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Breadcrumb */}
  <div className="paginations_001">
        <a href="https://coresportswears.com/">Home</a>
        <span>/</span>
        <span>Contact US</span>
      </div>
      

      {/* Map + Contact Info */}
      <div className="contact-section">
        {/* Google Map */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.454283326761!2d74.5281063150952!3d31.537555281369997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483a35d0c69%3A0x14b6bb5c2c951b2d!2sSialkot%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1652345678901!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>CONTACT US:</h2>
          <div className="contact-detail">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <p>Sadra Badra Factory area, Near Pepsi agency, Daak Wala Stop Daska Road, 51480 Sialkot, Pakistan.</p>
            </div>
          </div>
          <div className="contact-detail">
            <i className="fas fa-envelope"></i>
            <div>
              <p>coresportswears@gmail.com</p>
            </div>
          </div>
          <div className="contact-detail">
            <i className="fas fa-phone"></i>
            <div>
              <p>+92 332 8624992</p>
            </div>
          </div>
          <div className="contact-detail">
            <i className="fas fa-star"></i>
            <div>
              <p>5.0 ★★★★ 13 reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>GET IN TOUCH</h2>
        <div className="form-underline"></div>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number*</label>
            <input type="tel" id="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="comments">Comments*</label>
            <textarea id="comments" required></textarea>
          </div>
          <div className="security-code">
            <label htmlFor="security">Security Code: (001491)</label>
            <input type="text" id="security" placeholder="Please Enter Security Code" required />
          </div>
          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>
      </div>
       {/* Newsletter Section */}
      <div className="newsletter-section">
        <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
        <input type="email" placeholder="Enter Your Email Address..." />
      </div>
    </div>
  );
};

export default Contact;