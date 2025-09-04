import React from "react";
import "./catalogue.css";

const items = [
  {
    img: "https://coresportswears.com/pictures/pdf/3_pdf_2.jpg",
    href: "https://coresportswears.com/pictures/pdf/",
  },
  {
    img: "https://coresportswears.com/pictures/pdf/3_pdf_2.jpg",
    href: "https://coresportswears.com/pictures/pdf/",
  },
  {
    img: "https://coresportswears.com/pictures/pdf/3_pdf_2.jpg",
    href: "https://coresportswears.com/pictures/pdf/",
  },
  {
    img: "https://coresportswears.com/pictures/pdf/3_pdf_2.jpg",
    href: "https://coresportswears.com/pictures/pdf/",
  },
];

export default function Catalogue() {
  const handleImgError = (e) => {
    e.currentTarget.src = "https://via.placeholder.com/600x800?text=Catalogue";
  };

  return (
    <div className="catalogue-page">

      {/* Main Content */}
      <div className="container">
        {/* Breadcrumbs */}
       <div className="paginations_001">
        <a href="https://coresportswears.com/">Home</a>
        <span>/</span>
        <span>Catalogue</span>
      </div>
     

       

        

        {/* Catalogue Items Grid - Only VIEW buttons */}
        <div className="view-buttons-container">
          {items.map((item, idx) => (
            <a 
              key={idx}
              className="view-button"
              target="_blank" 
              rel="noopener noreferrer" 
              href={item.href}
            >
              VIEW
            </a>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-section">
          <h3>Subscribe to our newsletter</h3>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter Your Email Address..." />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}