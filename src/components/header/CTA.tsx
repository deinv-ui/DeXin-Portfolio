import React from "react";
import CV from "../../assets/cv.pdf";
import Button from "../Button";

const CTA: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-start mt-8">
      <Button href={CV} download="Tan_De_Xin_resume_2025.pdf" variant="outline">
        Download CV
      </Button>
      <Button href="#contact" variant="primary">
        Contact Me
      </Button>
    </div>
  );
};

export default CTA;
