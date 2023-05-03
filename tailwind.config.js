/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        pictureSpecial: "45.5rem",
        colection: "20rem",
        colection2: "30.125rem",
        cardJef: "11rem",
        cardJefEspecial: "22rem",
      },

      width: {
        colection: "15rem",
        cardJef: "11rem",
        cardJefEspecial: "22rem",
      },

      screens: {
        lg: "1024px",
      },
    },
  },
  variants: {},
  plugins: [],
};
