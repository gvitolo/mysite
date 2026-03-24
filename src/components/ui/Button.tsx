"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium tracking-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const styles = {
  primary:
    "bg-accent text-zinc-950 shadow-[0_0_0_1px_rgba(45,212,191,0.35)] hover:shadow-[0_0_32px_-4px_rgba(45,212,191,0.45)]",
  secondary:
    "border border-white/10 bg-white/[0.03] text-foreground hover:border-white/18 hover:bg-white/[0.06]",
  ghost: "text-muted hover:text-foreground",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const reduce = useReducedMotion();
  const motionClass = !reduce ? "transition-transform duration-200 hover:-translate-y-px active:scale-[0.98]" : "";

  if (external) {
    const newTab = href.startsWith("http");
    return (
      <motion.a
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        className={cn(base, styles[variant], motionClass, className)}
        whileHover={reduce ? undefined : { y: -1 }}
        whileTap={reduce ? undefined : { scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.span
      className="inline-flex"
      whileHover={reduce ? undefined : { y: -1 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
    >
      <Link href={href} className={cn(base, styles[variant], className)}>
        {children}
      </Link>
    </motion.span>
  );
}
