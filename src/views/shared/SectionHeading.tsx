import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal className={className}>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent/80">
        {eyebrow}
      </p>
      <h2 className="max-w-3xl text-heading font-semibold text-ink">{title}</h2>
    </Reveal>
  );
}
