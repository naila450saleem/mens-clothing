import React from 'react';
import satinLabelImg from "../assets/15_pic.jpg";
import taffetaImg from "../assets/58_pic.jpg";      // 57_pic image import
import headingDivider from "../assets/heading_001_img.png";
import "./PVCRubberLogos.css";

const PVCRubberLogos = () => 
<div className="label-tags-container">
  {/* Breadcrumbs */}
  <div className="paginations_001">
    <a href="/">Home</a>
    <span>/</span>
    <span>PVCRubberLogos</span>
  </div>

  {/* Title */}
  <h1 className="pvc-title">PVCRubberLogos</h1>
  <div className="border_005"></div>

  {/* Second Section - Clothing Woven Labels */}
  <div className="row content-section">
    <div className="col-md-4 image-column">
      <div className="image-container">
        <img src={satinLabelImg} alt="Clothing Woven Labels" />
      </div>
    </div>
    <div className="col-md-8 content-column">
      <div className="text-content">
        <h2>Rubber Branding Logos</h2>
        <p>Rubber logos, you can send us your own logo to convert into rubber logos and put on your clothing. .</p>
      </div>
    </div>
  </div>

  {/* Divider */}
  <div className="row divider-row">
    <div className="col-12">
      <div className="divider">
        <img src={headingDivider} alt="divider" />
      </div>
    </div>
  </div>

  {/* Third Section - Customised Taffeta Labels */}
  <div className="row content-section">
    <div className="col-md-4 image-column">
      <div className="image-container">
        <img src={taffetaImg} alt="Customised Taffeta Labels" />
      </div>
    </div>
    <div className="col-md-8 content-column">
      <div className="text-content">
        <h2>Custom Core logo Rubber logo 3d Soft Pvc</h2>
        <p>Custom Core logo and Size Rubber logo Label Rubber Custom logo Label 3d Soft 
            Pvc Rubber Labels Product Type: Garment Labels Color, Shape and Logo Welcome Customized, 
            Let Your Logo Unique Size:Commonly Use Size,Make Appointed Size to Match Your. 
            Feature:Eco-friendly Sample time:3-4 Working Days Material: They Are All Eco-Friendly,Good 
            Health is The Best. Usage:Garments, 
            Bags,Shoes,Hats, Gifts,Luggage,Toy,Towel Products,Home Textiles Etc..</p>
      </div>
    </div>
  </div>

  {/* Divider */}
  <div className="row divider-row">
    <div className="col-12">
      <div className="divider">
        <img src={headingDivider} alt="divider" />
      </div>
    </div>
  </div>

  {/* Newsletter Section */}
  <div className="newsletter-section">
    <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
    <input type="email" placeholder="Enter Your Email Address..." />
  </div>
</div>

export default PVCRubberLogos;
