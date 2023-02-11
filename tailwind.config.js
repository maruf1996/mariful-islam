/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: "black",
        common: "#F44859",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        lobster: ["Abril Fatface", "cursive"],
      }
    },
  },
  plugins: [require("daisyui")],
}