"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedBackground() {
  const reduce = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -left-1/4 top-0 h-[520px] w-[520px] rounded-full bg-accent/15 blur-[120px] animate-pulse-glow" />
      <div className="absolute -right-1/4 top-1/3 h-[420px] w-[420px] rounded-full bg-accent-secondary/12 blur-[110px] animate-float-slow" />
      {!reduce ? (
        <motion.div
          className="absolute left-1/2 top-[18%] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[90px]"
          animate={{ opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : (
        <div className="absolute left-1/2 top-[18%] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[90px] opacity-40" />
      )}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(45,212,191,0.12),transparent)]" />
    </div>
  );
}
