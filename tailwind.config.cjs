/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      sm: "376px",
      md: "769px",
      lg: "1025px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        0.65: "0.65px",
        0.7: "0.7px",
        0.8: "0.8px",
        1: "1px",
        1.2: "1.2px",
        1.8: "1.8px",
        2.4: "2.4px",
        2.6: "2.6px",
        3: "3px",
        3.2: "3.2px",
      },
      height: {
        65: "65px",
      },
      colors: {
        normal: "#1F2024",
        pink: "#8967E7",
        gray: "#F9F9F9",
        black: "#000000",
      },
      fontSize: {
        64: "64px",
      },
      backgroundImage: {
        bgDesktop: "url('/images/bg-hero.jpg'), url('/images/bg-footer.jpg')",
        bgMobile:
          "url('/images/mobile-bg-hero.jpg'), url('/images/bg-footer.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};
