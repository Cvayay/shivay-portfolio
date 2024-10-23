import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid" >
        <div className="about__box ">
        <i class="uil uil-award about__icon"></i>

            <h3 className="about__title">completed</h3>
                <span className="about__subtitle">5 projects</span>
        </div>

        <div className="about__box ">
        <i class="uil uil-bag about__icon"></i>

            <h3 className="about__title">experience</h3>
                <span className="about__subtitle">3 year</span>
            
        </div>

        <div className="about__box">
        <i class="uil uil-comment-question about__icon"></i>

            <h3 className="about__title">support</h3>
                <span className="about__subtitle">Online</span>
        </div>
    </div>
  )
}

export default Info
