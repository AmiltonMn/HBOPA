import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "95": "95%"
      },
      colors: {
        background: "var(--background)",
        blackTransparent: "var(--blackTspt)",
        purple: "#070828"
      },
      backgroundImage: {
        capaFundo: "url('/src/assets/miranha.jpg')"
      },
    },
  },
  plugins: [],
};
export default config;
