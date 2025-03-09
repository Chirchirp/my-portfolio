// client/src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css'; // Assume you have corresponding CSS

const Header = () => {
  const [shrink, setShrink] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={shrink ? 'header shrink' : 'header'}>
      <div className="logo">Pharaoh</div>
      <nav className={menuActive ? 'active' : ''}>
        <Link to="hero" smooth duration={500}>Home</Link>
        <Link to="about" smooth duration={500}>About</Link>
        <Link to="projects" smooth duration={500}>Projects</Link>
        <Link to="skills" smooth duration={500}>Skills</Link>
        <Link to="services" smooth duration={500}>Services</Link>
        <Link to="contact" smooth duration={500}>Contact</Link>
      </nav>
      <div className="hamburger" onClick={() => setMenuActive(!menuActive)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
