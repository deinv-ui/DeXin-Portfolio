import React from "react";
import CTA from "./CTA";

// Reusable profile card component
const ProfileCard: React.FC<{ name: string; role: string; className?: string }> = ({
  name,
  role,
  className = "",
}) => (
  <div className={`profile-card ${className}`}>
    <div className="circle-img img1 shadow-glow" />
    <div className="profile-info">
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  </div>
);

const Header: React.FC = () => {
  return (
    <header id="home" className="header relative overflow-hidden">
      {/* Decorative background */}
      <div className="blob-background absolute inset-0 -z-10" />

      <div className="header__content fade-in flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12">
        {/* Mobile Profile */}
        <div className="profile-mobile-wrapper md:hidden mb-8">
          <ProfileCard name="De Xin" role="Front-End Developer" />
        </div>

        {/* Text Section */}
        <div className="header__text max-w-lg text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Code <span className="highlight text-yellow-400">FOR</span> Impactdd
          </h1>
          <p className="text-gray-600 mb-6">
            I build intuitive, responsive, and scalable front-end interfaces using
            modern frameworks like React, Vue, and Tailwind CSS. Let's bring your ideas
            to life with clean code and bold design.
          </p>
          <CTA />
        </div>

        {/* Desktop Profile */}
        <div className="desktop_wrapper header__image animate-float hidden md:block">
          <ProfileCard name="De Xin" role="Front-End Developer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
