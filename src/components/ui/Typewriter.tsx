"use client";

import { useEffect, useState } from "react";

export function Typewriter({
  text,
  typeSpeed = 90,
  deleteSpeed = 45,
  pause = 1600,
  restDelay = 500,
  className,
}: {
  text: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
  restDelay?: number;
  className?: string;
}) {
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "resting">(
    "typing"
  );

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (display.length < text.length) {
        timeout = setTimeout(
          () => setDisplay(text.slice(0, display.length + 1)),
          typeSpeed
        );
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pause);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (display.length > 0) {
        timeout = setTimeout(
          () => setDisplay(text.slice(0, display.length - 1)),
          deleteSpeed
        );
      } else {
        timeout = setTimeout(() => setPhase("resting"), restDelay);
      }
    } else if (phase === "resting") {
      timeout = setTimeout(() => setPhase("typing"), 0);
    }

    return () => clearTimeout(timeout);
  }, [display, phase, text, typeSpeed, deleteSpeed, pause, restDelay]);

  return (
    <span className={className}>
      {display}
      <span className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 align-middle animate-pulse" />
    </span>
  );
}
