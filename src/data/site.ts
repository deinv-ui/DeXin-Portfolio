/** Single source of truth for identity + contact details. */

export const site = {
  name: "Tan De Xin",
  shortName: "De Xin",
  mark: "DEXIN",
  role: "Front-end developer",
  location: "Malaysia",
  timezone: "UTC+8",
  email: "tanx3406@gmail.com",
  phone: "+60 13 272 4010",
  whatsapp: "https://api.whatsapp.com/send?phone=60132724010",
  linkedin: "https://www.linkedin.com/in/de-xin-tan/",
  linkedinHandle: "de-xin-tan",
  github: "https://github.com/deinv-ui",
  githubHandle: "deinv-ui",
  signature: "Code for impact.",
} as const;

export type NavItem = { id: string; label: string };

export const navItems: NavItem[] = [
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

export type Channel = {
  label: string;
  value: string;
  href: string;
  /** Trailing hint. `copy` renders the clipboard button instead. */
  action: "copy" | "Chat" | "Connect" | "Browse";
};

export const channels: Channel[] = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    action: "copy",
  },
  {
    label: "WhatsApp",
    value: site.phone,
    href: site.whatsapp,
    action: "Chat",
  },
  {
    label: "LinkedIn",
    value: `in/${site.linkedinHandle}`,
    href: site.linkedin,
    action: "Connect",
  },
  {
    label: "GitHub",
    value: `github.com/${site.githubHandle}`,
    href: site.github,
    action: "Browse",
  },
];
