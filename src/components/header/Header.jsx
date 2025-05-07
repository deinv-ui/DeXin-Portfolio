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
            Code <span className="highlight">FOR</span> Impact
          </h1>
          <p>
            I build intuitive, responsive, and scalable front-end interfaces
            using modern frameworks like React, Vue, and Tailwind CSS. Let's
            bring your ideas to life with clean code and bold design.
          </p>

          {/* Call-To-Action Buttons */}
          <CTA />
        </div>

        {/* Right Section - You can uncomment this if you want to add an image */}
        {/* <div className="header__image">
          <div className="circle-img img1"></div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
