import { useEffect } from "react";
import "../styles/tapglow.css";

export default function TapGlow() {
  useEffect(() => {
    const createRipple = (x, y) => {
      const ripple = document.createElement("span");
      ripple.className = "tap-ripple";

      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    };

    // 🔥 Touch support (MOST important for phones)
    const handleTouch = (e) => {
      const touch = e.touches?.[0];
      if (!touch) return;
      createRipple(touch.clientX, touch.clientY);
    };

    // Pointer support (modern browsers)
    const handlePointer = (e) => {
      // ignore mouse on desktop
      if (e.pointerType === "mouse") return;
      createRipple(e.clientX, e.clientY);
    };

    window.addEventListener("touchstart", handleTouch, { passive: true });
    window.addEventListener("pointerdown", handlePointer, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("pointerdown", handlePointer);
    };
  }, []);

  return null;
}