export const identity = {
  name: "Mohammad Safieddine",
  initials: "MS",
  role: "Full-Stack Developer & Applied AI/LLM Engineer",
  location: "Beirut, Lebanon",
  email: "mohammadsafieddine789@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohammad-safieddine-153635248/",
  github: "https://github.com/BigSmoke19",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const heroTechStack = [
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "FastAPI",
  "Prisma",
  "LangChain",
];

export const bio = `CS graduate with production experience shipping full-stack applications (Next.js, FastAPI, PostgreSQL) and applied LLM systems (RAG pipelines, autonomous agents) — including a live document-intelligence API, a self-founded software company shipping a commercial POS and e-commerce platform, and a remote US internship shipping customer-facing features.`;

export const quickFacts = [
  { label: "Location", value: "Beirut, Lebanon" },
  { label: "Education", value: "M1 CS, Lebanese University" },
  { label: "Languages", value: "English (fluent), Arabic (native)" },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "SQL", "PHP", "Java"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Redux.js", "Zustand", "React Query"],
  },
  {
    title: "Backend",
    skills: ["Node.js / Express.js", "Fastify", "FastAPI", "Prisma"],
  },
  {
    title: "AI / LLM",
    skills: [
      "RAG Pipelines",
      "AI Agents",
      "LangChain",
      "ChromaDB",
      "Sentence Transformers",
      "Prompt Engineering",
      "LLM APIs (Groq, HuggingFace)",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MariaDB", "Firebase"],
  },
  {
    title: "Infra / Tools",
    skills: ["Docker", "Git / GitHub", "Vercel", "Render", "HuggingFace Spaces"],
  },
];

export const experience = [
  {
    role: "Founder & CEO",
    company: "H3M Softwares",
    dates: "2025 — Present",
    highlights: [
      "Built H3M POS, a ~46,000 LOC multi-warehouse POS and back-office platform",
      "Shipped Ali's Store, a bilingual (EN/AR) e-commerce platform",
      "Own full-stack architecture, security, and release engineering end-to-end",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Helpha · Texas, US (Remote)",
    dates: "Apr — Jun 2026",
    highlights: [
      "Shipped 4 production features on Next.js, PostgreSQL, and Node.js",
      "Fixed 3 bugs and resolved 3 database performance bottlenecks",
      "Recognized as top-performing intern",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    dates: "Jul 2024 — Present",
    highlights: [
      "Delivered 3+ custom web applications for clients",
      "Cut manual-process time by ~30% through automation",
    ],
  },
];

export const projects = [
  {
    name: "H3M POS",
    description:
      "Full POS + back-office platform: checkout, multi-warehouse inventory, purchasing, shifts, and analytics.",
    details:
      "Concurrency-safe checkout, Ed25519 machine-bound licensing, bilingual EN/AR RTL support, 32-permission RBAC. ~46,000 LOC with ~160 automated tests.",
    tech: ["Next.js", "Node/Express", "Prisma", "PostgreSQL", "Electron"],
  },
  {
    name: "Ali's Store",
    description: "Bilingual e-commerce storefront and admin dashboard.",
    details:
      "JWT auth with rotating refresh tokens, COD checkout with email-OTP verification, and typo-tolerant catalog search via pg_trgm.",
    tech: ["Next.js", "Express", "Prisma", "PostgreSQL"],
  },
  {
    name: "Document Assistant API",
    description: "RAG-powered document-intelligence API, live in production.",
    details:
      "Per-user isolated vector collections, deployed on HuggingFace Spaces and Vercel.",
    tech: ["Python", "FastAPI", "ChromaDB", "Sentence Transformers", "Groq"],
  },
  {
    name: "Smoke Dash",
    description: "RBAC admin platform with full audit trails.",
    details: "Role-based access control system with complete audit logging across every action.",
    tech: ["Next.js", "Fastify", "PostgreSQL", "Prisma"],
  },
  {
    name: "Agentic RAG — Football Intelligence",
    description: "Autonomous tool-calling agent for football data queries.",
    details: "Achieved 87% answer correctness and a 93% reduction in hallucinations.",
    tech: ["Python", "FastAPI", "ChromaDB", "Groq"],
  },
  {
    name: "Boss Burger",
    description: "Customer ordering site with a real-time admin dashboard.",
    details: "Live order tracking and management for a food-service business.",
    tech: ["React.js", "Electron.js", "Firebase"],
  },
];
