"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, profile } from "@models/index";
import { useScrolled, useActiveSection, useSmoothScroll } from "@controllers/index";

export function Navbar() {
  const scrolled = useScrolled();
  const scrollTo = useSmoothScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionIds = useMemo(() => navItems.map((i) => i.target), []);
  const active = useActiveSection(sectionIds);

  const handleNavigate = (target: string) => {
    setMenuOpen(false);
    scrollTo(target);
  };

  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={[
          "w-full max-w-page rounded-2xl border border-glass-border",
          "backdrop-blur-glass transition-all duration-300",
          scrolled
            ? "bg-glass-strong shadow-glass"
            : "bg-glass-fill shadow-none",
        ].join(" ")}
      >
        <div className="flex items-center justify-between px-5 py-3">
          <button
            onClick={() => handleNavigate(sectionIds[0])}
            className="font-mono text-sm font-semibold tracking-tight text-ink"
            aria-label="Voltar ao topo"
          >
            {initials}
            <span className="text-accent">.</span>
          </button>

          {/* Navegação desktop */}
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.target;
              return (
                <li key={item.target}>
                  <button
                    onClick={() => handleNavigate(item.target)}
                    className={[
                      "relative rounded-full px-4 py-1.5 text-sm transition-colors",
                      isActive
                        ? "text-ink"
                        : "text-ink-soft hover:text-ink",
                    ].join(" ")}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Botão menu mobile */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <div className="space-y-1.5">
              <span
                className={`block h-px w-5 bg-current transition-transform ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-5 bg-current transition-transform ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Navegação mobile */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-glass-border px-3 md:hidden"
            >
              {navItems.map((item) => (
                <li key={item.target}>
                  <button
                    onClick={() => handleNavigate(item.target)}
                    className="w-full rounded-xl px-3 py-3 text-left text-sm text-ink-soft hover:bg-white/5 hover:text-ink"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
