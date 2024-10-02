import { Component } from "react";
import CTA from "./CTA";
import ME from "../../assets/Head_Pic.jpg";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container header__container">
          <div className="wrapper_description">
            <h5>Hello I'm</h5>
            <a href="#about" className="name-link">
              <h1>De Xin</h1>
              <span className="arrow">→</span>
            </a>
            <div className="text-light">Front End Developer</div>
          </div>
          <CTA />
          <div className="header__socials">
            <HeaderSocials />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
