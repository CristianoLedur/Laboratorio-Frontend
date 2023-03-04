/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-blue1': 'hsl(238 29% 16%)',
        'dark-blue2': 'hsl(237 12% 33%)',
        'dark-blue3': 'hsl(240 6% 50%)',
        'light-blue': 'hsl(240 5% 91%)',
        'soft-red': 'hsl(14 88% 65%)',
        'soft-violet': 'hsl(273 75% 66%)',
        'soft-blue': 'hsl(240 73% 65%)'
      },
      fontFamily: {
        'sans': ['Kumbh Sans', 'sans-serif']
      },
      screens: {
        'xl': { 'raw': '(min-width: 1440px)' },
        'betwen': {'raw': '(max-width: 1439px)' },
        'sm': { 'raw': '(max-width: 375px)' }
      }
    },
  },
  plugins: [],
}
