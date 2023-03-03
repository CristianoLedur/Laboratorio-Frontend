const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ["./src/**/*.{html,js}"],

  // pega todos os carracteres utilizados
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    purgecss,
    require('cssnano'),
    require('autoprefixer'),
  ]
}