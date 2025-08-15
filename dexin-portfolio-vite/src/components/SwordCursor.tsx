import { useEffect } from "react";
import swordImage from "../assets/purple_sword.gif"; // Keep this image path correct
import "./swordCursor.css"; // Optional CSS for swordTrail, cursor styling

const SwordCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.id = "customCursor";
    cursor.style.position = "fixed";
    cursor.style.pointerEvents = "none";
    cursor.style.width = "40px";
    cursor.style.height = "40px";
    cursor.style.backgroundImage = `url(${swordImage})`;
    cursor.style.backgroundSize = "cover";
    cursor.style.backgroundRepeat = "no-repeat";
    cursor.style.zIndex = "9999";
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX - 20}px`;
      cursor.style.top = `${e.clientY - 20}px`;
    };

    const slashEffect = () => {
      cursor.style.transform = "rotate(20deg) scale(1.2)";
      cursor.style.transition = "transform 0.1s ease-in";
      setTimeout(() => {
        cursor.style.transform = "rotate(45deg) scale(1)";
      }, 100);
    };

    const createTrail = (e: MouseEvent) => {
      const trail = document.createElement("div");
      trail.classList.add("swordTrail");
      trail.style.left = `${e.clientX - 20}px`;
      trail.style.top = `${e.clientY - 20}px`;
      document.body.appendChild(trail);

      setTimeout(() => {
        trail.remove();
      }, 200);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousemove", createTrail);
    document.addEventListener("mousedown", slashEffect);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousemove", createTrail);
      document.removeEventListener("mousedown", slashEffect);
      cursor.remove();
    };
  }, []);

  return null;
};

export default SwordCursor;
