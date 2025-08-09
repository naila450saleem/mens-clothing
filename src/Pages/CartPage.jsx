import React from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";
import "./CartPage.css";

const CartPage = () => {
  return (
    <div className="cart-page">
      {/* Header */}
      <header className="cart-header">
        <div className="cart-header-left">
          <Link to="/" className="logo">
            Velvour Shop
          </Link>
          <nav className="nav-links">
            <Link to="/mens">Men's</Link>
            <Link to="/boys">Boys</Link>
            <Link to="/girls">Girl's</Link>
          </nav>
        </div>

        <div className="cart-header-right">
          <Search className="icon" />
          <Link to="/login">
            <User className="icon" />
          </Link>
          <Link to="/cart" className="cart-icon-wrapper">
            <ShoppingCart className="icon" />
            <span className="cart-count">0</span>
          </Link>
        </div>
      </header>

      {/* Cart Content */}
      <main className="cart-content">
        <h2>Your cart</h2>

        <div className="empty-cart-message">
          <p>Your cart is currently empty.</p>
          <Link to="/shop" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>

        <div className="instructions">
          <label htmlFor="instructions">Order special instructions</label>
          <textarea
            id="instructions"
            placeholder="Write any note for seller..."
          />
        </div>

        <div className="summary">
          <p className="tax-note">
            Taxes included. Discounts and shipping calculated at checkout.
          </p>
          <div className="total">
            <p>Estimated total:</p>
            <strong>Rs.0.00 PKR</strong>
          </div>
        </div>

        <button className="checkout-button" disabled>
          Checkout
        </button>
      </main>
    </div>
  );
};

export default CartPage;
