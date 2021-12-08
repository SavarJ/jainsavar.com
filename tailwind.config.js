const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      },
      spacing: {
        76: "18rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
