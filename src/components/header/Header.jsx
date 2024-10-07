import React, { Component } from "react";
import CTA from "./CTA";
import ME from "../../assets/Head_Pic.jpg"; // Image 2 (30%)
import BG_IMAGE from "../../assets/header_bg.jpg"; // Image 1 (70%)
import HeaderSocials from "./HeaderSocials";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <div className="header__split">
          <div className="header__image70">
            <div className="header__container">
              <div className="wrapper_description">
                <h1 className="intro-text">
                  <a href="#about" className="name-link">
                    Frontend <br />
                    Developer
                  </a>
                </h1>
                <p className="description">
                  I build scalable and interactive web applications, <br />
                  focusing on intuitive user experiences and modern frontend
                  technologies.
                </p>
                <CTA />
              </div>
            </div>
          </div>{" "}
          {/* 70% width background */}
          {/* <div className="header__image30"></div> */}
        </div>
      </header>
    );
  }
}

export default Header;
