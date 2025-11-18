import React from "react";
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from "react-icons/io";

const Footer: React.FC = () => {
  const permalinks = ["about", "projects", "contact"];
  const socialIcons = [IoLogoFacebook, IoLogoInstagram, IoLogoYoutube];

  return (
    <footer className="bg-gray-900 text-center py-16 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-pink-900 to-gray-900 opacity-50 pointer-events-none"></div>

      {/* Logo */}
      <a
        href="#home"
        className="relative z-10 text-3xl md:text-4xl font-extrabold mb-8 inline-block text-white hover:text-primary transition-colors duration-300"
      >
        De Xin
      </a>

      {/* Permalinks */}
      <ul className="relative z-10 flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 mb-12 text-lg">
        {permalinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className="relative text-white hover:text-primary transition-colors duration-300 capitalize
                         after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
                         after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="relative z-10 flex justify-center gap-6 mb-12">
        {socialIcons.map((Icon, idx) => (
          <a
            key={idx}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 p-3 rounded-full flex items-center justify-center 
                       hover:shadow-lg hover:bg-transparent hover:border hover:text-white hover:border-white 
                       "
          >
            <Icon className="text-2xl md:text-xl" />
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="relative z-10 w-2/3 mx-auto border-t border-gray-700 mb-6"></div>

      {/* Copyright */}
      <p className="relative z-10 text-gray-400 text-sm md:text-base">
        &copy; {new Date().getFullYear()} De Xin. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
