import React, { Component } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./nav.css";

class Nav extends Component {
  constructor() {
    super();
    this.state = { active: "#projects" }; // Set default active link
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return (
      <>
        <nav>
          <a
            onClick={() => this.setState({ active: "#projects" })}
            className={this.state.active === "#projects" ? "active" : ""}
            href="#projects"
          >
            <h3>Projects</h3>
          </a>
          <a
            onClick={() => this.setState({ active: "#about" })}
            className={this.state.active === "#about" ? "active" : ""}
            href="#about"
          >
            <h3>About</h3>
          </a>
          <a
            onClick={() => this.setState({ active: "#contact" })}
            className={this.state.active === "#contact" ? "active" : ""}
            href="#contact"
          >
            <h3>Contact</h3>
          </a>
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
