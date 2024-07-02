/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "/*eslint-env node*/",
  ],
  theme: {

    container: {
      padding: {
        DEFAULT: '15px'
      }
    },

    aspectRatio: { // defaults to {}
      'none': 0,
      'square': [1, 1], // or 1 / 1, or simply 1
      '16/9': [16, 9],  // or 16 / 9
      '4/3': [4, 3],    // or 4 / 3
      '21/9': [21, 9],  // or 21 / 9
    },

    extend: {
      backgroundImage: {
        'hero': "url('/img/hero.hero.jpg')",
        'banner': "url('')",
        'logo': "url('/img/logo/logo.png')",
      },

      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 0px 30px 0px rgba(8, 73, 81, 0.06)',
        custom3: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        custom4: '0px 1px 0px rgba(17, 17, 26, 0.1)',
        custom5: '0px 25px 20px -20px rgba(0, 0, 0, 0.45)',
        custom6: 'linear-gradient rgba(2, 2, 2, 0.5), rgba(0, 0, 0, 0.5))',
        custom7: '0px 2px 5px -1px rgba(50, 50, 93, 0.25),  0px 1px 3px -1px rgba(0, 0, 0, 0.3)',
        custom8: '0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)',
      },

      colors: {
        primary: '#dbccb3',
        secondary: '#078d62',
        tertiary: '#205432',
      },
    },
  },

  variants: {
    aspectRatio: ['responsive'], // defaults to ['responsive']
  },

  plugins: [require('tailwindcss-aspect-ratio')],
}