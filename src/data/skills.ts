/** Level doubles as the meter value: 1..3 filled segments. */
export const LEVELS = {
  Intermediate: 1,
  Experienced: 2,
  Advanced: 3,
} as const;

export type Level = keyof typeof LEVELS;

export type Skill = { name: string; level: Level };

export type SkillGroup = { title: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Front end",
    skills: [
      { name: "Vue.js", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "HTML & CSS", level: "Advanced" },
      { name: "React", level: "Experienced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Nuxt.js", level: "Intermediate" },
      { name: "Ionic", level: "Intermediate" },
    ],
  },
  {
    title: "Back end & tooling",
    skills: [
      { name: "RESTful APIs", level: "Advanced" },
      { name: "Git", level: "Advanced" },
      { name: "MySQL", level: "Experienced" },
      { name: "Node.js", level: "Experienced" },
      { name: "Python", level: "Experienced" },
      { name: "C#", level: "Intermediate" },
    ],
  },
];

export const skillCount = skillGroups.reduce((n, g) => n + g.skills.length, 0);
