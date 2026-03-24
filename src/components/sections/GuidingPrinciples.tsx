"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/layout/Section";
import { guidingPrinciples } from "@/data/content";

export function GuidingPrinciples() {
  const reduce = useReducedMotion();

  return (
    <Section id="principles" className="py-24 md:py-32">
      <MotionReveal>
        <SectionHeading
          eyebrow="Guiding principles"
          title="What I optimize for"
          description="Ideas and standards — not borrowed biographies. A concise map of how I think and work."
        />
      </MotionReveal>

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {guidingPrinciples.map((p, i) => (
          <MotionReveal key={p.id} delay={i * 0.06}>
            <motion.article
              whileHover={
                reduce
                  ? undefined
                  : { y: -3, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const } }
              }
              className="group h-full rounded-2xl border border-white/[0.06] bg-surface/45 p-7 transition-colors hover:border-white/[0.1] hover:shadow-[0_24px_64px_-48px_rgba(0,0,0,0.85)] md:p-8"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent/90">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-4 text-xl font-semibold tracking-tight text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-[15px]">{p.body}</p>
            </motion.article>
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}
