/** @type {import('tailwindcss').Config} */

const twColors = require('tailwindcss/colors')
const colors = {
  transparent: twColors.transparent,
  white: twColors.white,
  black: '#2E3239',
  primary: '#FF9902',
  secondary: '#161D25',
  'bg-color': '#F2F2F5',
  aqua: '#268697'
}

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors,
    extend: {},
  },
  plugins: [],
}