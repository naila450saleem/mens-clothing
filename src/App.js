import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import TopNavbar from './Components/Navbar/TopNavbar';
import MainNavbar from './Components/Navbar/MainNavbar';
// import CategoryNavbar from './Components/Navbar/CategoryNavbar';
import Footer from './Components/Footer/Footer';

// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
// import Categories from './Pages/Categories';
import Sitemap from './Pages/Sitemap';
import Privacy from './Pages/Privacy';
import FAQs from './Pages/FAQs';
import CustomerServices from './Pages/CustomerServices';
import Catalogue from './Pages/Catalogue';
import Customization from './Pages/Customization';
import Contact from './Pages/Contact';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
     <TopNavbar />
     <MainNavbar />
     {/* <CategoryNavbar /> */}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/categories" element={<Categories />} /> */}
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/services" element={<CustomerServices />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/customization" element={<Customization />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
