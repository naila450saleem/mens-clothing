import React, { useState, useEffect } from 'react';
import banner1 from '../assets/22_banner.jpg';
import banner2 from '../assets/24_banner.jpg';
import banner3 from '../assets/25_banner.jpg';
import banner4 from '../assets/27_banner.jpg';
import centerImg from '../assets/center_image.png'; // your bottom center image
import './Banner.css';

const bannerImages = [banner1, banner2, banner3, banner4];

const Banner = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(bgIndex);
      setBgIndex((bgIndex + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bgIndex]);

  const goPrev = () => {
    setPrevIndex(bgIndex);
    setBgIndex(bgIndex === 0 ? bannerImages.length - 1 : bgIndex - 1);
  };

  const goNext = () => {
    setPrevIndex(bgIndex);
    setBgIndex((bgIndex + 1) % bannerImages.length);
  };

  return (
    <div className="banner-container">
      {bannerImages.map((img, i) => {
        let className = 'banner-slide';
        if (i === bgIndex) className += ' active';
        if (i === prevIndex) className += ' exit-left';
        return <img key={i} src={img} alt={`Banner ${i + 1}`} className={className} />;
      })}

      <button className="banner-arrow left-arrow" onClick={goPrev}>&#8249;</button>
      <button className="banner-arrow right-arrow" onClick={goNext}>&#8250;</button>

      {/* Centered bottom image */}
      <div className="banner-bottom-img">
        <img src={centerImg} alt="Center" />
      </div>
    </div>
  );
};

export default Banner;
