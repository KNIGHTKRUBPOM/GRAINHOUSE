/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        card: "hsl(var(--card))",
        "accent-sage": "hsl(var(--accent-sage))",
        walnut: {
          DEFAULT: "#6f4f37",
          ink: "#302722",
          light: "#8a6649",
          dark: "#241d19",
        },
        oat: {
          DEFAULT: "#f8f4ee",
          subtle: "#f3ede3",
          card: "#eee8df",
          border: "#e1ddd7",
        },
      },
      fontFamily: {
        serif: ["Newsreader", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1180px",
      },
      letterSpacing: {
        eyebrow: "0.2em",
      },
    },
  },
  plugins: [],
}
