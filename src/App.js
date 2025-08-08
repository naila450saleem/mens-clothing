import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner';
import Hero from './Components/Hero/Hero'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
      <Hero />

      {/* Dummy Routes for Demo */}
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/shop/rings" element={<h1>Rings</h1>} />
        <Route path="/shop/necklaces" element={<h1>Necklaces</h1>} />
        <Route path="/shop/bracelets" element={<h1>Bracelets</h1>} />
        <Route path="/blog" element={<h1>Blog</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
