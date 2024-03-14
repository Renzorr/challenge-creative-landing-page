/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      red: "#f94f4f",
      "pale-red": "#ff9393",
      "dark-blue": "#191921",
      "pale-blue": "#434356",
      black: "#000000",
      white: "#ffffff",
    },
    fontSize: {
      "2xl": "clamp(42px,6cqw,80px)",
      xl: "clamp(40px,5cqw,56px)",
      lg: "clamp(18px,3cqw,20px)",
      md: "clamp(16px,3cqw,18px)",
    },
    fontFamily: {
      sans: "Commissioner",
    },
    container: {
      screens: {
        xl: "1150px",
      },
      padding: 20,
      center: true,
    },
    screens: {
      desktop: { max: "1200px" },
      tablet: { max: "890px" },
      mobile: { max: "660px" },
    },
    extend: {
      backgroundImage: {
        hero: "url(/assets/desktop/image-hero.webp)",
        "hero-tablet": "url(/assets/tablet/image-hero.webp)",
        strategic: "url(/assets/desktop/image-strategic.webp)",
        "strategic-tablet": "url(/assets/tablet/image-strategic.webp)",
        gradient: "linear-gradient(180deg,#0000,#000000bf)",
      },
    },
  },
  plugins: [],
};
