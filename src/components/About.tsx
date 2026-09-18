import { FadeIn } from "./ui/FadeIn";
import { SectionHeading } from "./ui/SectionHeading";
import { bio, quickFacts } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="01 · About" title="Who I am" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10">
          <FadeIn delay={0.1}>
            <p className="text-lg sm:text-xl leading-relaxed text-foreground/80">
              {bio}
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="grid grid-cols-1 gap-4">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl bg-muted border-t-2 border-primary px-5 py-4"
              >
                <p className="font-mono text-xs text-primary mb-1">
                  {fact.label}
                </p>
                <p className="text-sm text-foreground/90">{fact.value}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
