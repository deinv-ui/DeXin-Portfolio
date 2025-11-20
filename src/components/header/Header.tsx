import React from "react";
import CTA from "./CTA";
import profileImg from "../../assets/profile_picture.jpeg";

const Header: React.FC = () => {
  return (
    <header
      id="home"
      className="relative flex flex-col justify-start md:justify-center items-center min-h-screen bg-bg text-text px-6 pt-24 pb-16"
    >
      <div className="absolute top-0 right-0 w-3/5 h-full bg-gradient-to-br from-secondary/5 via-primary/10 pointer-events-none" />

      <div className="relative flex flex-col-reverse md:flex-row items-center justify-between max-w-[1200px] w-full gap-12 md:gap-16">
        <div className="flex-1 min-w-[280px] text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold uppercase mb-6 md:mb-8 leading-tight">
            Code{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-pink-500 bg-clip-text text-transparent font-black drop-shadow-[0_2px_10px_rgba(236,72,153,0.3)]">
              FOR
            </span>{" "}
            Impact
          </h1>
          <p className="text-light text-lg md:text-xl max-w-[90%] md:max-w-lg mb-8 md:mb-10 leading-relaxed">
            I build intuitive, responsive, and scalable front-end interfaces
            using modern frameworks like React, Vue, and Tailwind CSS. Let's
            bring your ideas to life with clean code and bold design.
          </p>
          <CTA />
        </div>

        {/* Profile image */}
        <div className="flex-1 min-w-[280px] md:flex hidden md:justify-end">
          <div className="flex flex-col items-center">
            <div
              className="w-56 h-56 md:w-64 md:h-64 rounded-full shadow-[0_0_0_4px_rgba(236,72,153,0.15),0_8px_20px_rgba(250,44,216,0.4),inset_0_0_10px_rgba(255,255,255,0.05)] transition-transform duration-500 hover:-translate-y-2 bg-cover bg-center"
              style={{ backgroundImage: `url(${profileImg})` }}
            />
            <div className="mt-4 text-center md:text-center">
              <h2 className="text-2xl md:text-3xl font-bold">De Xin</h2>
              <p className="text-light text-sm md:text-base">
                Front-End Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
