"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { heroTechStack } from "@/lib/data";

const iconPositions = [
  { top: "6%", left: "2%", delay: 0 },
  { top: "68%", left: "-4%", delay: 0.6 },
  { top: "0%", left: "62%", delay: 1.2 },
  { top: "40%", left: "88%", delay: 0.3 },
  { top: "82%", left: "70%", delay: 0.9 },
  { top: "28%", left: "22%", delay: 1.6 },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32"
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[42rem] rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-xs text-primary">
              Available for Opportunities
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-foreground text-glow">
            Full-Stack Developer &{" "}
            <span className="text-primary">Applied AI/LLM Engineer</span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-foreground/70 leading-relaxed">
            I build production full-stack apps and applied LLM systems —
            from a commercial POS platform to autonomous RAG agents.
            Founder of{" "}
            <span className="text-foreground/90 font-medium">H3M Softwares</span>,
            based in Beirut, Lebanon.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-[#0A0E17] glow-primary hover:scale-105 transition-transform"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-secondary/60 px-6 py-3 text-sm font-semibold text-secondary hover:bg-secondary/10 hover:scale-105 transition-all"
            >
              Download Resume <Download size={16} />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-foreground/40">
            {heroTechStack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-sm aspect-[4/5]">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
          <div className="absolute inset-6 rounded-[1.75rem] border border-white/10" />

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full w-full flex items-end justify-center"
          >
            <Image
              src="/images/me.png"
              alt="Portrait of Mohammad Safieddine"
              width={601}
              height={823}
              priority
              className="relative z-10 h-[92%] w-auto object-contain drop-shadow-[0_20px_45px_rgba(46,107,255,0.35)]"
            />
          </motion.div>

          {iconPositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute hidden sm:flex h-11 w-11 items-center justify-center rounded-xl bg-muted border border-white/10 font-mono text-[10px] text-primary shadow-lg"
              style={{ top: pos.top, left: pos.left }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: pos.delay,
                ease: "easeInOut",
              }}
            >
              {heroTechStack[i]?.slice(0, 2).toUpperCase()}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
