import React, { useState } from "react";
import ViewToggle from "./ViewToggle";
import "./ProductsGrid.css";

// Image Imports
import jecket1 from '../assets/jecket1.png';
// import jec2 from '../assets/jec2.jpg';
import jec3 from '../assets/jec3.jpg';
import jec4 from '../assets/jec4.jpg';
import jec5 from '../assets/jec5.jpg';
import jec6 from '../assets/jec6.jpg';
import jec7 from '../assets/jec7.jpg';
// import jec8 from '../assets/jec8.jpg';

// Product Data
const products = [
  { name: "White Gold Earrings in White Diamonds", image: jecket1, originalPrice: 450, currentPrice: 430, discount: "-4%" },
  // { name: "White Gold Earrings in White Diamonds", image: jec2, originalPrice: 450, currentPrice: 430, discount: "-4%" },
  { name: "White Gold Earrings in White Diamonds", image: jec3, originalPrice: 450, currentPrice: 430, discount: "-4%" },
  { name: "White Gold Earrings in White Diamonds", image: jec4, originalPrice: 450, currentPrice: 430, discount: "-4%" },
  { name: "White Gold Earrings in White Diamonds", image: jec5, originalPrice: 450, currentPrice: 430, discount: "-4%" },
  { name: "White Gold Earrings in White Diamonds", image: jec6, originalPrice: 450, currentPrice: 430, discount: "-4%" },
  { name: "White Gold Earrings in White Diamonds", image: jec7, originalPrice: 450, currentPrice: 430, discount: "-4%" },
  // { name: "White Gold Earrings in White Diamonds", image: jec8, originalPrice: 450, currentPrice: 430, discount: "-4%" },
];

export default function ProductsGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="products-grid">
      <div className="top-bar">
        <ViewToggle />
        <div className="sort-dropdown">
          <select defaultValue="date">
            <option value="popularity">Sort by popularity</option>
            <option value="rating">Sort by average rating</option>
            <option value="date">Sort by latest</option>
            <option value="price">Sort by price: low to high</option>
            <option value="price-desc">Sort by price: high to low</option>
          </select>
        </div>
      </div>

      <div className="grid">
        {currentProducts.map((product, i) => (
          <div key={i} className="product-card">
            {product.discount && <span className="discount-badge">{product.discount}</span>}
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <div className="product-price">
              <span className="original-price">${product.originalPrice.toFixed(2)}</span>
              <span className="current-price">${product.currentPrice.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
}
