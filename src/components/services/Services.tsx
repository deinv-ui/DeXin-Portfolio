import React from "react";
import { BiCheck } from "react-icons/bi";

interface ServiceItem {
  title: string;
  points: string[];
}

const services: ServiceItem[] = [
  {
    title: "UI/UX Design",
    points: Array(7).fill("Lorem ipsum dolor sit amet consectetur adipisicing."),
  },
  {
    title: "Web Development",
    points: Array(7).fill("Lorem ipsum dolor sit amet consectetur adipisicing."),
  },
  {
    title: "Content Creation",
    points: Array(10).fill("Lorem ipsum dolor sit amet consectetur adipisicing."),
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 px-4 md:px-12">
      <h5 className="text-gray-400 text-center text-lg mb-2">What I Offer</h5>
      <h2 className="text-primary text-4xl font-bold text-center mb-12">
        Services
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, points }, idx) => (
          <article
            key={idx}
            className="bg-bg-variant border border-primary rounded-2xl transition-all duration-400 hover:bg-transparent hover:border-primary-variant"
          >
            <div className="bg-primary text-bg p-6 rounded-t-2xl text-center shadow-md">
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <ul className="p-6 space-y-3">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <BiCheck className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-light text-sm">{point}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
