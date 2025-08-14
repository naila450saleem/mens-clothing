import React from "react";
import "./Footer.css";

// Images from src/assets
// import footLogo from "../../assets/foot_loog.png";
import footBorder from "../../assets/foot_border.png";
import socialBorder from "../../assets/social_border.png";
import alibabaLogo from "../../assets/alibaba-member-ide-logo.jpg";
import gallery1 from "../../assets/1_pic.jpg";
import gallery2 from "../../assets/2_pic.jpg";
import gallery3 from "../../assets/3_pic.jpg";
import gallery4 from "../../assets/4_pic.jpg";
import gallery5 from "../../assets/5_pic.jpg";
import gallery6 from "../../assets/6_pic.jpg";

const Footer = () => {
  return (
    <div>
      {/* Footer Logo */}
      {/* <div className="foot_logo">
        <div className="border_001"></div>
        <img src={footLogo} alt="footer logo" />
      </div> */}

      {/* Main Footer */}
      <div className="footer">
        <div className="container footer-container">
          {/* Left: Contact */}
          <div className="foot_contact">
            <h1>QUICK CONTACT US</h1>
            <img src={footBorder} alt="border" />
            <ul>
              <li>
                <p>
                  We appreciate that each individual customer’s needs are
                  specific. We take the time to get to know you personally and
                  ensure the products we design meet your requirements.
                  Skilled stitching and developing team. Over 200 machines
                  including Flat lock, overlock, singer, bartack, trimming,
                  cutting, embroidery and sublimation printing machines.
                </p>
                <div className="line"></div>
              </li>
              <li>
                <p>
                  <span><i className="fas fa-map-marker-alt"></i></span>
                  Sadra Badra Factory area, Near Pepsi agency, Daak Wala Stop Daska Road, 51480 Sialkot, Pakistan.
                </p>
                <div className="line"></div>
              </li>
              <li>
                <p>
                  <span><i className="fas fa-phone fa-rotate-90"></i></span>
                  +92 332 8624992
                </p>
                <div className="line"></div>
              </li>
              <li>
                <p>
                  <span><i className="fas fa-envelope"></i></span>
                  <a href="mailto:coresportswears@gmail.com">coresportswears@gmail.com</a>
                </p>
              </li>
            </ul>
          </div>

          {/* Right: Information, Categories, Production */}
          <div className="footer-right">
            {/* Information */}
            <div className="quick_links">
              <h1>Information</h1>
              <img src={footBorder} alt="border" />
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/customer_service">Customer Services</a></li>
                <li><a href="/privacy_policy">Privacy Policy</a></li>
                <li><a href="/catalogue">Catalogue</a></li>
                <li><a href="/production">Exhibition</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
{/* Social Icons horizontally under right sections */}
  <div className="footer-right-social">
    <div className="section-line"></div> {/* line added */}
    <ul>
      <li><a href="https://facebook.com" target="_blank"><i className="fab fa-facebook"></i></a></li>
      <li><a href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></a></li>
      <li><a href="https://instagram.com" target="_blank"><i className="fab fa-instagram"></i></a></li>
      <li><a href="https://linkedin.com" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
      <li><a href="https://wa.me/923328624992" target="_blank"><i className="fab fa-whatsapp"></i></a></li>
      <li><a href="https://pinterest.com" target="_blank"><i className="fab fa-pinterest"></i></a></li>
      <li><a href="https://alibaba.com" target="_blank"><img src={alibabaLogo} alt="alibaba" /></a></li>
    </ul>
  </div>
             
            </div>

            {/* Categories */}
            <div className="foot_cat">
              <h1>Our CATEGORIES</h1>
              <img src={footBorder} alt="border" />
              <ul>
                <li><a href="/products/ski-snow-wear/ski-snowboarding-pants">Ski & Snow Wear</a></li>
                <li><a href="/products/street-wears/pullover-hoodies">Street Wears</a></li>
                <li><a href="/products/custom-team-wear/soccer-uniforms">Custom Team Wear</a></li>
                <li><a href="/products/fitness-wear/leggings">Fitness Wear</a></li>
                <li><a href="/products/head-wear-accessories/bandana-tubular">Head Wear & Accessories</a></li>
                <li><a href="/products/bags/sports-backpack">Bags</a></li>
              </ul>
            </div>

            {/* Production Gallery */}
            <div className="foot_gallery">
              <h1>Production</h1>
              <img src={footBorder} alt="border" />
              <div className="gallery_row">
                {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map((img, i) => (
                  <div className="gallery_box" key={i}>
                    <img src={img} alt={`gallery ${i + 1}`} />
                  </div>
                ))}
              </div>
            </div>
            
          </div>
          
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright2021">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p>@2023. All Rights Reserved By Core Sportswears.</p>
            </div>
            <div className="col-lg-6">
              <p>Design & Developed By <a href="http://sialweb.net" target="_blank">sial web</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
