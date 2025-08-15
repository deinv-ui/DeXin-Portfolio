import { Component } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

class Experience extends Component {
  render() {
    return (
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experiences</h2>
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Vue.js</h4>
                  <small className="text-light">Advanced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Advanced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Ionic</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>HTML/CSS</h4>
                  <small className="text-light">Advanced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Nuxt.js</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>
          <div className="experience__backend">
            <h3>Backend & Other Skills</h3>
            <div className="experience__content">
              
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>C#</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
          
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>RESTful APIs</h4>
                  <small className="text-light">Advanced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Git</h4>
                  <small className="text-light">Advanced</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;