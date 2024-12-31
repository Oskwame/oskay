import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      xs:"350px",
      sm: "640px",  // Small screens
      md: "768px",  // Medium screens
      lg: "1024px", // Large screens
      xl: "1280px", // Extra large screens
      xxl: "1536px", // 2x extra large screens
    }, 
  },
  plugins: [],
} satisfies Config;
