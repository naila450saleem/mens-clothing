import React from 'react';
import Banner from '../Components/Banner';
import Hero from '../Components/Hero/Hero';
import Elementor from '../Components/Elementor';
// Import other Home-specific sections

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <Elementor />
      {/* Add other sections like Featured, Testimonials, etc. */}
    </div>
  );
};

export default Home;
