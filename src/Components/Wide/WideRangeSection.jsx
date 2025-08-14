import React from "react";
import c1 from "../../assets/c1.jpg";
import c1h from "../../assets/c1h.jpg";
import c2 from "../../assets/c2.jpg";
import c2h from "../../assets/c2h.jpg";
import c3 from "../../assets/c3.jpg";
import c3h from "../../assets/c3h.jpg";
import catBorder from "../../assets/cat_border.png"; // new border image
import "./WideRangeSection.css";

const WideRangeSection = () => {
  return (
    <section className="wide-range-section">
      <div className="wide-range-text">
        <h2>
          Choose From <span>A Wide Range</span>
        </h2>
        <img src={catBorder} alt="Section Border" className="section-border" />

        <p>
          We appreciate that each individual customer’s needs are specific to them.
          We take the time to get to know you personally and ensure that the products
          we design for you meet your requirements.
        </p>
      </div>

      <div className="wide-range-images">
        <div className="image-wrapper">
          <img src={c1} alt="Range 1" className="real-img" />
          <img src={c1h} alt="Range 1 Hover" className="hover-img" />
        </div>

        <div className="image-wrapper">
          <img src={c2} alt="Range 2" className="real-img" />
          <img src={c2h} alt="Range 2 Hover" className="hover-img" />
        </div>

        <div className="image-wrapper">
          <img src={c3} alt="Range 3" className="real-img" />
          <img src={c3h} alt="Range 3 Hover" className="hover-img" />
        </div>
      </div>
    </section>
  );
};

export default WideRangeSection;
