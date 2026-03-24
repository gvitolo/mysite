"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/layout/Section";
import { mentors } from "@/data/content";

export function Mentors() {
  const reduce = useReducedMotion();

  return (
    <Section id="mentors" className="py-24 md:py-32">
      <MotionReveal>
        <SectionHeading
          eyebrow="Mentors"
          title="People who shaped how I build"
          description="Gratitude, not name-dropping — a few voices that raised the standard."
        />
      </MotionReveal>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {mentors.map((m, i) => (
          <MotionReveal key={m.id} delay={i * 0.07}>
            <motion.figure
              whileHover={
                reduce
                  ? undefined
                  : { y: -4, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }
              }
              className="group overflow-hidden rounded-2xl border border-white/[0.06] bg-surface/50 transition-shadow hover:border-white/[0.1] hover:shadow-[0_24px_64px_-40px_rgba(0,0,0,0.85)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={m.imageSrc}
                  alt={m.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
              <figcaption className="space-y-3 p-6">
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">{m.name}</p>
                  <p className="mt-1 text-sm text-muted">{m.role}</p>
                </div>
                <blockquote className="border-l-2 border-accent/40 pl-4 text-sm leading-relaxed text-muted">
                  “{m.quote}”
                </blockquote>
              </figcaption>
            </motion.figure>
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}
