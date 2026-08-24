import { projects, type Project } from "../../data/projects";
import { Section, SectionTitle } from "../layout/Section";
import { Chip } from "../ui/Chip";
import { Reveal } from "../ui/Reveal";

export function Work() {
  return (
    <Section id="work" label="Selected work" note={`${projects.length} projects`} tick="accent2">
      <SectionTitle>Shipped, and still running.</SectionTitle>
      <p className="prose mb-[clamp(2.5rem,5vw,3.5rem)]">
        Two production platforms and one thing I built to teach myself a charting stack. Every
        link below goes to the live product, not a mockup.
      </p>

      <div className="flex flex-col gap-[clamp(3.5rem,7vw,6rem)]">
        {projects.map((project, index) => (
          <ProjectEntry key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}

function ProjectEntry({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal as="article">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p
            className={`mono inline-flex items-center gap-[.45rem] ${
              project.kind === "live" ? "text-jade" : "text-brass"
            }`}
          >
            <span
              aria-hidden="true"
              className="h-[.375rem] w-[.375rem] flex-none bg-current"
            />
            {project.kindLabel}
          </p>
          <h3 className="mt-[.4rem] text-[clamp(1.5rem,2.6vw,2.15rem)] font-bold leading-[1.05] tracking-[-.028em] [font-stretch:104%]">
            {project.title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-[.6rem]">
          {project.source && <Chip href={project.source}>Source</Chip>}
          <Chip href={project.href}>
            {project.source ? "Live demo" : "Visit site"} &#8599;
          </Chip>
        </div>
      </div>

      <BrowserFrame project={project} index={index} />

      <div className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-4 wide:grid-cols-[11rem_minmax(0,1fr)] wide:gap-10">
        <p className="mono">{project.caption}</p>
        <p className="prose">{project.description}</p>
      </div>
    </Reveal>
  );
}

/** Screenshot inside a minimal browser chrome — the whole frame is the link.
    Alternating tilt direction keeps a row of three from reading as identical
    cutouts once they lift off the page. */
function BrowserFrame({ project, index }: { project: Project; index: number }) {
  const tilt = index % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1";

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block border-2 border-rule bg-panel-hi no-underline shadow-punk
                 transition-[transform,box-shadow,border-color] duration-200 ease-out
                 hover:-translate-y-1 hover:border-accent hover:shadow-punk-hover ${tilt}`}
    >
      <div className="flex items-center justify-between gap-4 border-b border-rule-soft bg-panel px-[.85rem] py-[.6rem]">
        <span className="mono normal-case tracking-[.02em] text-ink-2">{project.url}</span>
        <span className="mono transition-colors duration-[280ms] group-hover:text-accent">
          Open &#8599;
        </span>
      </div>
      <img
        src={project.image}
        alt={project.alt}
        width={project.width}
        height={project.height}
        loading="lazy"
        decoding="async"
        className="h-auto w-full"
      />
    </a>
  );
}
