import { Component } from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";

class Services extends Component {
  render() {
    return (
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className="service__list">
              {Array.from({ length: 7 }).map((_, i) => (
                <li key={i}>
                  <BiCheck className="service__list-icon" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>
            <ul className="service__list">
              {Array.from({ length: 7 }).map((_, i) => (
                <li key={i}>
                  <BiCheck className="service__list-icon" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="service">
            <div className="service__head">
              <h3>Content Creation</h3>
            </div>
            <ul className="service__list">
              {Array.from({ length: 10 }).map((_, i) => (
                <li key={i}>
                  <BiCheck className="service__list-icon" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    );
  }
}

export default Services;
