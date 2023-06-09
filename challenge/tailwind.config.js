/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "almost-white": "#FAFAFA",
        "medium-gray": "#696969",
        "almost-black": "#141414",
      },
    },
  },
  plugins: [],
};
