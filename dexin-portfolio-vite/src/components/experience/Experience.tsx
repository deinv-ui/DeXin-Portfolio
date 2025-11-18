import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const frontendSkills = [
  { name: "Vue.js", level: "Advanced" },
  { name: "React", level: "Experienced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "Ionic", level: "Intermediate" },
  { name: "HTML/CSS", level: "Advanced" },
  { name: "Nuxt.js", level: "Intermediate" },
];

const backendSkills = [
  { name: "C#", level: "Intermediate" },
  { name: "MySQL", level: "Experienced" },
  { name: "RESTful APIs", level: "Advanced" },
  { name: "Git", level: "Advanced" },
];

const Experience: React.FC = () => {
  const renderSkill = (skill: { name: string; level: string }, idx: number) => (
    <article key={idx} className="flex gap-3 items-start">
      <BsPatchCheckFill className="text-primary mt-1" />
      <div>
        <h4 className="text-white font-medium">{skill.name}</h4>
        <small className="text-light">{skill.level}</small>
      </div>
    </article>
  );

  const renderSkillBox = (title: string, skills: typeof frontendSkills) => (
    <div className="bg-bg-variant border border-transparent rounded-2xl p-8 hover:bg-bg hover:border-primary transition-all w-full">
      <h3 className="text-center text-primary mb-8">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">{skills.map(renderSkill)}</div>
    </div>
  );

  return (
    <section id="experience" className="py-16 px-4 md:px-8 !bg-red-500 text-text">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="text-center">
          <h5 className="text-sm text-light">What Skills I Have</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">My Experiences</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {renderSkillBox("Frontend Development", frontendSkills)}
          {renderSkillBox("Backend & Other Skills", backendSkills)}
        </div>
      </div>
    </section>
  );
};

export default Experience;
