import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './BackToTop.css';

function BackToTop() {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  return (
    <div className="back-to-top" onClick={scrollToTop}>
      <i className="fas fa-chevron-up"></i>
    </div>
  );
}

export default BackToTop;
