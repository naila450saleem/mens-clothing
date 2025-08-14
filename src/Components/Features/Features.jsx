import React from "react";
import { Tag, Clock, Package } from "lucide-react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features">
      <div className="feature">
        <div className="icon-container"><Tag size={48} /></div>
        <div className="text-container">
          <h3>Lowest Prices Guarantee</h3>
          <p>Free Quote, Free set-up, Free sample for your approval. Totally Low Price Products.</p>
        </div>
      </div>

      <div className="feature">
        <div className="icon-container"><Clock size={48} /></div>
        <div className="text-container">
          <h3>Fast Turn-Around</h3>
          <p>Manufacturing time 12-15 days after approval sample (sample 5-7 days).</p>
        </div>
      </div>

      <div className="feature">
        <div className="icon-container"><Package size={48} /></div>
        <div className="text-container">
          <h3>No Minimum Order</h3>
          <p>There are no minimum orders. No order is too small or too large for us to handle.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
