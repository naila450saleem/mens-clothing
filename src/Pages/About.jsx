import React, { useState, useEffect } from 'react';
import './About.css';
import about1 from '../assets/about-1.jpg';
import about2 from '../assets/about-2.jpg';
import about3 from '../assets/about-3.jpg';
// import about4 from '../assets/about-1.jpg';

const About = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    stores: 0,
    itemsFixed: 0,
    professionals: 0,
    locations: 0
  });

  const [skills, setSkills] = useState({
    engraving: 0,
    repair: 0,
    resizing: 0,
    maintenance: 0
  });

  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const members = [
      { name: "David Perkins", role: "Repair Master", image: about1 },
      { name: "Arnold Stevens", role: "Jewelry Designer", image: about2 },
      { name: "Mike Peterson", role: "Repair Master", image: about3 },
      // { name: "James Collins", role: "Jewelry Master", image: about1 }
    ];
    setTeamMembers(members);

    const targetCounters = {
      clients: 1500, stores: 25, itemsFixed: 5000, professionals: 50, locations: 15
    };

    const targetSkills = {
      engraving: 60, repair: 90, resizing: 40, maintenance: 80
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        clients: Math.floor(targetCounters.clients * progress),
        stores: Math.floor(targetCounters.stores * progress),
        itemsFixed: Math.floor(targetCounters.itemsFixed * progress),
        professionals: Math.floor(targetCounters.professionals * progress),
        locations: Math.floor(targetCounters.locations * progress)
      });

      setSkills({
        engraving: Math.floor(targetSkills.engraving * progress),
        repair: Math.floor(targetSkills.repair * progress),
        resizing: Math.floor(targetSkills.resizing * progress),
        maintenance: Math.floor(targetSkills.maintenance * progress)
      });

      if (currentStep >= steps) clearInterval(interval);
    }, stepDuration);
  }, []);

  return (
    <div className="about">
      <section className="hero">
        <div className="container">
          <h1>Men’s Clothing Designed for Confidence and Comfort</h1>
          <p>
           Men’s clothing combines timeless elegance with modern comfort, empowering every man to express his unique style confidently. From sharp tailoring to casual essentials, it adapts seamlessly to every occasion.
          </p>
          <span className="author">David Wiye</span>
        </div>
      </section>

      <section className="stats">
        <div className="container grid">
          {Object.entries(counters).map(([key, value]) => (
            <div key={key}>
              <h3>{value.toLocaleString()}</h3>
              <p>{key.replace(/([A-Z])/g, ' $1')}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="skills">
        <div className="container">
          <h2>Our Perfect Skills</h2>
          <p>
            With precision and dedication, we bring expertise to every stitch, ensuring quality and style in all our creations.
          </p>
          <div className="skill-bars">
            {Object.entries(skills).map(([key, value]) => (
              <div key={key} className="skill-bar">
                <div className="skill-label">
                  <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                  <span>{value}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2>The Best of Professionals</h2>
          <p>Our team of skilled experts is committed to delivering exceptional quality and craftsmanship in every detail.</p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <img src={member.image} alt={member.name} />
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
                 <div className="social-icons">
    <a href="#"><i className="fab fa-facebook-f"></i></a>
    <a href="#"><i className="fab fa-instagram"></i></a>
    <a href="#"><i className="fab fa-twitter"></i></a>
  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="philosophy">
        <div className="container">
          <h2>Our Philosophy: Love What You Do</h2>
          <p>
            When passion meets skill, every detail reflects our commitment to excellence.
          </p>
          <button className="shop-btn">Go To Shop</button>
        </div>
      </section>

      <section className="testimonial">
        <div className="container">
          <h2>How It Begins</h2>
          <div className="testimonial-box">
            <p>
              "Our journey begins with trust and ends with your complete satisfaction."
              </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
