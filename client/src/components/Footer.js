import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Pharaoh Kipkirui Chirchir. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com/Chirchirp" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/pharaoh-chirchir-m-sc-0b600b138/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://wa.me/254725674081" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
