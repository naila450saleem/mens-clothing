import React from "react";
import "./CustomerServices.css";

const CustomerServices = () => {
  return (
    <div className="customer-services-container">
      {/* Breadcrumbs */}
      <div className="paginations_001">
        <a href="https://coresportswears.com/">Home</a>
        <span>/</span>
        <span>Customer Service</span>
      </div>
      
      {/* Title */}
      <h1 className="customer-services-title">Customer Service</h1>
      <div className="border_005"></div>
      
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
        <input type="email" placeholder="Enter Your Email Address..." />
      </div>
    </div>
  );
};

export default CustomerServices;
