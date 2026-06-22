"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { timeline } from "@models/index";
import { Section, SectionHeading } from "@views/shared";

export function Timeline() {
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 70%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <Section id="trajetoria">
      <SectionHeading
        eyebrow="02 — Trajetória"
        title="Uma evolução, não um recomeço"
      />

      <div ref={trackRef} className="relative mt-16 pl-8 sm:pl-10">
        <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-glass-border sm:left-[9px]" />
        <motion.div
          style={{ scaleY: progress }}
          className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-accent to-accent-violet sm:left-[9px]"
        />

        <div className="space-y-14">
          {timeline.map((entry, i) => (
            <motion.div
              key={entry.period + entry.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <span className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center sm:-left-10">
                <span className="h-4 w-4 rounded-full border border-glass-border bg-bg" />
                <span className="absolute h-1.5 w-1.5 rounded-full bg-accent" />
              </span>

              <p className="font-mono text-sm tracking-wide text-accent">
                {entry.period}
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-ink sm:text-3xl">
                {entry.title}
              </h3>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft">
                {entry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
