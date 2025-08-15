import React, { useEffect } from "react";
import swordImage from "../assets/purple_sword.gif"; // Ensure you have this image

const SwordCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.id = "customCursor";
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
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

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", slashEffect);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", slashEffect);
      cursor.remove();
    };
  }, []);
  const createTrail = (e) => {
    const trail = document.createElement("div");
    trail.classList.add("swordTrail");
    trail.style.left = `${e.clientX - 20}px`;
    trail.style.top = `${e.clientY - 20}px`;
    document.body.appendChild(trail);

    setTimeout(() => {
      trail.remove();
    }, 200); // Remove after 200ms
  };

  document.addEventListener("mousemove", createTrail);

  return null; // This component doesn’t render anything in the DOM
};

export default SwordCursor;
