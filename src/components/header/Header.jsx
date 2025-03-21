import React from "react";
import CTA from "./CTA";
import "./header.css";

const Header = () => {
  return (
    <header id="home" className="header">
      <div className="header__content">
        {/* Left Section */}
        <div className="header__text">
          <h1>
            BUILD <span className="highlight">FOR</span> IMPACT
          </h1>
          <p>
            Crafting seamless, interactive, and high-performing web experiences.
            Let's turn ideas into reality with clean code and modern design.
          </p>
          {/*This is the buttons*/}
          <CTA />
        </div>

        {/* Right Section with Images */}
        <div className="header__images">
          {/* <div className="circle-img img1"></div> */}
          <div className="circle-img img2"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
