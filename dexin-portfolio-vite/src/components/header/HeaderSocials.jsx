import { Component } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
class HeaderSocials extends Component {
  render() {
    return (
      <div className="header__socials">
        <a href="https://www.linkedin.com/in/de-xin-tan/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/deinv-ui" target="_blank">
          <FaGithub />
        </a>
        <a href="https://dribble.com" target="_blank">
          <FiDribbble />
        </a>
      </div>
    );
  }
}
export default HeaderSocials;
