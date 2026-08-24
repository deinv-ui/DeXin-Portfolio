import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "solid" | "ghost";

/* `.mono` lives in the components layer, so these utility colours win over the
   muted grey it sets by default — no !important needed.
   The offset shadow is a solid block of --ink, so it snaps flat on press
   instead of just fading like a soft shadow would. */
const base =
  "inline-flex items-center justify-center gap-[.55rem] mono px-5 py-[.85rem] border-2 cursor-pointer " +
  "shadow-punk transition-[background,color,border-color,transform,box-shadow] duration-150 ease-out " +
  "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-punk-hover " +
  "active:translate-x-0 active:translate-y-0 active:shadow-none " +
  "disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none disabled:hover:translate-x-0 disabled:hover:translate-y-0";

const variants: Record<Variant, string> = {
  solid:
    "bg-accent border-ink text-accent-on hover:bg-ink hover:border-ink hover:text-ground",
  ghost: "bg-transparent border-ink text-ink hover:bg-ink hover:text-ground",
};

type Common = { variant?: Variant; children: ReactNode; className?: string };

type ButtonProps = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = Common &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; download?: string };

export function Button(props: ButtonProps | LinkProps) {
  const { variant = "ghost", className = "", children, ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if (typeof rest.href === "string") {
    const { href, download, ...anchorProps } = rest as Omit<LinkProps, keyof Common>;
    const external = !href.startsWith("#");

    return (
      <a
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = rest as Omit<ButtonProps, keyof Common>;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
