import type { ReactNode } from "react";
import cv from "../../assets/cv.pdf";
import { site } from "../../data/site";
import { Wrap } from "../layout/Wrap";
import { Button } from "../ui/Button";

const headline = [
  <>Interfaces</>,
  <>
    people <Accent variant="accent">work</Accent>
  </>,
  <>
    <Accent variant="accent2">inside</Accent> all day.
  </>,
];

function Accent({
  children,
  variant,
}: {
  children: ReactNode;
  variant: "accent" | "accent2";
}) {
  const color = variant === "accent2" ? "text-accent2" : "text-accent";
  return <em className={`inline-block -skew-x-6 not-italic ${color}`}>{children}</em>;
}

export function Hero() {
  return (
    <Wrap
      as="header"
      className="dot-grid pb-[clamp(2.5rem,5vw,4rem)] pt-[calc(var(--nav-h)+clamp(3rem,8vw,6rem))]"
    >
      <div className="grid grid-cols-[minmax(0,1fr)] gap-[clamp(2.5rem,5vw,3.5rem)] spec:grid-cols-[minmax(0,1fr)_14.5rem] spec:items-end">
        <div>
          <p className="mono mb-[clamp(1.5rem,3vw,2.25rem)] flex items-center gap-[.7rem]">
            <span aria-hidden="true" className="h-px w-9 flex-none bg-rule" />
            {site.role} &nbsp;·&nbsp; {site.location}, {site.timezone}
          </p>

          <h1 className="mb-[clamp(1.5rem,3vw,2rem)] text-[clamp(2.6rem,8.4vw,6.4rem)] font-extrabold leading-[.93] tracking-[-.038em] [font-stretch:110%] [text-wrap:initial]">
            {headline.map((line, i) => (
              <span key={i} className="hero-line">
                <span>{line}</span>
              </span>
            ))}
          </h1>

          <p className="prose max-w-deck text-[clamp(1.0625rem,1.5vw,1.2rem)]">
            I&rsquo;m {site.shortName} &mdash; I build responsive, scalable product interfaces in
            Vue, React and TypeScript. Content platforms, hiring systems, dashboards: the kind
            of screens people open every morning and keep open. Those are the ones that have to
            hold up.
          </p>

          <div className="mt-[clamp(1.75rem,3.5vw,2.5rem)] flex flex-wrap gap-3">
            <Button href="#work" variant="solid">
              See the work
            </Button>
            <Button href={cv} download="Tan_De_Xin_CV.pdf" variant="ghost">
              Read the CV &#8599;
            </Button>
          </div>
        </div>

        <SpecCard />
      </div>
    </Wrap>
  );
}

/** The margin annotation for the person — a rotated ID sticker instead of a
    flat card, with a corner tab to sell the cut-and-pasted feel. */
function SpecCard() {
  return (
    <aside
      className="relative -rotate-1 border-2 border-ink bg-panel-hi p-[1.1rem] shadow-punk
                 transition-transform duration-200 ease-out hover:rotate-0"
    >
      <span aria-hidden="true" className="absolute -right-2 -top-2 h-4 w-4 bg-accent2" />

      <p className="text-[1.0625rem] font-bold tracking-[-.015em] [font-stretch:104%]">
        {site.name}
      </p>
      <p className="mono mt-[.15rem]">{site.role}</p>

      <div className="mt-4 flex flex-col gap-2 border-t border-rule pt-[.9rem]">
        <SpecRow label="Based">
          <span className="mono text-ink">{site.location}</span>
        </SpecRow>
        <SpecRow label="LinkedIn">
          <SpecLink href={site.linkedin}>{site.linkedinHandle}</SpecLink>
        </SpecRow>
        <SpecRow label="GitHub">
          <SpecLink href={site.github}>{site.githubHandle}</SpecLink>
        </SpecRow>
      </div>
    </aside>
  );
}

function SpecRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className="mono">{label}</span>
      {children}
    </div>
  );
}

function SpecLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mono border-b border-rule text-ink no-underline transition-[border-color,color] duration-[180ms] hover:border-accent2 hover:text-accent2"
    >
      {children}
    </a>
  );
}
