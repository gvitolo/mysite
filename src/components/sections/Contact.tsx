"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/layout/Section";
import { contact, cv, site } from "@/data/content";

export function Contact() {
  const reduce = useReducedMotion();
  const linkedin = site.social.linkedin;

  return (
    <Section id="contact" className="py-24 md:pb-32 md:pt-28">
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-surface/80 via-background to-surface/60 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:p-12 lg:p-14">
        <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-accent/10 blur-[100px]" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-accent-secondary/10 blur-[90px]" />

        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <MotionReveal>
            <SectionHeading eyebrow={contact.eyebrow} title={contact.title} description={contact.body} />
          </MotionReveal>

          <MotionReveal delay={0.08} className="flex flex-col gap-4 lg:items-end">
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-end">
              <Button href={`mailto:${site.email}`} external>
                Email
              </Button>
              <Button href={site.social.github} variant="secondary" external>
                GitHub
              </Button>
              {linkedin ? (
                <Button href={linkedin} variant="secondary" external>
                  LinkedIn
                </Button>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-4 text-sm sm:justify-end">
              <a
                href={`mailto:${site.email}`}
                className="text-muted transition-colors hover:text-foreground"
              >
                {site.email}
              </a>
              {cv.available ? (
                <a href={cv.href} className="text-muted transition-colors hover:text-foreground">
                  CV (PDF)
                </a>
              ) : null}
            </div>
            <motion.p
              className="text-xs text-muted/80 sm:text-right"
              animate={reduce ? undefined : { opacity: [0.65, 1, 0.65] }}
              transition={reduce ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {contact.replyNote}
            </motion.p>
          </MotionReveal>
        </div>
      </div>
    </Section>
  );
}
