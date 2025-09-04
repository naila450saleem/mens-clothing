import React from 'react';
import leatherImg from "../assets/23_pic.jpg";

import "./LeatherPatches.css";

const LatherPatches = () => 
<div className="lather-container">
      {/* Breadcrumbs */}
      <div className="paginations_001">
        <a href="/">Home</a>
        <span>/</span>
        <span>LeatherPatches</span>
      </div>

      {/* Title */}
      <h1 className="lather-title">LeatherPatches</h1>
      <div className="border_005"></div>

      <div className="leather-section">
  <div className="leather-image">
    <img src={leatherImg} alt="Leather Patch" />
  </div>
  <div className="leather-text">
    <h2>Leather Patches</h2>
    <p>
      Customized Leather Embossed Patches, Fake Leather Embossed Patches, Synthetic Leather Patches
    </p>
  </div>
</div>

{/* Newsletter Section */}
      <div className="newsletter-section">
        <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
        <input type="email" placeholder="Enter Your Email Address..." />
      </div>

      </div>

      
export default LatherPatches;
