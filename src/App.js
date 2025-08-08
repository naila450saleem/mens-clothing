import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import PopupModal from './Components/Popup/PopupModal'; // Import your modal component.
import Footer from './Components/Footer/Footer';
import FloatingIcons from './Components/FloatingIcons/FloatingIcons'; // adjust path if needed
import CustomCursor from './Components/CustomCursor/CustomCursor'; 
import Home from './Pages/Home';
import About from './Pages/About';



function App() {
  return (
    <>
      <Navbar />
      <PopupModal />

 <FloatingIcons />
      <CustomCursor />
      

      {/* Routes Section */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/shop/rings" element={<h1>Rings</h1>} />
        <Route path="/shop/necklaces" element={<h1>Necklaces</h1>} />
        <Route path="/shop/bracelets" element={<h1>Bracelets</h1>} />
        <Route path="/blog" element={<h1>Blog</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
