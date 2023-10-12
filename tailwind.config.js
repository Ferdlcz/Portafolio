/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      
      colors:{
        primary: '#0f172a'
      },

      fontFamily:{
        varela:['Varela Round', 'Almarai', 'sans-serif', ...defaultTheme.fontFamily.sans]
      }

    },
  },
  plugins: [],
}

