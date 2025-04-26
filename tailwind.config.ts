import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greenNew: "#00796b",
        redNew: "#9e2834",
        grayNew: "#f3f3f3",
        yellowNew: "#f5c518",
      },
    },
  },
  plugins: [],
} satisfies Config;


