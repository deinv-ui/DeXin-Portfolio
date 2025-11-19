import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav: React.FC = () => {
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActive("#home");
  };

  useEffect(() => {
  setActive(window.location.hash || "#home");

  const handleHashChange = () => {
    setActive(window.location.hash || "#home");
  };

  window.addEventListener("hashchange", handleHashChange);
  return () => window.removeEventListener("hashchange", handleHashChange);
}, []);


  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-bg z-50 backdrop-blur-md shadow-md px-6 md:px-20 py-4 flex items-center justify-between font-lato">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={scrollToTop}
          className="text-3xl font-bold text-primary animate-pulse hover:text-yellow-400 hover:drop-shadow-lg transition-all duration-400 flex-shrink-0"
        >
          DEXIN
        </a>

        {/* Links - desktop */}
        <div className="hidden md:flex gap-10 items-center">
          {["#home", "#projects", "#contact"].map((section) => {
            const label =
              section === "#home"
                ? "Home"
                : section === "#projects"
                ? "Projects"
                : "Contact";

            return (
              <a
                key={section}
                href={section}
                onClick={() => setActive(section)}
                className={`relative uppercase font-semibold text-text hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                  active === section ? "after:w-full" : ""
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Hamburger - mobile */}
        <div
          className="md:hidden text-3xl text-text cursor-pointer transition-colors duration-400 hover:text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed inset-0 bg-bg flex flex-col justify-center items-center gap-8 transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          {["#home", "#projects", "#contact"].map((section) => {
            const label =
              section === "#home"
                ? "Home"
                : section === "#projects"
                ? "Projects"
                : "Contact";
            return (
              <a
                key={section}
                href={section}
                onClick={() => {
                  setActive(section);
                  setMenuOpen(false);
                }}
                className={`uppercase font-semibold text-text hover:text-white transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${
                  active === section ? "after:w-full" : ""
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Nav;
