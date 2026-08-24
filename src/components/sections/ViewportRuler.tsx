import { useViewportWidth } from "../../hooks/useViewportWidth";
import { Wrap } from "../layout/Wrap";

/** 0..SCALE px of real viewport maps onto the full track width, so the
    breakpoint marks sit at true proportional positions. */
const SCALE = 1600;

const BREAKPOINTS = [
  { width: 640, name: "sm" },
  { width: 768, name: "md" },
  { width: 1024, name: "lg" },
  { width: 1280, name: "xl" },
  { width: 1536, name: "2xl" },
] as const;

function breakpointName(width: number): string {
  for (let i = BREAKPOINTS.length - 1; i >= 0; i--) {
    if (width >= BREAKPOINTS[i].width) return BREAKPOINTS[i].name;
  }
  return "base";
}

export function ViewportRuler() {
  const width = useViewportWidth();
  const fill = Math.max(0, Math.min(100, (width / SCALE) * 100));

  return (
    <Wrap
      as="section"
      aria-label="Live viewport measurement"
      className="border-y border-rule-soft py-6"
    >
      <div className="mb-[.85rem] flex flex-wrap items-baseline justify-between gap-4">
        <p className="mono">Viewport &mdash; live</p>
        <p className="mono text-[.8125rem] normal-case tracking-[.06em] text-ink">
          <b className="font-medium text-accent">{width || "—"}</b> px &nbsp;/&nbsp;{" "}
          {width ? breakpointName(width) : "—"}
        </p>
      </div>

      <div className="overflow-x-auto overflow-y-hidden pb-1">
        <div className="ruler-track relative h-[3.875rem] min-w-[34rem] border-b border-rule">
          <div
            className="absolute bottom-0 left-0 h-full border-r-2 border-accent bg-accent-wash transition-[width] duration-[180ms] ease-out"
            style={{ width: `${fill}%` }}
          />

          {BREAKPOINTS.map(({ width: bp, name }) => {
            const on = width >= bp;
            return (
              <div
                key={bp}
                className="absolute bottom-0 flex -translate-x-1/2 flex-col items-center gap-[.35rem]"
                style={{ left: `${(bp / SCALE) * 100}%` }}
              >
                <span
                  className={`mono whitespace-nowrap text-center text-[.5625rem] leading-[1.35] tracking-[.06em] ${
                    on ? "text-accent" : "text-muted"
                  }`}
                >
                  <b className="block font-medium tracking-[.12em]">{name}</b>
                  {bp}
                </span>
                <span
                  aria-hidden="true"
                  className={`w-px ${on ? "h-6 bg-accent" : "h-[1.1rem] bg-rule"}`}
                />
              </div>
            );
          })}
        </div>
      </div>

      <p className="mono mt-[.85rem]">
        Tailwind breakpoints, measured against the browser you&rsquo;re reading this in. Resize
        the window.
      </p>
    </Wrap>
  );
}
