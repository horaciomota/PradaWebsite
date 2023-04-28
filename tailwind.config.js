/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        pictureSpecial: "45.5rem",
      },
      screens: {
        lg: "1024px",
      },
    },
  },
  variants: {},
  plugins: [],
};
