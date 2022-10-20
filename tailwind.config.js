/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        overlay: "#00000080",
        darkcolor1: "#252954",
        darkcolor2: "#1F1D2B",
      },
    },
  },
  plugins: [],
};
