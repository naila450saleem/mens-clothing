import React from "react";
import "./Printings.css";

// Local images
import headingDivider from "../assets/heading_001_img.png";
import silkScreenImg from "../assets/7_pic.jpg";
import glitterImg from "../assets/8_pic.jpg";
import puffImg from "../assets/9_pic.jpg";
import sublimationImg from "../assets/10_pic.jpg";
import vinylImg from "../assets/11_pic.jpg";

const Printings = () => {
  return (
    <div className="printings-container">
      {/* Breadcrumbs */}
      <div className="paginations_001">
        <a href="/">Home</a>
        <span>/</span>
        <span>Printings</span>
      </div>

      {/* Title */}
      <h1 className="printings-title">PRINTINGS</h1>
      <div className="border_005"></div>

      {/* Content */}
      {/* Silk Screen Printing */}
      <div className="printing-row">
        <div className="printing-image">
          <img src={silkScreenImg} alt="Silk Screen Printing" />
        </div>
        <div className="printing-content">
          <h2>Silk Screen Printing</h2>
        </div>
      </div>

      <div className="divider">
        <img src={headingDivider} alt="divider" />
      </div>

      {/* Glitter Printing */}
      <div className="printing-row">
        <div className="printing-image">
          <img src={glitterImg} alt="Glitter Printing" />
        </div>
        <div className="printing-content glitter-section">
          <div className="text-content">
            <h2>GLITTER PRINTING</h2>
            <p>Glitter Printing on clothing/garments/sportswear/apparel.</p>
            <div className="printing-link">
              <strong>Heat transfer Glitter Printing Site...</strong>
              <a href="www.pc-g">www.pc-g</a>
            </div>
          </div>
          <div className="video-content">
            <iframe
              title="Heat transfer Glitter Printing Stickers for Clothing"
              width="50%"
              height="250"
              src="https://www.youtube.com/embed/omY1PoM1Vnw"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="divider">
        <img src={headingDivider} alt="divider" />
      </div>

      {/* Puff Printing */}
      <div className="printing-row">
        <div className="printing-image">
          <img src={puffImg} alt="Puff Printing" />
        </div>
        <div className="printing-content">
          <h2>PUFF PRINTING</h2>
          <p>
            <strong>About Puff Screen Printing:</strong> Puff Printing is most soft touch screen printing method on street wear like T-Shirt, Polo Shirts, Sweatshirts & Hoodies and many other products as you can see in helping video that it's a bit fluffy type of soft printing. Our puff printing can be washed many time.
          </p>
          <div className="video-wrapper">
            <iframe
              title="What is Puff Printing?"
              width="50%"
              height="250"
              src="https://www.youtube.com/embed/x80t-nKRs6E"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="divider">
        <img src={headingDivider} alt="divider" />
      </div>

      {/* Sublimation Printing */}
      <div className="printing-row">
        <div className="printing-image">
          <img src={sublimationImg} alt="Sublimation Printing" />
        </div>
        <div className="printing-content">
          <h2>Sublimation Printing</h2>
        </div>
      </div>

      <div className="divider">
        <img src={headingDivider} alt="divider" />
      </div>

      {/* Vinyl & Reflective Printing */}
      <div className="printing-row">
        <div className="printing-image">
          <img src={vinylImg} alt="Vinyl & Reflective Printing" />
        </div>
        <div className="printing-content">
          <h2>Vinyl & Reflective Printing</h2>
          <div className="video-wrapper">
            <iframe
              title="Vinyl Heat Transfer"
              width="50%"
              height="250"
              src="https://www.youtube.com/embed/eEDb4jeBpdw"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="divider">
        <img src={headingDivider} alt="divider" />
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
        <input type="email" placeholder="Enter Your Email Address..." />
      </div>
    </div>
  );
};

export default Printings;