import { stack } from "@models/index";
import { Section, SectionHeading, Reveal, GlassCard } from "@views/shared";

export function Stack() {
  return (
    <Section id="stack">
      <SectionHeading
        eyebrow="04 — Stack"
        title="Ferramentas do dia a dia"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {stack.map((category, i) => (
          <Reveal key={category.label} delay={i * 0.1} className="h-full">
            <GlassCard className="h-full p-7">
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-accent/80">
                {category.label}
              </p>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-ink-soft"
                  >
                    <span className="h-px w-4 bg-glass-border" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
