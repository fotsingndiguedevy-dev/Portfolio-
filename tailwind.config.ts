import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fonds
        bg: {
          DEFAULT: "#0a0e14",     // noir profond légèrement bleuté
          soft: "#121821",        // pour les cartes
          card: "#161d29",        // pour les cartes élevées
        },
        // Accents
        accent: {
          green: "#00ff9c",       // vert néon principal
          cyan: "#22d3ee",        // cyan secondaire
          teal: "#14b8a6",        // teal pour transitions
        },
        // Texte
        text: {
          DEFAULT: "#e6edf3",     // blanc cassé
          muted: "#8b949e",       // gris pour texte secondaire
          dim: "#6e7681",         // encore plus discret
        },
        // Bordures
        border: {
          DEFAULT: "#1f2937",
          accent: "#00ff9c33",    // vert transparent
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #00ff9c 0%, #22d3ee 100%)",
        "gradient-card": "linear-gradient(145deg, #121821 0%, #0a0e14 100%)",
        "gradient-glow": "radial-gradient(circle at top, #00ff9c22 0%, transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 255, 156, 0.15)",
        "glow-strong": "0 0 30px rgba(0, 255, 156, 0.3)",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "fade-in": "fadeIn 0.6s ease-in",
        typing: "typing 3s steps(40, end)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
