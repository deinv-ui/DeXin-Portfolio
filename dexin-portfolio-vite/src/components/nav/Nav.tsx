import React, { Component } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./nav.css";

interface NavState {
  active: string;
  menuOpen: boolean;
}

class Nav extends Component<{}, NavState> {
  constructor(props: {}) {
    super(props);
    this.state = { active: "#home", menuOpen: false };
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.setState({ active: "#home" });
  }

  toggleMenu = () => {
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
  };

  setActiveLink = (link: string) => {
    this.setState({ active: link });
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

          <div className={`navbar-links ${this.state.menuOpen ? "active" : ""}`}>
            <a
              onClick={() => this.setActiveLink("#home")}
              className={this.state.active === "#home" ? "active" : ""}
              href="#home"
            >
              <div>Home</div>
            </a>

            <a
              onClick={() => this.setActiveLink("#projects")}
              className={this.state.active === "#projects" ? "active" : ""}
              href="#projects"
            >
              <div>Projects</div>
            </a>

            <a
              onClick={() => this.setActiveLink("#contact")}
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
