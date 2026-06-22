import { profile, contacts } from "@models/index";
import { Container } from "@views/shared";
import { contactIcon } from "@views/shared/Icons";

export function Footer() {
  const social = contacts.filter((c) =>
    ["github", "linkedin", "email"].includes(c.kind)
  );
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-glass-border py-12">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-lg font-semibold text-ink">{profile.name}</p>
            <p className="mt-1 text-sm text-ink-mute">{profile.role}</p>
          </div>

          <div className="flex items-center gap-3">
            {social.map((channel) => {
              const Icon = contactIcon[channel.kind];
              return (
                <a
                  key={channel.kind}
                  href={channel.href}
                  target={channel.kind === "email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={channel.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-glass-border text-ink-soft transition-colors hover:border-white/25 hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <p className="mt-10 font-mono text-xs text-ink-mute">
          © {year} — Feito com Next.js, TypeScript e muito café.
        </p>
      </Container>
    </footer>
  );
}
