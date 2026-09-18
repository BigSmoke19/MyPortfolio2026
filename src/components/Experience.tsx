import { FadeIn } from "./ui/FadeIn";
import { SectionHeading } from "./ui/SectionHeading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="03 · Experience" title="Where I've Worked" />

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-white/10" />

          <div className="flex flex-col gap-12">
            {experience.map((job, i) => (
              <FadeIn key={job.role + job.company} delay={i * 0.12} className="relative">
                <span className="absolute -left-8 sm:-left-10 top-1.5 h-4 w-4 rounded-full bg-background border-2 border-primary" />
                <span className="absolute -left-[27px] sm:-left-[33px] top-2.5 h-2 w-2 rounded-full bg-primary" />

                <div className="rounded-2xl bg-muted border-t-2 border-primary p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {job.role}
                    </h3>
                    <span className="font-mono text-xs text-primary">
                      {job.dates}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/60 mb-4">{job.company}</p>
                  <ul className="space-y-2">
                    {job.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-sm text-foreground/80 leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-secondary"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
