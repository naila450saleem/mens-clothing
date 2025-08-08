import React from 'react';
import './Elementor.css';


const Elementor = () => {
  return (
    <div className="elementor-container">
      {/* Section 1 */}
      <section className="section section-row">
        <div className="section-image">
          <img src="/t2.png" alt="Service" />
        </div>
        <div className="section-content">
          <h2>T-Shirt Customization Services</h2>
          <p>
            With proper care and high-quality customization, your t-shirts can
            reflect your personal style...
          </p>
          <button>LEARN MORE</button>
        </div>
      </section>

      <section className="section section-row reverse">
        <div className="section-content">
          <h2>T-Shirt Customization Services</h2>
          <p>
            With proper care and high-quality customization, your t-shirts can
            reflect your personal style...
          </p>
          <button>LEARN MORE</button>
        </div>
        <div className="section-image">
          <img src="/t2.png" alt="Service" />
        </div>
      </section>

      {/* Section 2 */}
      <section className="section text-center">
        <h2>Clothing & Fashion Accessories</h2>
        <p className="section-description">
          Our store brings you high-quality fashion essentials including stylish
          bags, premium jackets, and perfectly paired jeans and shirts...
        </p>

        <div className="product-grid">
          <div className="product-card">
            <span className="discount">-29%</span>
            <img src="/t2.png" alt="Product 1" />
            <p className="line-through">$450.00</p>
            <p>Classic Blue Jeans with Cotton Shirt Combo</p>
            <p className="price">$430.00</p>
          </div>

          <div className="product-card">
            <span className="discount">-29%</span>
            <img src="/t2.png" alt="Product 2" />
            <p className="line-through">$45.00</p>
            <p>Stylish Leather Handbag</p>
            <p className="price">$31.99</p>
          </div>

          <div className="product-card">
            <span className="discount">-29%</span>
            <img src="/t2.png" alt="Product 3" />
            <p>Premium Winter Denim Jacket</p>
            <p className="price">$290.00</p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="section section-row">
        <div className="section-image">
          <img src="/t2.png" alt="Swiss Essence" />
        </div>
        <div className="section-content">
          <h2>Swiss Essence</h2>
          <p>
            First: some things will never get old. Second: we believe a good
            watch complements the look. Third: watches are in fashion again.
          </p>
          <button>READ OUR STORY</button>
        </div>
      </section>
    </div>
  );
};

export default Elementor;
