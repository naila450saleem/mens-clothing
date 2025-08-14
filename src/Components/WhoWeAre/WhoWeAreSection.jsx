import React from "react";
import headingImg from "../../assets/heading_001_img.png"; // image path adjust karo
import "./WhoWeAreSection.css";

const WhoWeAreSection = () => {
  return (
    <section className="who-we-are">
      <div className="container">
        <h1>Who We Are</h1>
        <img src={headingImg} alt="Heading" className="heading-img" />
        <p>
          <strong>Our Moto<br />
          "Quality Is Everything"</strong>
        </p>
        <p>
          We are manufacturers and exporters of high-quality Sportswear & Streetwear products ranges. 
          Our company produces custom designs and sizes as per customers requirements. 
          We provide a full range of services from sample making, marking, grading, stitching and shipping. 
          No order is too big or too small.
        </p>
        <p>
          We appreciate that each individual customer's needs are specific to them. 
          We take the time to get to know you personally and ensure that the products we design for you meet your requirements. 
          We have skilled stitching and development team. Also have over 200 machines including Flat lock, overlock, singer, bartack, trimming, cutting, embroidery, and sublimation printing machines. 
          We have IN HOUSE Screen Printing, sublimation printing, Computerized Embroidery, Artwork design & digitizing. 
          We also have Facilities of custom labels/Tags, Leather Patches, custom printed Poly Bags, PVC & Rubber Logos, Tag Cards and custom Fabric etc. 
          You can be assured of receiving a superior level of service, quality workmanship & a very fast turnaround time on all types of custom orders.
        </p>
        <p>Email for more information at <strong>coresportswears@gmail.com</strong></p>
        <div className="read-more">
          <a href="/about">Click To More</a>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
