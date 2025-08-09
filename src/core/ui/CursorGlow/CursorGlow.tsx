"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  size?: number; // px
  color?: string; // rgba or hex
  blur?: number; // px
  opacity?: number; // 0..1
  className?: string;
};

export default function CursorGlow({
  size = 160,
  color = "59,130,246", // Tailwind indigo-500 as rgb
  blur = 40,
  opacity = 0.35,
  className = "",
}: Props) {
  // raw mouse position
  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);

  // smooth the movement
  const springConfig = { damping: 28, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      // center the glow on cursor
      mouseX.set(e.clientX - size / 2);
      mouseY.set(e.clientY - size / 2);
    };

    const onLeave = () => {
      // move off-screen or fade: move far away
      mouseX.set(-9999);
      mouseY.set(-9999);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseout", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [mouseX, mouseY, size]);

  const diameter = size;
  const background = `radial-gradient(circle at 30% 30%, rgba(${color}, ${opacity}) 0%, rgba(${color}, ${opacity * 0.65}) 25%, rgba(${color}, ${opacity * 0.15}) 55%, rgba(0,0,0,0) 70%)`;

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none fixed top-0 left-0 z-[9998] rounded-full ${className}`}
      style={{
        width: diameter,
        height: diameter,
        x,
        y,
        background,
        filter: `blur(${blur}px)`,
        transform: "translateZ(0)",
        willChange: "transform, opacity",
        mixBlendMode: "screen", // change to "overlay" or remove if undesired
        transition: "background 200ms ease",
      }}
    />
  );
}
