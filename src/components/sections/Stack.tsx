import { LEVELS, skillCount, skillGroups, type Level, type SkillGroup } from "../../data/skills";
import { Section, SectionTitle } from "../layout/Section";
import { Meter } from "../ui/Meter";
import { Reveal } from "../ui/Reveal";

const levels = Object.keys(LEVELS) as Level[];

export function Stack() {
  return (
    <Section id="stack" label="Stack" note={`${skillCount} tools`}>
      <SectionTitle>What I reach for.</SectionTitle>
      <p className="prose">
        Vue-first, React close behind, and enough of the back end to hold a real conversation
        with the people building it. Levels below are my own honest read, not a certification.
      </p>

      <div className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-5 duo:grid-cols-2 duo:gap-6">
        {skillGroups.map((group, index) => (
          <SkillCard key={group.title} group={group} index={index} />
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-5">
        {levels.map((level) => (
          <span key={level} className="flex items-center gap-2">
            <Meter level={level} decorative />
            <span className="mono">{level}</span>
          </span>
        ))}
      </div>
    </Section>
  );
}

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const tilt = index % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1";

  return (
    <Reveal
      className={`border-2 border-rule bg-panel p-[clamp(1.25rem,2.5vw,1.75rem)]
                  transition-[transform,box-shadow,border-color] duration-200 ease-out
                  hover:-translate-y-1 hover:border-ink hover:shadow-punk ${tilt}`}
    >
      <h3 className="mb-[.35rem] border-b border-rule pb-[.85rem] text-[.9375rem] font-[650] tracking-[-.01em] [font-stretch:104%]">
        {group.title}
      </h3>

      {group.skills.map((skill) => (
        <div
          key={skill.name}
          className="grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-4 border-b border-rule-soft py-[.7rem] last:border-b-0 last:pb-0"
        >
          <span className="text-[.9375rem] font-medium tracking-[-.005em]">{skill.name}</span>
          <Meter level={skill.level} />
          <span className="mono min-w-[6.5rem] text-right text-[.625rem] tracking-[.1em]">
            {skill.level}
          </span>
        </div>
      ))}
    </Reveal>
  );
}
