import { Component } from "react";
import CV from "../../assets/cv.pdf";

class CTA extends Component {
  render() {
    return (
      <div className="cta">
        <a className="btn" href={CV} download="Tan_De_Xin_resume_2025.pdf">
          Download CV
        </a>

        <a className="btn btn-primary" href="#contact">
          Contact Me
        </a>
      </div>
    );
  }
}

export default CTA;
