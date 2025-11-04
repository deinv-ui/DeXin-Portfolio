import { Component } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio3.png";
import IMG3 from "../../assets/portfolio6_2.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
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
    title: "Finance Portfolio Tracker",
    github: "https://github.com/deinv-ui/fast_dashboard",
    demo: "https://fastdashboarddeploy-d1h8-hi0jaoh0w-deinv-uis-projects.vercel.app",
  },
];

class Portfolio extends Component {
  render() {
    return (
      <section id="projects">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
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
            );
          })}
        </div>
      </section>
    );
  }
}

export default Portfolio;
