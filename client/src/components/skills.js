import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div>
            <h3>Data Analysis</h3>
            <p>Python, R, SQL</p>
          </div>
          <div>
            <h3>Data Visualization</h3>
            <p>Tableau, Power BI, D3.js</p>
          </div>
          <div>
            <h3>Machine Learning</h3>
            <p>Scikit-learn, TensorFlow, Keras</p>
          </div>
          <div>
            <h3>BI &amp; Reporting</h3>
            <p>Power BI, Excel, Looker</p>
          </div>
          <div>
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
