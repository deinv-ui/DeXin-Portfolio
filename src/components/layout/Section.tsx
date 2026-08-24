import type { ReactNode } from "react";
import { Wrap } from "./Wrap";

type TickColor = "accent" | "accent2";

const tickClass: Record<TickColor, string> = {
  accent: "bg-accent",
  accent2: "bg-accent2",
};

type SectionProps = {
  id: string;
  /** Sticky mono label in the left gutter. */
  label: string;
  /** Optional dimmed second line under the label — a count, usually. */
  note?: string;
  /** Colour of the gutter stud. Sections alternate it to bookend the page. */
  tick?: TickColor;
  children: ReactNode;
};

/**
 * A page section with the gutter rail: below 1080px the label sits above the
 * content, above it the label parks in a sticky left column.
 */
export function Section({ id, label, note, tick = "accent", children }: SectionProps) {
  return (
    <Wrap
      as="section"
      id={id}
      className="border-t border-rule-soft py-[clamp(4.5rem,9vw,7.5rem)]"
    >
      <div className="grid grid-cols-[minmax(0,1fr)] gap-5 rail:grid-cols-[9rem_minmax(0,1fr)] rail:gap-14">
        <div className="flex flex-col gap-[.5rem] pt-2 rail:sticky rail:top-[calc(var(--nav-h)+2rem)] rail:self-start">
          <span aria-hidden="true" className={`h-2 w-2 rotate-45 ${tickClass[tick]}`} />
          <span className="mono">{label}</span>
          {note && <span className="mono opacity-55">{note}</span>}
        </div>

        <div>{children}</div>
      </div>
    </Wrap>
  );
}

/** Shared heading scale for section titles. */
export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-[.9rem] text-[clamp(1.75rem,3.4vw,2.75rem)] font-[650] leading-[1.02] tracking-[-.025em] [font-stretch:106%]">
      {children}
    </h2>
  );
}
