const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      minWidth: {
        '36': '9rem',
      },
      maxWidth: {
        '3/4': '75%',
      },
      maxHeight: {
        '3/4': '75%',
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl'
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr'
        }
      }
      addUtilities(newUtilities)
    }),
  ]
}
