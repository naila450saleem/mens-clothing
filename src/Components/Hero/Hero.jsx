import React from 'react';
import './Hero.css';

// Import all images
import t1 from '../../assets/t1.png';
import tex from '../../assets/tex.png';
import j1 from '../../assets/j1.jpg';
import jec5 from '../../assets/jec5.jpg';
import g3 from '../../assets/g3.jpg';
import b3 from '../../assets/b3.png';


const Hero = () => {
  return (
    <section className="hero-section">
      {/* Left Side Heading */}
      <div className="hero-heading">
        <h2 className="hero-title">
          What's <br />New
        </h2>
      </div>

      {/* Right Side: 6 Circles */}
      <div className="hero-grid">
        {[
          { image: t1, label: "T-Shirts" },
          { image: tex, label: "Textile" },
          { image: j1, label: "Jeans" },
          { image: jec5, label: "Leather Wear" },
          { image: g3, label: "HandWear" },
          { image: b3, label: "Accessories" },
        ].map((item, index) => (
          <div key={index} className="circle-wrapper">
            <div className="circle-image">
              <img src={item.image} alt={item.label} />
            </div>
            <p className="circle-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
