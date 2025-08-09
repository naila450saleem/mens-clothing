import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ViewToggle from "../Components/ViewToggle";
import "./Shop.css";

import b0 from "../assets/b0.png";
import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b4 from "../assets/b4.png";
import b5 from "../assets/b5.png";
import b6 from "../assets/b6.png";
import b7 from "../assets/b7.png";
import b8 from "../assets/b8.png";
import b9 from "../assets/b9.png";
import b10 from "../assets/b10.png";



const products = [
  { name: "White Gold Earrings in White Diamonds", image: b0, originalPrice: 450, currentPrice: 430, discount: "-4%" },
  { name: "White Gold Earrings in White Diamonds", image: b1, originalPrice: 450, currentPrice: 430, discount: "-4%" },
  { name: "White Gold Earrings in White Diamonds", image: b2, originalPrice: 450, currentPrice: 430, discount: "-4%" },
  { name: "White Gold Earrings in White Diamonds", image: b4, originalPrice: 450, currentPrice: 430, discount: "-4%" },
  { name: "White Gold Earrings in White Diamonds", image: b5, originalPrice: 450, currentPrice: 430, discount: "-4%" },
  { name: "White Gold Earrings in White Diamonds", image: b6, originalPrice: 450, currentPrice: 430, discount: "-4%" },
  { name: "White Gold Earrings in White Diamonds", image: b7, originalPrice: 450, currentPrice: 430, discount: "-4%" },
  { name: "White Gold Earrings in White Diamonds", image: b8, originalPrice: 450, currentPrice: 430, discount: "-4%" },
  { name: "White Gold Earrings in White Diamonds", image: b9, originalPrice: 450, currentPrice: 430, discount: "-4%" },
  { name: "White Gold Earrings in White Diamonds", image: b10, originalPrice: 450, currentPrice: 430, discount: "-4%" },

];

// Price Filter Component (optional filtering logic placeholder)
const PriceFilter = ({ minLimit = 0, maxLimit = 500, onFilter }) => {
  const [minPrice, setMinPrice] = useState(31);
  const [maxPrice, setMaxPrice] = useState(430);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 1);
    setMaxPrice(value);
  };

  const applyFilter = () => {
    if (onFilter) onFilter(minPrice, maxPrice);
  };

  return (
    <div className="price-filter">
      <h4>Price Filter</h4>
      <div className="price-slider">
        <input type="range" min={minLimit} max={maxLimit} value={minPrice} onChange={handleMinChange} className="range-min" />
        <input type="range" min={minLimit} max={maxLimit} value={maxPrice} onChange={handleMaxChange} className="range-max" />
        <div className="bar" style={{ left: `${(minPrice / maxLimit) * 100}%`, right: `${100 - (maxPrice / maxLimit) * 100}%` }} />
      </div>
      <div className="price-range">
        <span>
          Price: <strong>${minPrice}</strong> — <strong>${maxPrice}</strong>
        </span>
        <button onClick={applyFilter}>Filter</button>
      </div>
    </div>
  );
};

const ProductGrid = () => {
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

      <div className="pagination">
  {/* Previous Button */}
  {currentPage > 1 && (
    <button onClick={() => handlePageChange(currentPage - 1)}>&larr;</button>
  )}

  {/* Show first page always */}
  <button
    onClick={() => handlePageChange(1)}
    className={currentPage === 1 ? "active" : ""}
  >
    1
  </button>

  {/* Show dots if currentPage > 3 */}
  {currentPage > 3 && <span className="dots">...</span>}

  {/* Show pages around current page */}
  {[currentPage - 1, currentPage, currentPage + 1].map((page) => {
    if (page > 1 && page < totalPages) {
      return (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      );
    }
    return null;
  })}

  {/* Show dots if currentPage < totalPages - 2 */}
  {currentPage < totalPages - 2 && <span className="dots">...</span>}

  {/* Show last page */}
  {totalPages > 1 && (
    <button
      onClick={() => handlePageChange(totalPages)}
      className={currentPage === totalPages ? "active" : ""}
    >
      {totalPages}
    </button>
  )}

  {/* Next Button */}
  {currentPage < totalPages && (
    <button onClick={() => handlePageChange(currentPage + 1)}>&rarr;</button>
  )}
</div>

    </div>
  );
};

const Shop = () => {
  const handlePriceFilter = (min, max) => {
    console.log("Filter products between:", min, max);
    // Add filtering logic here if needed
  };

  return (
    <div className="elementor-container">
      <section className="top-section">
        <h1>Shop</h1>
        <p>Home / Shop</p>
      </section>

      <div className="main-grid">
        <div className="product-grid">
          <ProductGrid />
        </div>

        <aside className="sidebar">
          <div className="shop-search-wrapper">
            <div className="shop-search-container">
              <h4 className="shop-search-title">Search Products</h4>
              <div className="shop-search-input">
                <input type="text" placeholder="Search here..." />
                <FaSearch />
              </div>
            </div>
          </div>

          <div className="cart-box">
            <h4>Shopping Cart</h4>
            <p>No products in the cart.</p>
          </div>

          <div className="categories-box">
            <h4>Categories</h4>
            <ul>
              {[
                "Affordable Watches",
                "Gold Watches",
                "Jewelry",
                "Limited Edition Watches",
                "Mechanical Watches",
                "Sailing Watches",
                "Swiss Watches",
                "Vintage Watches",
                "Watches with Gems",
              ].map((cat, i) => (
                <li key={i}>
                  <span>--</span>{" "}
                  <a href={`/${cat.toLowerCase().replace(/ /g, "-")}`}>{cat}</a>
                </li>
              ))}
            </ul>
          </div>

          <PriceFilter onFilter={handlePriceFilter} />

          <div className="tags-box">
            <h4>Shop by Tag</h4>
            <div className="tags">
              {[
                "Accessories",
                "Bracelet",
                "Earrings",
                "Gems",
                "Necklace",
                "Quality",
                "Ring",
                "Watches",
                "Water-resistant",
              ].map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Shop;
