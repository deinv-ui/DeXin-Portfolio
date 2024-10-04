import React, { Component } from "react";
import CTA from "./CTA";
import ME from "../../assets/Head_Pic.jpg";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header__container">
          <div className="wrapper_description">
            <h1 className="intro-text">
              Hello, I’m{" "}
              <a href="#about" className="name-link">
                De Xin
                <span className="arrow">←</span>
              </a>
            </h1>
            <h2 className="role-title">Front End Developer</h2>
            <p className="description">
              I build scalable and interactive web applications, focusing on
              intuitive user experiences and modern frontend technologies.
            </p>
            <CTA />
          </div>

          {/* <div className="header__socials">
            <HeaderSocials />
          </div> */}
        </div>
      </header>
    );
  }
}

export default Header;
