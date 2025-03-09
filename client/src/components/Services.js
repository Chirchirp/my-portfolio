import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <i className="fas fa-chart-line"></i>
            <h3>Data Analysis</h3>
            <p>Transforming complex datasets into clear insights.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-chart-pie"></i>
            <h3>Data Visualization</h3>
            <p>Interactive dashboards and compelling visuals.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-laptop-code"></i>
            <h3>BI Solutions</h3>
            <p>Customized reporting tools and automated workflows.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-file-alt"></i>
            <h3>Predictive Modeling</h3>
            <p>Advanced ML solutions for forecasting trends.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
