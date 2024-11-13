/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        "bebus":["Bebas Neue", 'sans-serif'],
        "poppins":["Poppins", 'sans-serif'],
        "raleway":["Raleway", 'sans-serif'],
        "robot":["Roboto", 'sans-serif']
      },
      backgroundImage:{
        "bannerBg":"url(./public/bannerBg.png)",
        "bannerHeader":"linear-gradient(#BD1F1700,#BD1F17B2)"
      }
    },
  },
  plugins: [],
}