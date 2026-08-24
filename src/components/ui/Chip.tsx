import type { ReactNode } from "react";

type ChipProps = {
  href: string;
  children: ReactNode;
};

/** Small bordered link used for the per-project actions. */
export function Chip({ href, children }: ChipProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mono text-ink border border-rule px-[.8rem] py-[.55rem] no-underline
                 transition-[transform,border-color,color,background,box-shadow] duration-150 ease-out
                 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-accent2 hover:text-accent2
                 hover:bg-accent2-wash hover:shadow-punk-sm"
    >
      {children}
    </a>
  );
}
