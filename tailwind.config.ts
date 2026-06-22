import type { Config } from "tailwindcss";

/**
 * Design tokens do portfólio.
 * Direção: dark premium, glassmorphism estilo Apple — fundo quase preto,
 * texto branco/cinza, vidro translúcido e um brilho frio (aurora) discreto.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        surface: "#0a0a0c",
        ink: {
          DEFAULT: "#f5f5f7", // branco quente (Apple off-white)
          soft: "#a1a1aa",
          mute: "#71717a",
        },
        glass: {
          fill: "rgba(255,255,255,0.05)",
          strong: "rgba(255,255,255,0.08)",
          border: "rgba(255,255,255,0.10)",
        },
        accent: {
          DEFAULT: "#6ee7ff", // ciano frio — usado com muita parcimônia
          violet: "#a78bfa",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: ["clamp(2.75rem, 7vw, 6rem)", { lineHeight: "0.98", letterSpacing: "-0.04em" }],
        heading: ["clamp(2rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
      },
      maxWidth: {
        page: "72rem",
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      backdropBlur: {
        glass: "18px",
      },
      boxShadow: {
        glass: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 20px 60px -20px rgba(0,0,0,0.7)",
        glow: "0 0 80px -20px rgba(110,231,255,0.35)",
      },
      keyframes: {
        "aurora-drift": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(4%, -6%) scale(1.1)" },
        },
      },
      animation: {
        aurora: "aurora-drift 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
