/** @type {import('tailwindcss').Config} */

import {
  red as _red,
  transparent as _transparent,
  white as _white
} from 'tailwindcss/colors'
const colors = {
  transparent: _transparent,
  white: _white,
  black: '#2E3239',
  primary: '#FF9902',
  secondary: '#161D25',
  'bg-color': '#F2F2F5',
  aqua: '#268697',
  red: _red[400]
}

export const content = [
  './src/**/*.{js,ts,jsx,tsx}',
  './pages/**/*.{js,ts,jsx,tsx}',
]
export const theme = {
  colors,
  extend: {
    zIndex: {
      1: 1,
      2: 2,
      3: 3,
    }
  },
}
export const plugins = []