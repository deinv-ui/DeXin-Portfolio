import React from "react";
import ME from "../../assets/Head_Pic.jpg";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-8">
      <h5 className="text-sm text-light">Get To Know</h5>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">About Me</h2>

      <div className="flex flex-col md:grid md:grid-cols-[35%_50%] md:gap-[15%] items-center md:items-start">
        {/* Image */}
        <div className="flex justify-center md:justify-start mb-8 md:mb-0">
          <div className="w-64 sm:w-72 md:w-full aspect-square rounded-2xl bg-gradient-to-br from-transparent via-primary to-transparent grid place-items-center">
            <div className="overflow-hidden rounded-2xl transform rotate-12 transition-transform duration-300 hover:rotate-0">
              <img src={ME} alt="Me" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-8 text-light text-center md:text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: BsAwardFill, title: "Experience", detail: "3+ Years Working" },
              { icon: FiUsers, title: "Clients", detail: "200+ Worldwide" },
              { icon: FaProjectDiagram, title: "Projects", detail: "80+ Completed Projects" },
            ].map(({ icon: Icon, title, detail }, idx) => (
              <article
                key={idx}
                className="bg-bg border border-transparent rounded-xl p-6 text-center transition-all duration-300 hover:border-primary hover:bg-transparent"
              >
                <Icon className="text-primary text-2xl mb-2 inline-block" />
                <h5 className="text-sm font-medium">{title}</h5>
                <small className="text-xs block mt-1">{detail}</small>
              </article>
            ))}
          </div>

          <p className="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            voluptatum recusandae sint ipsam est inventore alias dolorem ducimus
            voluptatem ipsa quidem expedita dolorum porro error ex amet officia,
            facilis assumenda!
          </p>

          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-primary text-bg font-medium rounded-lg hover:bg-secondary transition-colors"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
