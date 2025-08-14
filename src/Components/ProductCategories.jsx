import React from "react";
import "./ProductCategories.css";

// Import images from src/assets
import c5 from "../assets/c5.jpg";
import c5h from "../assets/c5h.jpg";
import c6 from "../assets/c6.jpg";
import c6h from "../assets/c6h.jpg";
import c7 from "../assets/c7.jpg";
import c7h from "../assets/c7h.jpg";
import c8 from "../assets/c8.jpg";
import c8h from "../assets/c8h.jpg";

const ProductCategories = () => {
  const products = [
    {
      link: "products/street-wears/pullover-hoodies.html",
      img: c5,
      hoverImg: c5h,
    },
    {
      link: "products/custom-shorts/running-shorts.html",
      img: c6,
      hoverImg: c6h,
    },
    {
      link: "products/jackets/polar-fleece-jackets.html",
      img: c7,
      hoverImg: c7h,
    },
    {
      link: "products/head-wear-accessories/accessories.html",
      img: c8,
      hoverImg: c8h,
    },
  ];

  return (
    <div className="product-categories">
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <div className="col-lg-6" key={index}>
              <a href={product.link}>
                <div className="product-category-box">
                  <img src={product.img} alt="" className="real-img" />
                  <img src={product.hoverImg} alt="" className="hover-img" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
