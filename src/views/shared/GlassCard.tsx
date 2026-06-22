import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export function GlassCard({
  children,
  className = "",
  interactive = false,
}: GlassCardProps) {
  return (
    <div
      className={[
        "rounded-xl2 border border-glass-border bg-glass-fill",
        "backdrop-blur-glass shadow-glass",
        interactive
          ? "transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-glass-strong"
          : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
