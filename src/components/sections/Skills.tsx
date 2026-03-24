"use client";

import Link from "next/link";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/ui/MotionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/layout/Section";
import { cv, skills } from "@/data/content";

export function Skills() {
  return (
    <Section
      id="skills"
      className="border-t border-white/[0.04] bg-[linear-gradient(180deg,transparent,rgba(12,12,14,0.5))] py-24 md:py-32"
    >
      <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
        <MotionReveal className="max-w-xl">
          <SectionHeading eyebrow={skills.eyebrow} title={skills.title} description={skills.summary} />
        </MotionReveal>
        {cv.available ? (
          <MotionReveal delay={0.05}>
            <a
              href={cv.href}
              className="inline-flex w-fit items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-accent/5"
            >
              Download CV
            </a>
          </MotionReveal>
        ) : null}
      </div>

      <MotionReveal delay={0.04} className="mt-10 rounded-2xl border border-white/[0.06] bg-surface/35 p-6 md:p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent/90">Education</p>
        <ul className="mt-4 space-y-2 text-sm text-muted md:text-base">
          {skills.educationSummary.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="text-accent/80">·</span>
              <span className="text-foreground/90">{line}</span>
            </li>
          ))}
        </ul>
        {!cv.available ? (
          <p className="mt-6 text-sm text-muted">Full CV available on request — use the contact section.</p>
        ) : null}
      </MotionReveal>

      <MotionStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.categories.map((cat) => (
          <MotionStaggerItem key={cat.name}>
            <div className="h-full rounded-2xl border border-white/[0.06] bg-surface/40 p-6 transition-colors hover:border-white/[0.1]">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent/90">{cat.name}</h3>
              <ul className="mt-5 space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionStaggerItem>
        ))}
      </MotionStagger>

      <MotionReveal delay={0.1} className="mt-12 text-center">
        <p className="text-sm text-muted">
          Prefer a direct line?{" "}
          <Link href="#contact" className="font-medium text-accent hover:text-accent/85">
            Contact
          </Link>
          .
        </p>
      </MotionReveal>
    </Section>
  );
}
