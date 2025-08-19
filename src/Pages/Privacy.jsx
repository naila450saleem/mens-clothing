import React from "react";
import "./Privacy.css";

const Privacy = () => {
  return (
    <div className="privacy-container">
      <div className="paginations_001">
        <a href="https://coresportswears.com/">Home</a>
        <span>/</span>
        <span>Privacy Policy</span>
      </div>
      
      <h1 className="privacy-title">PRIVACY POLICY</h1>
      <div class="border_005"></div>
      
      {/* Add your privacy policy content here */}
            {/* Newsletter Section */}
      <div className="newsletter-section">
        <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
        <input type="email" placeholder="Enter Your Email Address..." />
      </div>
    </div>
    
  );
};

export default Privacy;
