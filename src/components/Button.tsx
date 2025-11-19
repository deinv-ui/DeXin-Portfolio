import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  download?: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  children,
  variant = "primary",
  disabled,
  download,
  ...props
}) => {
  const baseClasses =
    "px-6 py-3 rounded-lg font-medium text-center disabled:cursor-not-allowed disabled:opacity-50";

  const variantClasses = disabled
    ? "bg-gray-500 text-gray-200"
    : variant === "primary"
    ? "bg-primary text-white hover:border-primary hover:border hover:bg-transparent hover:text-primary"
    : variant === "secondary"
    ? "bg-white text-bg hover:border-white hover:border hover:bg-transparent hover:text-white"
    : variant === "outline"
    ? "bg-transparent text-white border-white border hover:border-white hover:border hover:bg-white hover:text-black"
    : "";

  if (href) {
    const isAnchorLink = href.startsWith("#"); 

    return (
      <a
        href={href}
        download={download}
        target={isAnchorLink ? undefined : "_blank"}
        rel={isAnchorLink ? undefined : "noopener noreferrer"}
        className={`${baseClasses} ${variantClasses}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
