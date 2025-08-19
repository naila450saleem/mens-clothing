import React from "react";
import "./FAQs.css";

const FAQs = () => {
  return (
    <div className="faq-container">
      <div className="breadcrumb">
        <a href="/">Home</a> / FAQ's
      </div>

      <h1 className="faq-title">FAQ'S</h1>
       <div class="border_005"></div>

      <div className="faq-content">
        {/* Q1 */}
        <div className="faq-item">
          <h3 className="faq-question">Q1. Who We Are?</h3>
          <p className="faq-answer">
            We are based in Sialkot, Pakistan, started our factory/manufacturing in 2010.
          </p>
        </div>

        {/* Q2 */}
        <div className="faq-item">
          <h3 className="faq-question">Q2. How Can We Guarantee Quality?</h3>
          <p className="faq-answer">
            Always a pre-production sample before mass production. Always final Inspection before shipment.
          </p>
        </div>

        {/* Q3 */}
        <div className="faq-item">
          <h3 className="faq-question">Q3. What can you make for us?</h3>
          <p className="faq-answer">
            You can order all types of technical sports and casual wear products. We always prefer customer's designs and specs.
          </p>
        </div>

        {/* Q4 */}
        <div className="faq-item">
          <h3 className="faq-question">Q4. Why Should You Buy From Us Not From Other Suppliers?</h3>
          <ul className="faq-list">
            <li>Custom Made Sizes</li>
            <li>Free of cost samples</li>
            <li>Fast production</li>
            <li>Pre-Production Samples</li>
            <li>In House Custom Printing & Embroidery facilities to provide fast delivery</li>
            <li>Color Codes accepted</li>
            <li>Private Branding facility available</li>
            <li>Accept Small & Bulk orders</li>
            <li>Drop Shipping</li>
            <li>In House Production</li>
          </ul>
        </div>

        {/* Q5 */}
        <div className="faq-item">
          <h3 className="faq-question">Q5. What Services Can We Provide?</h3>
          <div className="services-grid">
            <div>
              <h4>Accepted Delivery Terms: FOB, CFR, CIF, EXW, DDP, DDU, Express Delivery </h4>
               <h4>Accepted Payment Currency: USD, EUR, JPY, CAD, AUD, HKD, GBP, CNY, CHF</h4>
              <h4>Accepted Payment Type: T/T, L/C, D/P D/A, MoneyGram, Credit Card, PayPal, Western Union, Escrow</h4>

            </div>
          
          </div>
        </div>
      </div>
      {/* Add your privacy policy content here */}
            {/* Newsletter Section */}
      <div className="newsletter-section">
        <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
        <input type="email" placeholder="Enter Your Email Address..." />
      </div>
    </div>
  );
};

export default FAQs;