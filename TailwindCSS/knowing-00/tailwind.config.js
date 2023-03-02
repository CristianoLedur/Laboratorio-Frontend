/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Overpass', 'sans-serif']
      },
      colors: {
        'orange': 'hsl(25 97% 53%)',
        'light-grey': 'hsl(217 12% 63%)',
        'medium-grey': 'hsl(216 12% 54%)',
        'dark-blue': 'hsl(213 19% 18%)',
        'very-darkBlue': 'hsl(216 12% 8%)'
      },
      screens: {
        sm: '375px',
        xl: '1440px'
      }
    },
  },
  plugins: [],
}
