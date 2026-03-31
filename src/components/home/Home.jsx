import React from 'react';
import "./home.css";
import Social from './Social';
// import homeData from '../home/Data'; // This is your UI component (Data.jsx)
import ScrollDown from './ScrollDown';
import { homeData, navLinks } from './Data'; // This is your info from src/data.jsx

// Import your images - ensure these exist in src/assets/
import ChildPhoto from "../../assets/me-child.jpg"; 
import CurrentPhoto from "../../assets/me-current.jpg";

const Home = () => {
  return (
    <section className="home section" id='home'>
      <div className="home__container container grid">
        <div className="home__content grid">
          {/* 1. Social Links (Sidebar) */}
          <Social />

            <div className="home__data">
                <h1 className="home__title">{homeData.firstName} {homeData.lastName}</h1>
                <h3 className="home__subtitle">{homeData.subtitle}</h3>
                <p className="home__description">{homeData.description}</p>
                <a href="#contact" className="button button--flex">Say Hello</a>
            </div>

          {/* 3. The Interactive Collage (Right Side) */}
          <div className="home__collage">
            {/* Background decorative glow */}
            <div className="collage__blob"></div>

            {/* Childhood Polaroid */}
            <div className="collage__card card--small">
              <img src={ChildPhoto} alt="Childhood" className="collage__img" />
              <span className="collage__caption">
                {homeData.captions.childhood}
              </span>
            </div>

            {/* Current Polaroid */}
            <div className="collage__card card--large">
              <img src={CurrentPhoto} alt="Current" className="collage__img" />
              <span className="collage__caption">
                {homeData.captions.current}
              </span>
            </div>

            {/* Handwritten Floating Notes */}
            {homeData.notes && homeData.notes.map((note, index) => (
              <div key={index} className={`floating__note note--${note.position}`}>
                {note.text}
              </div>
            ))}
          </div>
        </div>

        {/* 4. Scroll Down Indicator & Status Badge */}
        <ScrollDown />
      </div>
    </section>
  )
}

export default Home;