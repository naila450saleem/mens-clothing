import React from "react";

import customizationImg from "../assets/customization.png";

const Customization = () => {
  return (
    <div className="privacy-container">
      <div className="paginations_001">
        <a href="https://coresportswears.com/">Home</a>
        <span>/</span>
        <span>Customization</span>
      </div>
      
      <h1 className="privacy-title">Customization</h1>
      <div class="border_005"></div>

        <div 
  className="customization-img" 
  style={{ marginTop: "30px", textAlign: "center" }}
>
  <img 
    src={customizationImg} 
    alt="Customization" 
    style={{ maxWidth: "100%", height: "auto", borderRadius: "8px", display: "inline-block" }} 
  />
</div>
      
      {/* Add your privacy policy content here */}
            {/* Newsletter Section */}
      <div className="newsletter-section">
        <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
        <input type="email" placeholder="Enter Your Email Address..." />
      </div>
       {/* Image Section */}
    

    </div>
    
  );
};

export default Customization;
