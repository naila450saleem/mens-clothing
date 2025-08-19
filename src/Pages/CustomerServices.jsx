import React from "react";
// import "./Privacy.css";

const CustomerServices = () => {
  return (
    <div className="privacy-container">
      <div className="paginations_001">
        <a href="https://coresportswears.com/">Home</a>
        <span>/</span>
        <span>Customer Service</span>
      </div>
      
      <h1 className="privacy-title">Customer Service</h1>
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

export default CustomerServices;
