/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Light", "serif"],
        sans: ["Roboto Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
