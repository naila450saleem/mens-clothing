import React, { useState } from 'react';
import './Elementor.css';
import { Link } from 'react-router-dom';
import t1 from '../assets/t1.png';
import t2 from '../assets/t2.png';
import t3 from '../assets/t3.png';
import t4 from '../assets/t4.png';
import t8 from '../assets/t8.png';

const Elementor = () => {
  const [cartStatus, setCartStatus] = useState({});

  const products = [
    {
      name: "Classic Blue Jeans with Cotton Shirt Combo",
      image: t2,
      originalPrice: 450,
      currentPrice: 430,
      discount: "-29%"
    },
    {
      name: "Stylish Leather Handbag",
      image: t3,
      originalPrice: 45,
      currentPrice: 31.99,
      discount: "-29%"
    },
    {
      name: "Premium Winter Denim Jacket",
      image: t4,
      currentPrice: 290,
      discount: "-29%"
    }
  ];

  const handleAddToCart = (index) => {
    setCartStatus((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="elementor-container">

      {/* Section 1 */}
      <section className="section-one section-row">
        <div className="section-image">
          <img src={t1} alt="Service" />
        </div>
        <div className="section-one-content">
          <h2>T-Shirt Customization Services</h2>
          <p>With proper care and high-quality customization...</p>
          <button>LEARN MORE</button>
        </div>
      </section>

      {/* Section 2 */}
      <section className="section-two section-row reverse">
        <div className="section-image">
          <img src={t2} alt="Service" />
        </div>
        <div className="section-two-content">
          <h2>T-Shirt Customization Services</h2>
          <p>With proper care and high-quality customization...</p>
          <button>LEARN MORE</button>
        </div>
      </section>

      {/* Section 3 - product grid */}
      <section className="section text-center">
        <h2>Clothing & Fashion Accessories</h2>
        <p className="section-description">Our store brings you...</p>

        <div className="product-grid">
          {products.map((product, index) => {
            const inCart = cartStatus[index];
            return (
              <div key={index} className="product-card">
                {product.discount && <span className="discount">{product.discount}</span>}
                <img src={product.image} alt={product.name} />

                {product.originalPrice && (
                  <p className="line-through">${product.originalPrice.toFixed(2)}</p>
                )}

                <p>{product.name}</p>
                <p className="price">${product.currentPrice.toFixed(2)}</p>

                
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 4 */}
      <section className="swiss-essence-section">
        <div className="swiss-essence-image">
          <img src={t8} alt="Swiss Essence" />
        </div>

        <div className="swiss-essence-content">
          <h2>Swiss Essence</h2>
          <p>First: some things will never get old...</p>
          <button>READ OUR STORY</button>
        </div>
      </section>

    </div>
  );
};

export default Elementor;
