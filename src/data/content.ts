/**
 * Giuseppe Vitolo — portfolio content (single source of truth).
 * Edit this file to update copy, links, and section data.
 */

export type SiteSocial = {
  github: string;
  linkedin?: string;
};

export const site: {
  name: string;
  firstName: string;
  role: string;
  tagline: string;
  email: string;
  location: string;
  social: SiteSocial;
} = {
  name: "Giuseppe Vitolo",
  /** First name for compact nav / hero panel */
  firstName: "Giuseppe",
  role: "Computer Engineering graduate · MSc @ Aarhus University · Cybersecurity",
  tagline:
    "Building an international path in technology — grounded in security, systems, and disciplined engineering.",
  email: "gvitolocs@gmail.com",
  location: "Aarhus, Denmark · Italian · Building long-term in Scandinavia",
  /** Add `linkedin: "https://…"` inside `social` to surface LinkedIn in the footer and contact block */
  social: {
    github: "https://github.com/gvitolo",
  },
};

/** Set `available: true` and add `public/cv.pdf` to enable the download control */
export const cv = {
  available: false,
  href: "/cv.pdf",
} as const;

export const hero = {
  headline: "Security-minded engineering for systems that have to hold up in the real world.",
  subhead:
    "I’m Giuseppe Vitolo — Computer Engineering graduate and Master’s student at Aarhus University, specializing in cybersecurity. I build at the intersection of theory and practice: cryptography, distributed systems, verification, and dependable backends — from Italy to Denmark, with an international career and life I’m constructing with the same long horizon I bring to difficult engineering work.",
  primaryCta: { label: "Selected work", href: "#projects" },
  secondaryCta: { label: "Connect", href: "#contact" },
  /** Right-hand panel — short lines; swap for photo when ready */
  presence: {
    label: "Focus",
    line1:
      "Cybersecurity · Distributed systems · Formal methods · Reliable backends",
    line2: "Denmark · International direction · Serious momentum",
  },
};

export const about = {
  eyebrow: "About",
  title: "Discipline first. Ambition with substance.",
  paragraphs: [
    "I’m Giuseppe Vitolo — a Computer Engineering graduate and Master’s student at Aarhus University, specializing in cybersecurity. My direction is international: I’m Italian, I’m building my future in Denmark, and I care about mobility, adaptability, and long-term seriousness — professionally and personally, alongside my partner.",
    "I’m motivated by growth and competence, not noise. I improve through structure: clear goals, sustained attention, and honest iteration. That same mindset shows up in competitive environments too — including reaching Diamond in League of Legends — not as a gimmick, but as proof that I can stay focused under pressure and keep performing when progress is slow and the work is hard.",
    "Technically, I gravitate toward cybersecurity, software engineering, distributed systems, formal reasoning, and backends that stay correct when things go wrong. I want the site you’re reading to feel like a stake in the ground: a serious engineer at the start of a strong, international career.",
  ],
  highlights: [
    { label: "Education", value: "MSc Computer Engineering (Cybersecurity), AU" },
    { label: "Base", value: "Aarhus · International outlook" },
    { label: "Core themes", value: "Security · Systems · Rigor · Depth" },
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
  kind: "education" | "work" | "internship" | "milestone";
};

export const experience: ExperienceItem[] = [
  {
    id: "msc-au",
    kind: "education",
    title: "MSc Computer Engineering — Cybersecurity",
    org: "Aarhus University",
    period: "In progress",
    location: "Denmark",
    summary:
      "Master’s studies centered on computer engineering with a specialization in cybersecurity — combining systems thinking with formal and practical security perspectives. Coursework and projects align with distributed systems, cryptography, verification, and reliable software.",
    tags: ["Cybersecurity", "Graduate studies", "Systems"],
  },
  {
    id: "bsc",
    kind: "education",
    title: "BSc Computer Engineering",
    org: "Bachelor’s degree (Italy)",
    period: "Completed",
    location: "Italy",
    summary:
      "Foundational engineering training across software, systems, and mathematics — the base I build on for graduate work and industry-facing projects.",
    tags: ["Computer engineering", "Foundations"],
  },
  {
    id: "intern-industrial",
    kind: "internship",
    title: "Industrial internship — data acquisition & HMI",
    org: "Engineering placement",
    period: "Internship",
    location: "Industry",
    summary:
      "Delivered a substantial internship project around industrial sensors and Modbus, persisting machine data in MySQL and building the operator-facing HMI in JavaFX with Medusa gauges. The work sat inside a larger roadmap that included a Flutter web front end and Python REST APIs for downstream use. We used Agile methods with throwaway prototyping where exploration had to move fast.",
    tags: ["Modbus", "MySQL", "JavaFX", "Agile"],
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
    id: "industrial-hmi",
    name: "Industrial monitoring & HMI",
    tagline: "Field data, persistence, and operator clarity",
    outcome:
      "End-to-end contribution from acquisition to storage to a usable HMI — aligned with a broader product architecture.",
    description:
      "Internship-grade engineering: reading industrial sensors over Modbus, landing structured data in MySQL, and shipping a JavaFX HMI with Medusa gauges so operators could trust what they saw. The same data fed a wider system vision involving a Flutter client and Python-backed REST APIs. No public repository for this work — the value is in the engineering narrative and stack depth.",
    stack: ["Java", "JavaFX", "Medusa", "MySQL", "Modbus", "Python", "Flutter", "REST"],
    links: [],
    accent: "teal",
  },
  {
    id: "cardwallet",
    name: "CardWallet",
    tagline: "Commerce, crypto rails, and ambitious experimentation",
    outcome:
      "An entrepreneurial build exploring cryptocurrency payments and what it takes to own more of the stack.",
    description:
      "CardWallet is an online card-shop project I drive outside the internship — experimental and product-minded. I’ve explored cryptocurrency payments and studied how a custom chain built with the Cosmos SDK could fit a serious payments story. It’s ambitious by design: fewer guarantees, more learning surface, and a clear bias toward understanding real protocol and backend constraints.",
    stack: ["Cosmos SDK", "Crypto payments", "Backend exploration", "Commerce"],
    links: [{ label: "GitHub", href: "https://github.com/gvitolo" }],
    accent: "violet",
  },
  {
    id: "academic-depth",
    name: "Graduate engineering & formal depth",
    tagline: "Algorithms, correctness, and security foundations",
    outcome:
      "A Master’s trajectory that reinforces how I want to work — precise, evidence-based, and systems-aware.",
    description:
      "Across coursework and projects I’ve worked with Go, Java, Scala, and Python; built and consumed REST APIs; gone deep on distributed algorithms, cryptography, formal verification, and modelling for correctness. This isn’t a single demo — it’s the intellectual backbone for how I approach cybersecurity and reliable systems.",
    stack: ["Go", "Scala", "Java", "Python", "REST", "Distributed algorithms", "Formal methods"],
    links: [],
    accent: "teal",
  },
];

export const skills = {
  eyebrow: "Profile & skills",
  title: "Where I invest my depth",
  summary:
    "Grouped honestly — strengths I’m actively building on, not a buzzword wall.",
  educationSummary: [
    "Bachelor’s degree in Computer Engineering",
    "Master’s student in Computer Engineering at Aarhus University",
    "Specialization in cybersecurity",
  ],
  categories: [
    {
      name: "Programming",
      items: ["Go", "Java", "Python", "Scala"],
    },
    {
      name: "Systems & backend",
      items: ["REST APIs", "MySQL", "Distributed systems", "Service-oriented design"],
    },
    {
      name: "Cybersecurity & theory",
      items: ["Cryptography", "Formal verification & modelling", "Reasoning about correctness"],
    },
    {
      name: "Tools & delivery",
      items: ["JavaFX", "Git", "Linux", "Agile collaboration"],
    },
  ],
};

export type GuidingPrinciple = {
  id: string;
  title: string;
  body: string;
};

/** Values and mental models — no invented biographies */
export const guidingPrinciples: GuidingPrinciple[] = [
  {
    id: "depth",
    title: "Technical depth over noise",
    body: "I care about understanding systems well enough to defend them — assumptions, threat models, and failure modes included. Flash without rigor isn’t interesting.",
  },
  {
    id: "international",
    title: "International ambition, local discipline",
    body: "I’m building a life and career across borders — Denmark, Italy, and whatever comes next. Mobility only works with consistency: show up, ship, learn, repeat.",
  },
  {
    id: "longterm",
    title: "Long-horizon thinking",
    body: "The outcomes I want are compounding: relationships, craft, reputation. I optimize for what holds up in five or ten years, not for short-term vanity metrics.",
  },
  {
    id: "focus",
    title: "Sustained focus under pressure",
    body: "I train concentration the way athletes train endurance — including reaching Diamond in competitive League of Legends. It’s the same muscle: repetition, emotional control, and performance when stakes are high.",
  },
];

export const vision = {
  eyebrow: "Direction",
  title: "An international career in cybersecurity and engineering.",
  paragraphs: [
    "I want to build a career that matches how I think: internationally oriented, technically serious, and grounded in security and systems. I’m motivated by mastery — the kind that comes from years of deliberate work, not from chasing trends.",
    "In practice, that means deepening my expertise in cybersecurity and reliable engineering, contributing to teams that value clarity and long-term ownership, and standing out through consistency, depth, and the ability to stay focused on hard goals when progress is non-linear.",
  ],
  pillars: [
    {
      title: "Competence",
      body: "Grow technical judgment through study, implementation, and honest postmortems.",
    },
    {
      title: "Integrity",
      body: "Say what I know, label what I assume, and ship work I can explain.",
    },
    {
      title: "Momentum",
      body: "Small, steady advances beat sporadic intensity — especially across countries and roles.",
    },
  ],
};

export const contact = {
  eyebrow: "Contact",
  title: "If the fit is real, let’s talk.",
  body: "I’m open to meaningful conversations — research-aligned roles, serious engineering teams, and collaborations where cybersecurity and systems depth matter. Write with context; I’ll respond in kind.",
  replyNote: "I read every message · CET",
};

export const footer = {
  note: "Crafted as a personal landing page — focused, international, long-term.",
};
