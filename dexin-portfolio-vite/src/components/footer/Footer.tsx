import { Component } from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <a href="#" className="footer__logo">
          De Xin
        </a>
        <ul className="permalinks">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <IoLogoFacebook className="social_icon" />
          </a>
          <a href="https://instagram.com/dexin.c" target="_blank" rel="noreferrer">
            <IoLogoInstagram className="social_icon" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <IoLogoYoutube className="social_icon" />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; De Xin. All rights reserved</small>
        </div>
      </footer>
    );
  }
}

export default Footer;
