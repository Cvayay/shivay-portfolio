import React from 'react';

const ScrollDown = () => {
  return (
    <div className='home__scroll'>
      {/* Optional: The 'Open to Work' status badge found in the video */}
      <div className="home__status">
        <div className="status__indicator">✦</div>
        <div className="status__text">
          <span className="status__label">STATUS</span>
          <span className="status__value">Open to work</span>
        </div>
      </div>

      <a href="#about" className="home__scroll-button">
        <span className='home__scroll-name'>SCROLL</span>
        <div className="home__scroll-line"></div>
      </a>
    </div>
  )
}

export default ScrollDown;