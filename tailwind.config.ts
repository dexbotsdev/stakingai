import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#fd7913",
        secondary: "#1ee0ac",
        accent: "#ff5151",
        background: {
          100: "#d1d1d1",
          200: "#a4a4a4",
          300: "#767676",
          400: "#494949",
          500: "#1b1b1b",
          600: "#161616",
          700: "#101010",
          800: "#0b0b0b",
          900: "#050505",
        },
      },
    },
  },
  plugins: [],
};
export default config;
