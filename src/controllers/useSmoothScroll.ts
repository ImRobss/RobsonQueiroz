"use client";

import { useCallback } from "react";

export function useSmoothScroll() {
  return useCallback((targetId: string) => {
    const el = document.getElementById(targetId);
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: prefersReduced ? "auto" : "smooth" });
  }, []);
}
