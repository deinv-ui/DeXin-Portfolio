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

  const navLinks = [
    { id: "#home", label: "Home" },
    { id: "#projects", label: "Projects" },
    { id: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-bg/95 backdrop-blur-md z-[200] shadow-md px-6 md:px-20 py-4 flex items-center justify-between font-lato">
      {/* Brand */}
      <a
        href="#home"
        onClick={scrollToTop}
        className="text-3xl font-bold text-primary animate-pulse hover:text-yellow-400 transition-all duration-400 flex-shrink-0"
      >
        DEXIN
      </a>

      <div className="hidden md:flex gap-10 items-center">
        {navLinks.map(({ id, label }) => (
          <a
            key={id}
            href={id}
            onClick={() => setActive(id)}
            className={`relative uppercase font-semibold text-text hover:text-white transition-colors duration-300
            after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:bg-primary after:transition-all after:duration-300 
            ${active === id ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
          >
            {label}
          </a>
        ))}
      </div>

      <div
        className="md:hidden text-3xl text-text cursor-pointer hover:text-primary transition-all duration-400 z-[300]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`md:hidden fixed top-[70px] inset-x-0 bottom-0 
        bg-black/90 backdrop-blur-md flex flex-col justify-center items-center gap-10
        transition-all duration-300 ease-in-out z-[250]
        ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-full"
        }`}
      >
        {navLinks.map(({ id, label }) => (
          <a
            key={id}
            href={id}
            onClick={() => {
              setActive(id);
              setMenuOpen(false);
              const section = document.querySelector(id);
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className={`uppercase font-bold text-2xl text-white hover:text-primary transition-all duration-300 
            relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-primary 
            ${active === id ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
