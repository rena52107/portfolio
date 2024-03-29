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
    fontFamily: {
      sans: ['"Noto Sans"', "sans-serif"],
      serif: ["Merriweather", "serif"],
    },

    extend: {
      maxWidth: {
        "130": "65rem",
      },
      fontSize: {
        heading1: "3.5rem",
        heading2: "2.25rem",
        heading3: "2rem",
        heading4: "1.5rem",
        body1: "1.125rem",
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
    },
  },
  plugins: [require("daisyui")],
};
export default config;
