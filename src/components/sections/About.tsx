"use client";

import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/ui/MotionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/layout/Section";
import { about } from "@/data/content";

export function About() {
  return (
    <Section id="about" className="py-24 md:py-32">
      <MotionReveal>
        <SectionHeading eyebrow={about.eyebrow} title={about.title} />
      </MotionReveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <MotionStagger className="space-y-6">
          {about.paragraphs.map((p, i) => (
            <MotionStaggerItem key={i}>
              <p className="text-base leading-relaxed text-muted md:text-lg">{p}</p>
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        <MotionReveal delay={0.1} className="rounded-2xl border border-white/[0.06] bg-surface/80 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm md:p-8">
          <div className="space-y-6">
            {about.highlights.map((h) => (
              <div key={h.label} className="flex flex-col gap-1 border-b border-white/[0.06] pb-5 last:border-0 last:pb-0">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{h.label}</span>
                <span className="text-base font-medium text-foreground">{h.value}</span>
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </Section>
  );
}
