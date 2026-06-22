import { profile } from "@models/index";
import { Section, SectionHeading, Reveal, GlassCard } from "@views/shared";

export function About() {
  return (
    <Section id="sobre">
      <SectionHeading eyebrow="01 — Sobre" title="Minha trajetória" />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="space-y-6">
          {profile.about.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="text-lg leading-relaxed text-ink-soft">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <GlassCard className="p-7">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-ink-mute">
              Pontos destacados
            </p>
            <ul className="space-y-4">
              {profile.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-ink"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
