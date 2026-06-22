/**
 * MODEL — Tipos de domínio.
 * Contratos de dados usados por toda a aplicação. As Views consomem estes
 * tipos; os Controllers operam sobre eles. Nenhuma lógica de UI aqui.
 */

export interface NavItem {
  label: string;
  target: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  intro: string;
  about: string[];
  highlights: string[];
}

export interface TimelineEntry {
  period: string;
  title: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  stack: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface StackCategory {
  label: string;
  items: string[];
}

export type ContactKind = "phone" | "email" | "linkedin" | "github";

export interface ContactChannel {
  kind: ContactKind;
  label: string;
  value: string;
  href: string;
}
