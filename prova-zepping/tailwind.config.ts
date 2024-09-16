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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "light-blue": "#2AA9E1",
        "dark-blue": "#00608A",
        "background-light": "#F5F5F5",
        "light-gray": "#C7C7C7",
      },
    },
  },
  plugins: [],
};
export default config;
