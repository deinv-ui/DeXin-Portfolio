import React from "react";
import CTA from "./CTA";
import "./header.css";

const Header: React.FC = () => {
  return (
    <header id="home" className="header">
      <div className="blob-background"></div>

      <div className="header__content fade-in">
        <div className="profile-mobile-wrapper">
          <div className="circle-img img1 shadow-glow"></div>
          <div className="profile-info">
            <h2>De Xin</h2>
            <p>Front-End Developer</p>
          </div>
        </div>

        {/* Text Section */}
        <div className="header__text">
          <h1>
            Code <span className="highlight">FOR</span> Impact
          </h1>
          <p>
            I build intuitive, responsive, and scalable front-end interfaces
            using modern frameworks like React, Vue, and Tailwind CSS. Let's
            bring your ideas to life with clean code and bold design.
          </p>
          <CTA />
        </div>

        {/* Image Section */}
        <div className="desktop_wrapper header__image animate-float">
          <div className="image-wrapper">
            <div className="circle-img img1 shadow-glow"></div>
            <div className="profile-info">
              <h2>De Xin</h2>
              <p>Front-End Developer</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
