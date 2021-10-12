const { gray } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      main: {
        DEFAULT: "#E1211F",
        secondary: "#E82521",
        tertiary: "#DD2D2C"
      },
    lightBlue: colors.sky,
    emerald: colors.emerald,
    amber: colors.amber,
    black: colors.black,
    indigo: colors.indigo,
    blue: colors.blue,
    red: colors.red,
    rose: colors.rose,
    gray: colors.coolGray
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
