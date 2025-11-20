import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navLinks = [
  { id: "#home", label: "Home" },
  { id: "#projects", label: "Projects" },
  { id: "#contact", label: "Contact" },
];

const Nav: React.FC = () => {
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hash = window.location.hash || "#home";
    setActive(hash);

    const handleHashChange = () => setActive(window.location.hash || "#home");
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActive("#home");
    setMenuOpen(false);
  };

  const handleLinkClick = (id: string) => {
    setActive(id);
    setMenuOpen(false);
    const section = document.querySelector(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-bg/95 backdrop-blur-md z-50 shadow-md px-6 md:px-20 py-4 flex items-center justify-between font-lato">
        <a
          href="#home"
          onClick={scrollToTop}
          className="text-3xl font-bold text-primary animate-pulse hover:text-yellow-400 transition-colors duration-300"
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
                after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-primary after:transition-all after:duration-300
                ${active === id ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
            >
              {label}
            </a>
          ))}
        </div>

        {!menuOpen && (
          <div
            className="md:hidden text-3xl text-text cursor-pointer hover:text-primary transition-colors duration-300 z-50"
            onClick={() => setMenuOpen(true)}
          >
            <AiOutlineMenu />
          </div>
        )}
      </nav>

      <div
        className={`md:hidden fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col justify-start items-center gap-10 transition-transform duration-300 ease-in-out z-50
          ${menuOpen ? "translate-y-0 opacity-100 pointer-events-auto p-40" : "-translate-y-full opacity-0 pointer-events-none"}`}
      >
        <div
          className="absolute top-6 right-6 text-3xl text-white cursor-pointer hover:text-primary transition-colors duration-300"
          onClick={() => setMenuOpen(false)}
        >
          <AiOutlineClose />
        </div>

        {navLinks.map(({ id, label }) => (
          <a
            key={id}
            href={id}
            onClick={() => handleLinkClick(id)}
            className={`uppercase font-bold text-2xl text-white hover:text-primary transition-colors duration-300
              relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-primary
              ${active === id ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Nav;
