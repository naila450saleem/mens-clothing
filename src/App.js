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

// Extra pages for TopNavbar
import Printings from './Pages/Printings';
import Embroideries from './Pages/Embroideries';
import LabelsTags from './Pages/LabelsTags';
import LeatherPatches from './Pages/LeatherPatches';
import PVCRubberLogos from './Pages/PVCRubberLogos';
import TagCards from './Pages/TagCards';
import PolyBags from './Pages/PolyBags';
import Fabrics from './Pages/Fabrics';

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

        {/* TopNavbar pages */}
        <Route path="/printings" element={<Printings />} />
        <Route path="/embroideries" element={<Embroideries />} />
        <Route path="/labels-tags" element={<LabelsTags />} />
        <Route path="/leather-patches" element={<LeatherPatches />} />
        <Route path="/pvc-rubber-logos" element={<PVCRubberLogos />} />
        <Route path="/tag-cards" element={<TagCards />} />
        <Route path="/poly-bags" element={<PolyBags />} />
        <Route path="/fabrics" element={<Fabrics />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
