import { useEffect } from "react";
import "../styles/tapglow.css";

export default function TapGlow() {
  useEffect(() => {
    const createRipple = (e) => {
      // Only run on mobile-like devices
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

      const ripple = document.createElement("span");
      ripple.className = "tap-ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;

      document.body.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 700);
    };

    window.addEventListener("pointerdown", createRipple, { passive: true });
    return () => window.removeEventListener("pointerdown", createRipple);
  }, []);

  return null;
}