/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pool": "url('/assets/images/heroBkgd.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      silver: "#ecebff",
      black: "#000000",
      aliceBlue: "#F0F8FF",
      bermuda: "#78dcca",
      indigoBlue: "hsl(231, 50%, 51%)",
      midnight: "#121063",
      metal: "#565584",
      purple: "#3f3cbb",
      tahiti: "#3ab7bf",
    },
  },
  plugins: [],
};
