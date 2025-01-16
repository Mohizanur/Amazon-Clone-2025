import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "amazon-yellow": "#FF9900",
        "amazon-dark": "#131921",
        "amazon-light": "#232F3E",
      },
    },
  },
  plugins: [],
};

export default config;
