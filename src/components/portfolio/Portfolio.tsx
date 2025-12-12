import React from "react";
import IMG1 from "../../assets/Populer.png";
import IMG2 from "../../assets/portfolio3.png";
import IMG3 from "../../assets/portfolio6_2.png";
import Button from "../Button";

interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  github?: string;
  demo: string;
}

const data: PortfolioItem[] = [
  {
    id: 1,
    image: IMG1,
    title: "Populer – A Professional Content Platform with Smart Discovery",
    demo: "https://www.populer.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Jouku.com End-to-End Talent Acquisition Platform",
    demo: "https://www.jouku.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Finance Portfolio Tracker",
    github: "https://github.com/deinv-ui/fast_dashboard",
    demo: "https://fastdashboarddeploy.vercel.app/",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="projects" className="py-16 px-4 md:px-12 bg-bg text-text">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <h5 className="text-sm text-light uppercase tracking-wider mb-2">
          My Recent Work
        </h5>
        <h2 className="text-white text-4xl md:text-5xl font-extrabold text-center mb-12">
          Portfolio
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
          {data.map(({ id, image, title, github, demo }) => (
            <article
              key={id}
              className="bg-bg-variant rounded-2xl border border-gray-800 hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="overflow-hidden rounded-t-2xl pt-0">
                <img
                  src={image}
                  alt={title}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="text-white text-lg font-semibold mb-4">{title}</h3>
                <div className="flex gap-4 flex-wrap mt-auto">
                  {github && (
                    <Button
                      href={github}
                      rel="noopener noreferrer"
                      variant="outline"
                    >
                      Github
                    </Button>
                  )}
                  <Button
                    href={demo}
                    rel="noopener noreferrer"
                    variant="primary"
                  >
                    Live Demo
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
