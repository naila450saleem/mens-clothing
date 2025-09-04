// LabelTags.js
import React from 'react';
import satinLabelImg from "../assets/17_pic.jpg";
import headingDivider from "../assets/heading_001_img.png";
import './LabelsTags.css';

const LabelTags = () => {
  return (
    <div className="label-tags-container">
       {/* Breadcrumbs */}
      <div className="paginations_001">
        <a href="/">Home</a>
        <span>/</span>
        <span>LabelTags</span>
      </div>
      {/* Title */}
      <h1 className="lebel-title">LabelTags</h1>
      <div className="border_005"></div>

      {/* First Section - Satin Label */}
      <div className="row content-section">
        <div className="col-md-4 image-column">
          <div className="image-container">
            <img src={satinLabelImg} alt="Satin Label" />
          </div>
        </div>
        <div className="col-md-8 content-column">
          <div className="text-content">
            <h2>Satin Label</h2>
            <div className="video-container">
              <iframe 
                src="https://www.youtube.com/embed/3Fq_2_SMDyA" 
                title="What is a Satin Neck Label? Custom Printed Satin Label Material for Clothing."
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
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

      {/* Second Section - Clothing Woven Labels */}
      <div className="row content-section">
        <div className="col-md-4 image-column">
          <div className="image-container">
            <img src="https://coresportswears.com/pictures/gallery/47_pic.jpg" alt="Clothing Woven Labels" />
          </div>
        </div>
        <div className="col-md-8 content-column">
          <div className="text-content">
            <h2>Clothing Woven Labels</h2>
            <p>Custom woven labels for garments, clothing, and apparel branding.</p>
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
            <img src="https://coresportswears.com/pictures/gallery/57_pic.jpg" alt="Customised Taffeta Labels" />
          </div>
        </div>
        <div className="col-md-8 content-column">
          <div className="text-content">
            <h2>Customised Taffeta Labels</h2>
            <p>Customised taffeta labels as per customer demand. Care labels. Material label.</p>
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
  );
};

export default LabelTags;
