import { Mail } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { identity } from "@/lib/data";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.75.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.66.79.55C20.21 21.38 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45Z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-muted border-t-4 border-primary px-8 sm:px-16 py-16 text-center">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[36rem] rounded-full bg-primary/15 blur-[100px]" />

            <p className="font-mono text-sm text-primary mb-3 relative">
              05 · Contact
            </p>
            <h2 className="relative font-heading text-3xl sm:text-5xl font-extrabold text-foreground mb-6">
              Let&apos;s build something.
            </h2>
            <p className="relative max-w-xl mx-auto text-foreground/70 mb-9">
              Open to new opportunities, freelance work, and interesting
              problems. Reach out and let&apos;s talk.
            </p>

            <div className="relative flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${identity.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-[#0A0E17] glow-primary hover:scale-105 transition-transform"
              >
                <Mail size={16} /> {identity.email}
              </a>
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-foreground/80 hover:text-primary hover:border-primary/40 transition-colors"
              >
                <LinkedinIcon />
              </a>
              <a
                href={identity.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-foreground/80 hover:text-primary hover:border-primary/40 transition-colors"
              >
                <GithubIcon />
              </a>
            </div>
          </div>
        </FadeIn>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-foreground/40">
          <p>
            © {new Date().getFullYear()} {identity.name}
          </p>
          <p className="font-mono text-xs">Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
}
