import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 fixed left-4 bottom-24 z-10">
      <a
        href="https://www.linkedin.com/in/de-xin-tan/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-light hover:text-blue-600 transition-colors text-2xl"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/deinv-ui"
        target="_blank"
        rel="noopener noreferrer"
        className="text-light hover:text-white transition-colors text-2xl"
      >
        <FaGithub />
      </a>
      <a
        href="https://dribble.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-light hover:text-pink-500 transition-colors text-2xl"
      >
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
