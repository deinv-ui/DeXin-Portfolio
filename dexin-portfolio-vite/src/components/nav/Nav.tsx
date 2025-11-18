import React, { Component } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

interface NavState {
  active: string;
  menuOpen: boolean;
}

class Nav extends Component<{}, NavState> {
  constructor(props: {}) {
    super(props);
    this.state = { active: "#home", menuOpen: false };
  }

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.setState({ active: "#home" });
  };

  toggleMenu = () => {
    this.setState((prev) => ({ menuOpen: !prev.menuOpen }));
  };

  setActiveLink = (link: string) => {
    this.setState({ active: link, menuOpen: false });
  };

  render() {
    const links = [
      { href: "#home", label: "Home" },
      { href: "#projects", label: "Projects" },
      { href: "#contact", label: "Contact" },
    ];

    return (
      <>
        <nav className="fixed w-full flex items-center justify-between px-8 py-4 bg-gray-900 text-white z-50 shadow-md">
          {/* Logo */}
          <a
            href="#home"
            onClick={this.scrollToTop}
            className="text-3xl font-bold tracking-wider hover:text-primary transition-colors"
          >
            DEXIN
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => this.setActiveLink(link.href)}
                className="relative font-medium text-gray-300 hover:text-primary transition-colors px-1 py-1"
              >
                {link.label}
                {/* Animated underline */}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-primary transition-all duration-300 ${
                    this.state.active === link.href ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden text-2xl cursor-pointer" onClick={this.toggleMenu}>
            {this.state.menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>

          {/* Mobile Menu */}
          {this.state.menuOpen && (
            <div className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center py-6 space-y-4 md:hidden shadow-lg">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => this.setActiveLink(link.href)}
                  className={`relative font-medium text-gray-300 hover:text-primary transition-colors px-2 py-1`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-primary transition-all duration-300 ${
                      this.state.active === link.href ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              ))}
            </div>
          )}
        </nav>

        {/* Scroll to Top Button */}
        <button
          className="fixed bottom-6 right-6 bg-primary text-white px-4 py-2 rounded-lg shadow-lg hover:bg-pink-600 transition-colors"
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
