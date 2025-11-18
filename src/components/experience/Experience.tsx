import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

interface Skill {
  name: string;
  level: string;
}

const frontendSkills: Skill[] = [
  { name: "Vue.js", level: "Advanced" },
  { name: "React", level: "Experienced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Ionic", level: "Intermediate" },
  { name: "HTML/CSS", level: "Advanced" },
  { name: "Nuxt.js", level: "Intermediate" },
];

const backendSkills: Skill[] = [
  { name: "C#", level: "Intermediate" },
  { name: "Node.js", level: "Experience" },
  { name: "Python", level: "Experience" },
  { name: "MySQL", level: "Experienced" },
  { name: "RESTful APIs", level: "Advanced" },
  { name: "Git", level: "Advanced" },
];

const Experience: React.FC = () => {
  const renderSkill = (skill: Skill, index: number) => (
    <article
      key={index}
      className="flex items-start gap-3 p-3 rounded-lg hover:bg-bg-variant hover:border-white transition-colors duration-300"
    >
      <BsPatchCheckFill className="text-primary mt-1 shrink-0" />
      <div>
        <h4 className="text-white font-semibold">{skill.name}</h4>
        <small className="text-light">{skill.level}</small>
      </div>
    </article>
  );

  const renderSkillBox = (title: string, skills: Skill[]) => (
    <div className="bg-bg-variant border border-gray-800 rounded-2xl p-8 flex-1 w-full transition-transform hover:-translate-y-1 hover:border-white duration-300">
      <h3 className="text-center text-primary text-xl font-bold mb-8">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map(renderSkill)}
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-16 px-6 md:px-20 bg-bg text-text">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <h5 className="text-sm text-light uppercase tracking-wider mb-2">
          What Skills I Have
        </h5>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12 text-center">
          My Experiences
        </h2>

        <div className="flex flex-col md:flex-row gap-8 w-full ">
          {renderSkillBox("Frontend Development", frontendSkills)}
          {renderSkillBox("Backend & Other Skills", backendSkills)}
        </div>
      </div>
    </section>
  );
};

export default Experience;
