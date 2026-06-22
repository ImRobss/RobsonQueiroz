"use client";

import { motion } from "framer-motion";
import { profile } from "@models/index";
import { Container } from "@views/shared";
import { useSmoothScroll } from "@controllers/index";
import { ArrowIcon } from "@views/shared/Icons";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const scrollTo = useSmoothScroll();

  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      <Container>
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-ink-soft"
          >
            Administração → Tecnologia → Software
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="text-display font-semibold text-ink"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mt-5 text-xl font-medium text-ink-soft sm:text-2xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-ink-mute sm:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo("projetos")}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
            >
              Ver projetos
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => scrollTo("contato")}
              className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass-fill px-7 py-3 text-sm font-medium text-ink backdrop-blur-glass transition-colors hover:border-white/25 hover:bg-glass-strong"
            >
              Entrar em contato
            </button>
          </motion.div>
        </div>
      </Container>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex h-9 w-5 justify-center rounded-full border border-glass-border pt-1.5">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-ink-soft"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
