import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "primary-light": "#DDE6ED",
      "primary-medium": "#27374D",
      "primary-dark": "#0D131A",
      "secondary-light": "#AB987A",
      "secondary-medium": "#857254",
      "secondary-dark": "#564A36",
      "accent-light": "#DC9C89",
      "accent-medium": "#BA3A13",
      "accent-dark": "#5D1D09",
      "bg-light": "#F5F5F5",
      "bg-medium": "#BDBDBD",
      "bg-dark": "#111111",
      black: "#000",
      white: "#fff",
    },
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
