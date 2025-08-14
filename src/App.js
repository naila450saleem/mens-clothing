import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import NavbarServices from './Components/NavbarServices';
// import PopupModal from './Components/Popup/PopupModal';
import Footer from './Components/Footer/Footer';
// import FloatingIcons from './Components/FloatingIcons/FloatingIcons';
import CustomCursor from './Components/CustomCursor/CustomCursor';

import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
import CartPage from './Pages/CartPage';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* Show Navbar only on Home page */}
      {isHomePage ? <Navbar /> : <NavbarServices />}

      {/* <PopupModal /> */}
      {/* <FloatingIcons /> */}
      <CustomCursor />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path='/cart' element={<CartPage />} />

        {/* Add other routes here */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
