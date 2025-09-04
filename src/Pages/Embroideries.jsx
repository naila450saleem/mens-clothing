import React from 'react';
import './Embroideries.css';

const Embroideries = () => {
  const embroideryTypes = [
    {
      id: 1,
      title: "Tackle Twill",
      description: "Tackle Twill Work available in house for all our custom clothing.",
      image: "https://coresportswears.com/pictures/gallery/22_pic.jpg"
    },
    {
      id: 2,
      title: "Flat Embroidery",
      description: "Flate Embroidery Heat Transferable Patches.",
      image: "https://coresportswears.com/pictures/gallery/18_pic.jpg"
    },
    {
      id: 3,
      title: "Sequin Embroidery",
      description: "Beautiful sequin work for special designs.",
      image: "https://coresportswears.com/pictures/gallery/21_pic.jpg"
    },
    {
      id: 4,
      title: "3D Embroidery",
      description: "Dimensional embroidery for a premium look.",
      image: "https://coresportswears.com/pictures/gallery/19_pic.jpg"
    },
    {
      id: 5,
      title: "Chenille Embroidery",
      description: "Classic chenille for a textured finish.",
      image: "https://coresportswears.com/pictures/gallery/20_pic.jpg"
    }
  ];

  return (
    <div className="embroideries-page">
      {/* Breadcrumb */}
      <div className="paginations_001">
        <a href="https://coresportswears.com/">Home</a>
        <span>/</span>
        <span>Embroideries</span>
      </div>

      {/* Page Header */}
      <div className="title_section_002">
        <h1>Embroideries</h1>
        <div className="border_005"></div>
      </div>

      {/* Embroidery Items */}
      <div className="embroidery-container">
        {embroideryTypes.map((item, index) => (
          <React.Fragment key={item.id}>
            <div className="embroidery-row">
              <div className="embroidery-col-left">
                <div className="embroidery-image">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
              <div className="embroidery-col-right">
                <div className="embroidery-content">
                  <h2>{item.title}</h2>
                  <div className="description-box">
                    <p>{item.description}</p>
                  </div>
                  <button className="message-btn">Message Us</button>
                </div>
              </div>
            </div>
            
            {index < embroideryTypes.length - 1 && (
              <div className="divider-line">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='10' viewBox='0 0 100 10'%3E%3Ccircle cx='5' cy='5' r='3' fill='%230066cc'/%3E%3Ccircle cx='20' cy='5' r='3' fill='%230066cc'/%3E%3Ccircle cx='35' cy='5' r='3' fill='%230066cc'/%3E%3Ccircle cx='50' cy='5' r='3' fill='%230066cc'/%3E%3Ccircle cx='65' cy='5' r='3' fill='%230066cc'/%3E%3Ccircle cx='80' cy='5' r='3' fill='%230066cc'/%3E%3Ccircle cx='95' cy='5' r='3' fill='%230066cc'/%3E%3C/svg%3E" alt="divider" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <h2>Interested in Our Embroideries?</h2>
        <p>Contact us for custom embroidery solutions</p>
        <button className="cta-button">Get in Touch</button>
      </div>
    </div>
  );
};

export default Embroideries;