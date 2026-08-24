import { LEVELS, type Level } from "../../data/skills";

const TOTAL = 3;

type MeterProps = {
  level: Level;
  /** Legend meters repeat information already in their text label. */
  decorative?: boolean;
};

export function Meter({ level, decorative = false }: MeterProps) {
  const filled = LEVELS[level];

  return (
    <span
      className="flex gap-[3px]"
      {...(decorative
        ? { "aria-hidden": true }
        : { role: "img", "aria-label": `${level}, ${filled} of ${TOTAL}` })}
    >
      {Array.from({ length: TOTAL }, (_, i) => (
        <i
          key={i}
          className={`block w-[1.15rem] h-[.3125rem] ${i < filled ? "bg-accent" : "bg-rule"}`}
        />
      ))}
    </span>
  );
}
