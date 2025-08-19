import React from "react";
import "./ServicesOffered.css";

// Import images from src/assets
import s1 from "../../assets/services_offerd_box1.jpg";
import s2 from "../../assets/services_offerd_box2.jpg";
import s3 from "../../assets/services_offerd_box3.jpg";
import s4 from "../../assets/services_offerd_box4.jpg";
import s5 from "../../assets/services_offerd_box5.jpg";
import s6 from "../../assets/services_offerd_box6.jpg";
import s7 from "../../assets/services_offerd_box7.jpg";
import s8 from "../../assets/services_offerd_box8.jpg";

const services = [
  {
    img: s1,
    title: <>CUSTOM <br /> EMBROIDERY</>,
    desc: "Embroidery available on apparels and Sportwear like T-Shirt, Hoodies, Tracksuits, sport uniform’s etc. Custom design’s, logo, picture as per requirements.",
  },
  {
    img: s2,
    title: <>CUSTOM <br /> SUBLIMATION</>,
    desc: "Sublimation available on apparels and Sportwear like T-Shirt, Hoodies, Tracksuits, sport uniform’s etc. Custom design’s, logo, picture as per requirements.",
  },
  {
    img: s3,
    title: <>CUSTOM SCREEN <br /> PRINTING</>,
    desc: "Screen Printing available on apparels and Sportwear like T-Shirt, Hoodies, Tracksuits, Sports uniform etc. Custom design’s, logo, picture as per requirements.",
  },
  {
    img: s4,
    title: <>FREE DESIGNING & <br /> MOCKUPS</>,
    desc: "Free Mockup and designs available on apparels and Sportwear like T-Shirt, Hoodies, Tracksuits, sport uniform’s etc. Custom designs, logos, pictures as per requirements.",
  },
  {
    img: s5,
    title: <>CUSTOM RHINESTONE <br /> TRANSFER</>,
    desc: "Rhinestone available on apparels and Sportwear like T-Shirt, Hoodies, Tracksuits, sport uniform’s etc. Custom designs, logos, pictures as per requirements.",
  },
  {
    img: s6,
    title: <>CUSTOM VINYL FOIL<br /> PRINTING</>,
    desc: "Vinyl Foil Printing available on apparels and Sportwear like T-Shirt, Hoodies, Tracksuits, sport uniform’s etc. Custom designs, logos, pictures as per requirements.",
  },
  {
    img: s7,
    title: <>CUSTOM REFLECTIVE<br /> PRINTING</>,
    desc: "Reflective printing available on apparels and Sportwear like T-Shirt, Hoodies, Tracksuits, sport uniform’s etc. Custom designs, logos, pictures as per requirements.",
  },
  {
    img: s8,
    title: <>CUSTOM CHENILLE<br /> EMBROIDERY</>,
    desc: "Chenille Embroidery available on apparels and Sportwear like T-Shirt, Hoodies, Tracksuits, sport uniform’s etc. Custom designs, logos, pictures as per requirements.",
  },
];

const ServicesOffered = () => {
  return (
    <div className="services-offered">
      <div className="container">
        <div className="title-section">
          <h1>SERVICES OFFERED</h1>
          <div className="borders">
            <span className="border-1"></span>
            <span className="border-2"></span>
            <span className="border-3"></span>
          </div>
          <p>
            We have IN HOUSE Screen Printing, Sublimation Printing, Computerized Embroidery, Artwork design & digitizing. We also have Facilities of custom
            labels/Tags, Leather Patches, custom printed Poly Bags, PVC & Rubber Logos, Tag Cards and custom Fabric etc. You can be assured of receiving a superior
            level of service, quality workmanship & a very fast turnaround time on all types of custom orders.
          </p>
        </div>

       <div className="services-grid">
  {services.map((service, index) => (
    <div className="service-box" key={index}>
      <div className="image">
        <img src={service.img} alt={service.title} />
        <h2>{service.title}</h2> {/* Move h2 here to overlap image */}
      </div>
      <div className="detail">
        <p>{service.desc}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default ServicesOffered;
