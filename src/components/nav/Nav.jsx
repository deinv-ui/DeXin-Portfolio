import React, { Component } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Importing hamburger icons
import "./nav.css";

class Nav extends Component {
  constructor() {
    super();
    this.state = { active: "#home", menuOpen: false }; // Added menuOpen state
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.setState({ active: "#home" }); // Reset active link to "Home"
  }

  toggleMenu = () => {
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen })); // Toggle menu
  };

  render() {
    return (
      <>
        <nav>
          <div className="navbar-brand">
            <a style={{ fontSize: "3rem" }} href="#home">
              DEXIN
            </a>
          </div>

          <div
            className={`navbar-links ${this.state.menuOpen ? "active" : ""}`}
          >
            <a
              onClick={() => this.setState({ active: "#home" })}
              className={this.state.active === "#home" ? "active" : ""}
              href="#home"
            >
              <div>Home </div>
            </a>

            <a
              onClick={() => this.setState({ active: "#projects" })}
              className={this.state.active === "#projects" ? "active" : ""}
              href="#projects"
            >
              <div>Projects</div>
            </a>
            <a
              onClick={() => this.setState({ active: "#contact" })}
              className={this.state.active === "#contact" ? "active" : ""}
              href="#contact"
            >
              <div>Contact</div>
            </a>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="menu-icon" onClick={this.toggleMenu}>
            {this.state.menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </nav>

        <button
          className="go-to-top-button"
          onClick={this.scrollToTop}
          aria-label="Go to Top"
        >
          ↑
        </button>
      </>
    );
  }
}

export default Nav;
