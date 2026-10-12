"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    }

    function handleMouseLeave() {
      setIsVisible(false);
    }

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
      aria-hidden="true"
    >
      {/* Halo large très diffus */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-40"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(0,255,156,0.15) 0%, rgba(34,211,238,0.08) 40%, transparent 70%)",
          filter: "blur(40px)",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Point central plus net */}
      <div
        className="absolute w-32 h-32 rounded-full opacity-60"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(0,255,156,0.3) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
    </div>
  );
}
