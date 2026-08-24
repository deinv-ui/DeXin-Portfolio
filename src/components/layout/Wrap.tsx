import type { ElementType, ReactNode } from "react";

type WrapProps = {
  as?: ElementType;
  id?: string;
  className?: string;
  "aria-label"?: string;
  children: ReactNode;
};

/** The page's single content column and its responsive side gutters. */
export function Wrap({ as: Tag = "div", className = "", children, ...rest }: WrapProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-wrap px-[clamp(1.25rem,4vw,3.25rem)] ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
