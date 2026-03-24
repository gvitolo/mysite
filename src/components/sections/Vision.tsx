"use client";

import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/ui/MotionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/layout/Section";
import { vision } from "@/data/content";

export function Vision() {
  return (
    <Section
      id="vision"
      className="border-t border-white/[0.04] bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(45,212,191,0.08),transparent)] py-24 md:py-32"
    >
      <MotionReveal>
        <SectionHeading eyebrow={vision.eyebrow} title={vision.title} align="center" className="mx-auto" />
      </MotionReveal>

      <MotionStagger className="mx-auto mt-12 max-w-3xl space-y-6 text-center">
        {vision.paragraphs.map((p, idx) => (
          <MotionStaggerItem key={idx}>
            <p className="text-base leading-relaxed text-muted md:text-lg">{p}</p>
          </MotionStaggerItem>
        ))}
      </MotionStagger>

      <MotionStagger className="mt-16 grid gap-5 md:grid-cols-3">
        {vision.pillars.map((pillar, i) => (
          <MotionStaggerItem key={pillar.title}>
            <div className="rounded-2xl border border-white/[0.06] bg-surface/40 p-6 text-left transition-colors hover:border-white/[0.1]">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent/90">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-3 text-lg font-semibold text-foreground">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.body}</p>
            </div>
          </MotionStaggerItem>
        ))}
      </MotionStagger>
    </Section>
  );
}
