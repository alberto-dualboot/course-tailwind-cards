/** @type {import('tailwindcss').Config} */


const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./**/*.{html,js,css}"
  ],
  theme: {    
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
     }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
