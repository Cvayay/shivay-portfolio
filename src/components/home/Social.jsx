import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.instagram.com/" className="home__social-icon" target='_blank' rel="noreferrer">
            <i className="uil uil-instagram"></i>
        </a>
        
        <a href="https://github.com/" className="home__social-icon" target='_blank' rel="noreferrer">
            <i className="uil uil-github-alt"></i>    
        </a>
        
        <a href="https://www.linkedin.com/" className="home__social-icon" target='_blank' rel="noreferrer">
            <i className="uil uil-linkedin-alt"></i>   
        </a>

        {/* Vertical line for the 'designer' look */}
        <div className="home__social-line"></div>
    </div>
  )
}

export default Social;