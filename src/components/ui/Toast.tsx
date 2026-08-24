import { useEffect } from "react";
import { useToastStore } from "../../stores/toastStore";

const accents: Record<string, string> = {
  success: "border-jade text-jade",
  error: "border-brass text-brass",
  info: "border-accent text-accent",
};

export function Toast() {
  const { message, type, visible, hideToast } = useToastStore();

  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(hideToast, 3600);
    return () => window.clearTimeout(timer);
  }, [visible, hideToast]);

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed left-1/2 top-[calc(var(--nav-h)+1rem)] z-[80] -translate-x-1/2 border bg-panel-hi px-5 py-3 shadow-lift-hi
                  transition-[opacity,transform] duration-300 ease-out ${accents[type]} ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-3 opacity-0"
                  }`}
    >
      <span className="mono normal-case tracking-[.02em] text-inherit">{message}</span>
    </div>
  );
}
