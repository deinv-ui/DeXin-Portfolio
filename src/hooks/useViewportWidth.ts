import { useEffect, useState } from "react";

/** Reads the live viewport width, coalescing resize events to one per frame. */
export function useViewportWidth(): number {
  const [width, setWidth] = useState(() =>
    typeof window === "undefined" ? 0 : window.innerWidth,
  );

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      setWidth(window.innerWidth || document.documentElement.clientWidth || 0);
    };

    const onResize = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return width;
}
