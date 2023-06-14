/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        'base': {
          100: '#EDEDFC',
          500: '#474E68 ',
          700: '#404258',
        },
      }
    },
  },
  plugins: [],
}