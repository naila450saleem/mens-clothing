import React from "react";
import "./Fabrics.css"; 

// Images import
import headingDivider from "../assets/heading_001_img.png";
import img1 from "../assets/49_pic.jpg";
import img2 from "../assets/12_pic.jpg";
import img3 from "../assets/24_pic.jpg";
import img4 from "../assets/25_pic.jpg";
import img5 from "../assets/26_pic.jpg";
import img6 from "../assets/27_pic.jpg";
import img7 from "../assets/28_pic.jpeg";
import img8 from "../assets/29_pic.jpg";
import img9 from "../assets/30_pic.jpg";
import img10 from "../assets/31_pic.jpg";
import img11 from "../assets/32_pic.jpg";
import img12 from "../assets/33_pic.jpg";
import img13 from "../assets/34_pic.jpg";
import img14 from "../assets/35_pic.jpg";
import img15 from "../assets/36_pic.jpg";
import img16 from "../assets/37_pic.jpg";
import img17 from "../assets/38_pic.jpg";
import img18 from "../assets/39_pic.jpg";
import img19 from "../assets/40_pic.jpeg";
import img20 from "../assets/41_pic.jpg";
import img21 from "../assets/42_pic.jpg";
import img22 from "../assets/43_pic.jpg";
import img23 from "../assets/44_pic.jpg";
import img24 from "../assets/45_pic.jpg";
import img25 from "../assets/46_pic.jpg";
import img26 from "../assets/50_pic.jpg";
import img27 from "../assets/52_pic.jpg";
import img28 from "../assets/53_pic.jpg";
import img29 from "../assets/54_pic.jpg";

// ✅ Reusable Section Component
const FabricSection = ({ image, title, desc }) => (
  <>
    <div className="row">
      <div className="col-lg-3">
        <div className="left">
          <img src={image} alt={title} />
        </div>
      </div>
      <div className="col-lg-9">
        <div className="right">
          <h1>{title}</h1>
          {desc && <p>{desc}</p>}
        </div>
      </div>
    </div>
    <div className="row" style={{ padding: "20px 0" }}>
      <div className="col-lg-12" style={{ lineHeight: "0px", textAlign: "center" }}>
        <img src={headingDivider} alt="divider" />
      </div>
    </div>
  </>
);

const Fabrics = () => {
  const data = [
    { image: img1, title: "Dri Fit Polyester Fabric", desc: "Sweat evaporating, Sweat spreading, Absorbing sweat, Eco Friendly, Feel Soft, Moisture Wicking, Breathable, UPF 35+, Anti Static and Anti Pilling fabric." },
    { image: img2, title: "Cotton Single Jersey Fabric", desc: "Single Jersey Fabric made of different compositions & GSM as per customer's demand." },
    { image: img3, title: "Terry Cotton Fabric", desc: "" },
    { image: img4, title: "Sweat Fleece Fabric", desc: "" },
    { image: img5, title: "Polyester Interlock Fabric", desc: "" },
    { image: img6, title: "Dazzle Fabric", desc: "100% Polyester Dazzle Fabric, Quick Dry Moisture Wicking Fabric used for sports wear products." },
    { image: img7, title: "Pique Cotton Fabric", desc: "Mostly used for polo shirts." },
    { image: img8, title: "Wool Fabric", desc: "Mostly used for varsity Jackets" },
    { image: img9, title: "Polyester Micro Mesh Fabric", desc: "Quick Dry Moisture wicking Micro Mesh Fabric." },
    { image: img10, title: "Sherpa Fabric", desc: "Sherpa Fabric mostly used for winter coats, jackets, hoodies etc." },
    { image: img11, title: "Flannel Fabric", desc: "Mostly used for winter collard shirts." },
    { image: img12, title: "Non woven Fabric", desc: "Mostly used for tote bags and cheap packaging." },
    { image: img13, title: "Cotton Interlock Fabric", desc: "Mostly used for winter running wear products." },
    { image: img14, title: "Canvas Fabric", desc: "Mostly used for bags." },
    { image: img15, title: "Space Dyed Polyester Fabric", desc: "Mostly used for fitness wear and sports wear products like leggings, shirts etc." },
    { image: img16, title: "Velour Fabric", desc: "Velour Fabric/Velvet Fabric." },
    { image: img17, title: "Spandex/Lycra Fabric", desc: "Spandex Fabric is made of different fabric compositions like polyester spandex, nylon spandex, cotton spandex etc." },
    { image: img18, title: "Waterproof Taslon Fabric", desc: "" },
    { image: img19, title: "Tefta Fabric", desc: "Waterproof Tefta Fabric" },
    { image: img20, title: "Tricot Fabric", desc: "Tricot Fabric mostly used for sports wear products." },
    { image: img21, title: "Quilted Fabric", desc: "" },
    { image: img22, title: "Satin Fabric", desc: "Mostly used for fashion jackets, promotional flags etc." },
    { image: img23, title: "Ribbed Fabric", desc: "" },
    { image: img24, title: "Rip Stop Fabric", desc: "Mostly used for windbreaker jackets, hoodies etc." },
    { image: img25, title: "Cotton Slub Jersey Fabric", desc: "" },
    { image: img26, title: "Softshell DWR Coated Fabric", desc: "Softshell Fleece lined DWR coated fabric. Best Warm thick fabric for outdoor jackets, snow pants etc." },
    { image: img27, title: "Micro Stretch Tpu Coated Fabric", desc: "100% waterproof breathable. 10k to 20k available for outerwear products." },
    { image: img28, title: "Heavy weight TPU Coated Fabric", desc: "Heavy weight tpu coated waterproof breathable fabric. Best for outdoor sportswear products." },
    { image: img29, title: "Water Replant Memory Fabric", desc: "Water replant memory fabric use for outerwear windbreakers and covers." }
  ];

  return (
    <div className="label-tags-container">
      {/* Breadcrumbs */}
      <div className="paginations_001">
        <a href="/">Home</a>
        <span>/</span>
        <span>Fabrics</span>
      </div>

      {/* Title */}
      <h1 className="fabric-title">Fabrics</h1>
      <div className="border_005"></div>

      {/* Fabrics Sections */}
      {data.map((item, index) => (
        <FabricSection key={index} image={item.image} title={item.title} desc={item.desc} />
      ))}

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
        <input type="email" placeholder="Enter Your Email Address..." />
      </div>
    </div>
  );
};

export default Fabrics;
