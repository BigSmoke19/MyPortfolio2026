import { FadeIn } from "./ui/FadeIn";
import { SectionHeading } from "./ui/SectionHeading";
import { Badge } from "./ui/Badge";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="02 · Skills" title="Technical Toolkit" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-muted border-t-4 border-primary p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
