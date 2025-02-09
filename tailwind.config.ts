import type { Config } from "tailwindcss";
import { Palette } from "./src/styles/palette.const";

export default {
  content: [
    "./src/**/*",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...Palette,
      },
    },
  },
  plugins: [],
} satisfies Config;
