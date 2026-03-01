import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Folder app
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Folder components
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Jika ada folder pages
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
