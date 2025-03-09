// client/src/components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => (
  <section id="hero" className="hero">
    <div className="profile-photo">
      <img src="/assets/pharaoh-photo.jpg" alt="Pharaoh Kipkirui Chirchir" />
    </div>
    <div className="hero-content">
      <h1>Pharaoh Kipkirui Chirchir</h1>
      <p>Data Analyst | BI Specialist | ML &amp; AI Innovator</p>
      <div className="education">
        <p><strong>MSc in Data Analytics</strong> – Nexford University (Nov 2023 – Dec 2024)</p>
        <p><strong>Bachelor in Economics &amp; Statistics</strong> – Chuka University (Sep 2012 – Nov 2016)</p>
      </div>
    </div>
  </section>
);

export default Hero;
