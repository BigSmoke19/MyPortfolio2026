import { FadeIn } from "./FadeIn";

export function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <FadeIn className="flex items-end justify-between gap-6 mb-12 flex-wrap">
      <div>
        <p className="font-mono text-sm text-primary mb-2 tracking-wide">{eyebrow}</p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
          {title}
        </h2>
      </div>
      {action}
    </FadeIn>
  );
}
