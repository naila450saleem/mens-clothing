import React from 'react';
import './About.css';
import aboutImg from '../assets/2_page.jpg';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Image Section */}
      <div className="about-hero">
        <img src={aboutImg} alt="About Us" />
        
      </div>

      {/* Main Content Section */}
      <div className="about-content">
        <div className="paginations_001">
    <a href="/">Home</a><span>/</span>About Us
      </div>
        <div className="moto-section">
          <h2>ABOUT US</h2>
          <div class="border_005"></div>
          <div className="moto">Our Moto "Quality Is Everything"</div>
        </div>
        
        <p>We are manufacturer and exporter of high-quality Sportswear, Fitness wear & Streetwear products. Our company produces custom designs and sizes as per customer's requirements. We provide a full range of services from sample making, marking, grading, stitching and shipping. No order is too big or too small.</p>
        
        <p>We appreciate that each individual customer's needs are specific to them. We take the time to get to know you personally and ensure that the products we design for you meet your requirements. We have skilled stitching and development team. Also have over 200 machines including Flat lock, overtock, singer, barrack, trimming, cutting, embroidery, and sublimation printing machines.</p>
        
        <div className="services">
        
          <p>We have IN HOUSE Screen Printing, sublimation printing, Computerized Embroidery, Artwork design & digitizing. We also have Facilities of custom labels/Tags, Leather Patches, custom printed Poly Bags, PVC & Rubber Logos, Tag Cards and custom Fabric etc. You can be assured of receiving a superior level of service, quality workmanship & a very fast turnaround time on all types of custom orders.</p>
        </div>
        
        <div className="contact">
          <h3>CONTACT US</h3>
          <p>Email us at: <a href="mailto:coresportswears@gmail.com">coresportswears@gmail.com</a></p>
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

export default About;