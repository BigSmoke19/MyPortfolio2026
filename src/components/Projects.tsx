"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { SectionHeading } from "./ui/SectionHeading";
import { Badge } from "./ui/Badge";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="04 · Projects"
          title="Things I've Built"
          action={
            <a
              href={`https://github.com/BigSmoke19`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
            >
              View All Projects <ArrowUpRight size={14} />
            </a>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group h-full rounded-2xl bg-muted border-t-4 border-primary hover:border-secondary p-6 flex flex-col transition-colors"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-foreground/70 mb-3">
                  {project.description}
                </p>
                <p className="text-xs text-foreground/50 leading-relaxed mb-5 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 overflow-hidden transition-all duration-300">
                  {project.details}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
