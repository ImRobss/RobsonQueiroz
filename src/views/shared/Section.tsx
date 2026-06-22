import type { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-24 sm:py-32 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
