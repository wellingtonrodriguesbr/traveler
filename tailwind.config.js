/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Heebo, sans-serif", "Barlow, sans-serif"],
      },
      colors: {
        orange: {
          500: "#F25D27",
        },
        gray: {
          50: "#F5F8FA",
          100: "#DCE2E5",
          300: "#A0ACB2",
          500: "#617480",
        },
        blue: {
          100: "#DDE9F0",
          500: "#115D8C",
          700: "#123952",
        },
        red: {
          500: "#DE3838",
        },
        green: {
          500: "#51B853",
        },
      },
    },
  },
  plugins: [],
};
