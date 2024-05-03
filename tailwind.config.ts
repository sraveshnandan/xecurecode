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
        bg: "#c8c8c8",
        primary: "#000000",
        secondry: "#3f83f8",
        cardbg: "#f3f4f6",
        green: "#31c48d",
        glass: "rgba(255,255,255,0.2)",
      },
      screens: {
        mf: "990px",
        ml: "1024px",
      },
    },
  },
  plugins: [],
};
export default config;
