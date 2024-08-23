import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#444cf7",
        secondry: "#222222",
        glass: "rgba(255,255,255,0.25)",
        red: "#ff5229",
        lightBg: "#c8c8c8"
      },
      backgroundImage: {
        pattern: "url('/images/hero_bg.png')"
      },





    },
  },
  plugins: [],
};
export default config;
