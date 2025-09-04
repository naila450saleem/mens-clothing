import React from "react";
import customizationImg from "../assets/customization.png";
import "./customization.css";

const Customization = () => {
  return (
    <div className="customization-container">
      {/* Breadcrumbs */}
      <div className="customization-breadcrumbs">
        <a href="https://coresportswears.com/">Home</a>
        <span>/</span>
        <span>Customization</span>
      </div>

      {/* Title */}
      <h1 className="customization-title">Customization</h1>
      <div className="customization-divider"></div>

      {/* Image Section */}
      <div className="customization-image">
        <img 
          src={customizationImg} 
          alt="Customization" 
        />
      </div>

         {/* Newsletter Section */}
      <div className="newsletter-section">
        <h3>Subscribe to our Newsletter</h3>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter Your Email Address..." />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Customization;
