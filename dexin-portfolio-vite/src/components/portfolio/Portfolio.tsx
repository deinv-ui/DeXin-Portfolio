import { Component } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio3.png";
import IMG3 from "../../assets/portfolio4.png";

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
    title: "JobStore Clone with Modern Redesign",
    github: "https://github.com/deinv-ui/Jobstore_Clone_Redesign",
    demo: "https://jobstore-clone-redesign.vercel.app/",
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
    title: "(FIGMA)PawsNPlaces: Your All-in-One Pet-Friendly App",
    github: "https://github.com/deinv-ui/Flutter-PawsNPlace",
    demo: "https://www.figma.com/design/OCkndrgANkorqPQzzvA5G4/PawNPlaces?node-id=0-1&t=OwJfwX52HSPOKxu6-1",
  },
];

class Portfolio extends Component {
  render() {
    return (
      <section id="projects">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          {data.map(({ id, image, title, github, demo }) => (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {github && (
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                )}
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default Portfolio;
