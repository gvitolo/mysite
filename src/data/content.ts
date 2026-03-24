/**
 * Central content — replace placeholders with your real copy, links, and assets.
 */

export const site = {
  name: "Alex Rivera",
  role: "Engineering Student · Builder · Systems-thinker",
  tagline:
    "Shipping thoughtful software at the intersection of systems, design, and human impact.",
  email: "hello@alexrivera.dev",
  location: "Zurich · Remote",
  social: {
    linkedin: "https://linkedin.com/in/example",
    github: "https://github.com/example",
    x: "https://x.com/example",
  },
  cvHref: "/cv.pdf",
} as const;

export const hero = {
  headline: "Crafting reliable systems with a designer’s eye.",
  subhead:
    "I study computer engineering and build products where performance, clarity, and ethics meet — from low-level internals to polished interfaces.",
  primaryCta: { label: "View work", href: "#projects" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
};

export const about = {
  eyebrow: "About",
  title: "Curious by default. Precise by habit.",
  paragraphs: [
    "I’m an early-career engineer focused on distributed systems, developer tooling, and interfaces that respect attention. My work spans research-style prototypes and production-minded code — always with measurable outcomes.",
    "Outside of code, I care about mentorship, open knowledge, and building technology that scales compassionately. I’m drawn to teams that treat craft, communication, and velocity as complements, not tradeoffs.",
  ],
  highlights: [
    { label: "Focus", value: "Systems · Platform · Product" },
    { label: "Studying", value: "MSc Computer Engineering" },
    { label: "Languages", value: "EN · DE · ES" },
  ],
};

export type ExperienceItem = {
  id: string;
  title: string;
  org: string;
  period: string;
  location: string;
  summary: string;
  tags: string[];
  kind: "education" | "work" | "milestone";
};

export const experience: ExperienceItem[] = [
  {
    id: "edu-msc",
    kind: "education",
    title: "MSc Computer Engineering",
    org: "ETH Zürich",
    period: "2023 — Present",
    location: "Switzerland",
    summary:
      "Distributed systems, compilers, and human–computer interaction. Thesis direction: predictable latency in edge-deployed services.",
    tags: ["Systems", "Research", "HCI"],
  },
  {
    id: "intern-platform",
    kind: "work",
    title: "Platform Engineering Intern",
    org: "Northwind Labs",
    period: "Summer 2024",
    location: "Berlin · Hybrid",
    summary:
      "Built observability pipelines and internal SDKs adopted by 6 product teams. Cut incident triage time by shaping actionable dashboards.",
    tags: ["Go", "K8s", "OpenTelemetry"],
  },
  {
    id: "fellowship",
    kind: "milestone",
    title: "Open Source Fellow",
    org: "Circuit Foundation",
    period: "2023",
    location: "Remote",
    summary:
      "Contributed performance fixes and documentation to a widely used CLI. Learned to collaborate across time zones with empathy and rigor.",
    tags: ["OSS", "Rust", "Community"],
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  outcome: string;
  description: string;
  stack: string[];
  links: { label: string; href: string }[];
  accent: "teal" | "violet";
};

export const projects: Project[] = [
  {
    id: "p1",
    name: "Meridian",
    tagline: "Edge orchestration for latency-sensitive workloads",
    outcome: "40% faster cold starts in simulated edge regions",
    description:
      "A research prototype exploring placement policies and graceful degradation when the network misbehaves. Built to be measured, not just demoed.",
    stack: ["Go", "eBPF", "WebAssembly", "Prometheus"],
    links: [
      { label: "Case study", href: "#" },
      { label: "Source", href: "https://github.com" },
    ],
    accent: "teal",
  },
  {
    id: "p2",
    name: "Studio Lattice",
    tagline: "Design-system-aware component registry",
    outcome: "Unified tokens across 3 web apps for a student nonprofit",
    description:
      "Opinionated tooling for small teams who want consistency without enterprise bloat. Documented, typed, and pleasant to extend.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Storybook"],
    links: [
      { label: "Live", href: "#" },
      { label: "Source", href: "https://github.com" },
    ],
    accent: "violet",
  },
  {
    id: "p3",
    name: "Harborline",
    tagline: "Structured incident notes for student-led ops",
    outcome: "Reduced duplicate tickets during campus hackathons",
    description:
      "A calm interface for chaos: timelines, owners, and clear next steps — so teams learn from outages instead of reliving them.",
    stack: ["React", "PostgreSQL", "Realtime", "RBAC"],
    links: [{ label: "Overview", href: "#" }],
    accent: "teal",
  },
];

export const skills = {
  eyebrow: "CV & skills",
  title: "Capabilities forged in practice",
  summary:
    "A snapshot of how I work — the tools change; the bar for clarity and ownership does not.",
  categories: [
    {
      name: "Engineering",
      items: ["Distributed systems", "API design", "Performance", "Testing culture"],
    },
    {
      name: "Stack",
      items: ["TypeScript", "Go", "Rust (learning)", "Python", "SQL"],
    },
    {
      name: "Platform",
      items: ["Kubernetes", "Terraform", "CI/CD", "Observability"],
    },
    {
      name: "Product",
      items: ["UX collaboration", "Technical writing", "Mentoring", "Stakeholder comms"],
    },
  ],
};

export type Mentor = {
  id: string;
  name: string;
  role: string;
  quote: string;
  imageSrc: string;
};

export const mentors: Mentor[] = [
  {
    id: "m1",
    name: "Dr. Elena Vogel",
    role: "Professor · Systems research",
    quote: "She taught me to chase the question behind the question — and to document the dead ends.",
    imageSrc:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
  },
  {
    id: "m2",
    name: "Marcus Chen",
    role: "Staff Engineer · Former manager",
    quote: "Clarity is a gift you give your future self and your teammates. He models that daily.",
    imageSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
  },
  {
    id: "m3",
    name: "Sofia Okonkwo",
    role: "Design lead · Community mentor",
    quote: "Taught me that restraint is not the absence of ambition — it’s respect for the user.",
    imageSrc:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80",
  },
];

export const vision = {
  eyebrow: "Vision",
  title: "Build technology that earns trust at scale.",
  paragraphs: [
    "I want to spend the next decade where reliability meets narrative: systems that are honest about their limits, interfaces that don’t shout for attention, and teams that invest in long-term craft.",
    "Near-term, I’m deepening my work in performance engineering and developer experience. Long-term, I aim to lead technical initiatives that bridge research and product — translating deep insight into humane, maintainable software.",
  ],
  pillars: [
    { title: "Depth", body: "Own problems end-to-end — from metrics to meaning." },
    { title: "Clarity", body: "Make the complex legible without diluting truth." },
    { title: "Impact", body: "Measure outcomes, uplift others, ship responsibly." },
  ],
};

export const contact = {
  eyebrow: "Contact",
  title: "Let’s build something that lasts.",
  body: "Open to selective collaborations, mentorship conversations, and teams who care about craft. Tell me what you’re solving — I’ll respond thoughtfully.",
};

export const footer = {
  note: "Designed & built with intention.",
};
