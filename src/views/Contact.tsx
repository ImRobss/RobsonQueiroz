import { contacts, contactMessage } from "@models/index";
import { Section, Reveal, GlassCard } from "@views/shared";
import { contactIcon, ArrowIcon } from "@views/shared/Icons";

export function Contact() {
  return (
    <Section id="contato">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-20">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent/80">
            05 — Contato
          </p>
          <h2 className="text-heading font-semibold text-ink">
            Vamos conversar?
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            {contactMessage}
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {contacts.map((channel, i) => {
            const Icon = contactIcon[channel.kind];
            return (
              <Reveal key={channel.kind} delay={i * 0.08} className="h-full">
                <a
                  href={channel.href}
                  target={channel.kind === "phone" || channel.kind === "email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <GlassCard interactive className="group flex h-full items-start gap-4 p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-glass-border text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-ink-mute">{channel.label}</p>
                      <p className="mt-0.5 truncate font-medium text-ink">
                        {channel.value}
                      </p>
                    </div>
                    <ArrowIcon className="h-4 w-4 shrink-0 text-ink-mute transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
                  </GlassCard>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
