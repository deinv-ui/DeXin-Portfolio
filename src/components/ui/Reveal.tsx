import type { ElementType, ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";

type RevealProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/** Fades + lifts its children into place the first time they scroll into view. */
export function Reveal({ as: Tag = "div", className = "", children }: RevealProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
