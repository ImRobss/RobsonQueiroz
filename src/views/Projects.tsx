import Image from "next/image";
import { projects } from "@models/index";
import type { Project } from "@models/types";
import { Section, SectionHeading, Reveal, GlassCard } from "@views/shared";
import { ArrowIcon, GithubIcon } from "@views/shared/Icons";

function ProjectPreview({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`Preview do projeto ${project.name}`}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
    );
  }
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white/[0.06] to-transparent">
      <span className="font-mono text-sm text-ink-mute">{project.name}</span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <GlassCard
      interactive
      className={`group flex h-full flex-col overflow-hidden ${project.featured ? "lg:flex-row" : ""}`}
    >
      <div
        className={`relative aspect-video overflow-hidden border-b border-glass-border ${project.featured ? "lg:aspect-auto lg:w-1/2 lg:border-b-0 lg:border-r" : ""}`}
      >
        <ProjectPreview project={project} />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-2xl font-semibold text-ink">{project.name}</h3>
        <p className="mt-3 flex-1 text-base leading-relaxed text-ink-soft">
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-glass-border px-3 py-1 font-mono text-xs text-ink-soft"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex items-center gap-5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              Ver projeto
              <ArrowIcon className="h-4 w-4" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

export function Projects() {
  return (
    <Section id="projetos">
      <SectionHeading
        eyebrow="03 — Projetos"
        title="Ideias transformadas em soluções"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.name}
            delay={i * 0.08}
            className={`h-full ${project.featured ? "lg:col-span-2" : ""}`}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
