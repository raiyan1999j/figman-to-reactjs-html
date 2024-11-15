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
        "robot":["Roboto", 'sans-serif'],
        "open":["Open Sans", 'sans-serif']
      },
      backgroundImage:{
        "bannerBg":"url(./public/bannerBg.png)",
        "bannerHeader":"linear-gradient(#BD1F1700,#BD1F17B2)",
        "progressBar":"radial-gradient(closest-side, white 90%,transparent 80% 100%), conic-gradient(#FEBF00 80%,#F1F1F1 0)",
        "bookFormImg":"url(./public/bookFormImg.jpeg)",
        "footerBg":"linear-gradient(#000000CC,#000000CC), url(./public/footerBg.jpeg)"
      },
      keyframes:{
        fadeInRight:{
          '0%':{
            opacity:'0',
            transform:'translateX(100%)'
          },
          '100%':{
            opacity:'1',
            transform:'translateX(0)'
          }
        },
        fadeOutLeft:{
          '0%':{
            opacity:'1',
            transform:'translateX(0%)'
          },
          '100%':{
            opacity:'0',
            transform:'translate(100%)'
          }
        }
      },
      animation:{
        "fadeInRight":"fadeInRight 1s ease-in-out",
        "fadeOutLeft":"fadeOutLeft 1s ease-in-out"
      },
      listStyleType:{
        square:"square"
      },
      screens:{
        'smallest':{'min':'0px','max':'390px'},
      }
    },
  },
  plugins: [],
}