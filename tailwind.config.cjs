/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        slate: {
          800: "#1E293B",
          950: "#020617",
        },
        amber: {
          500: "#F59E0B",
        },
        cyan: {
          300: "#67E8F9",
          400: "#22D3EE",
        },
        emerald: {
          400: "#34D399",
          500: "#10B981",
        },
        zinc: {
          100: "#F4F4F5",
          400: "#A1A1AA",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glass: "0 10px 40px -24px rgba(34, 211, 238, 0.25)",
      },
      backgroundImage: {
        "dot-matrix":
          "radial-gradient(circle at 1px 1px, rgba(244,244,245,0.09) 1px, transparent 0)",
      },
      backgroundSize: {
        dots: "28px 28px",
      },
    },
  },
  plugins: [],
};
