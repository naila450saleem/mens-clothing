// src/Pages/Home.jsx
import React from 'react';
import Banner from '../Components/Banner';
import Features from '../Components/Features/Features';
import CategoryNavbar from '../Components/Navbar/CategoryNavbar';
import WideRangeSection from '../Components/Wide/WideRangeSection';
import WhoWeAreSection from '../Components/WhoWeAre/WhoWeAreSection';
import ProductCategories from '../Components/ProductCategories';
import ServicesOffered from '../Components/ServicesOffered/ServicesOffered';
import SubBannersNewsletter from '../Components/SubBannersNewsletter/SubBannersNewsletter';

const Home = () => {
  return (
    <div>
      <Banner />
     <Features />
     <CategoryNavbar />
     <WideRangeSection />
     <WhoWeAreSection />
     <ProductCategories />
    <ServicesOffered />
    <SubBannersNewsletter />



    </div>
  );
};

export default Home;
