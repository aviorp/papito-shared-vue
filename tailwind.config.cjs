/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "winter",
      "night",
      // {
      //   papito: {
      //     primary: "#4B6BFB",
      //     secondary: "#7B92B2",
      //     accent: "#67CBA0",
      //     neutral: "#181A2A",
      //     "base-100": "#FFFFFF",
      //     info: "#3ABFF8",
      //     success: "#36D399",
      //     warning: "#FBBD23",
      //     error: "#F87272",
      //   },
      // },
    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: true,
    darkMode: true,
  },
};
