const plugin = require('tailwindcss/plugin')

module.exports = {
  corePlugins: {
    container: false
  },

  content: [
    './resources/js/**/*.{vue, js, ts, jsx, tsx}',
    './resources/views/**/*.php'
  ],
  safelist: ['bg-green'],
  theme: {
    screens: {
      mobile: '375px',
      tablet: '810px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px'
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#000',
      lightblue: '#7678ED',
      darkblue: '#000064',
      green: '#00FFC4',
      grey: '#EEEEEE'
    },

    fontSize: {
      10: '0.625rem',
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      32: '2rem',
      48: '3rem'
    },

    fontFamily: {
      Poppins:['Poppins','sans-serif']
    },

    

    extend: {
      transitionProperty:{
        'scale': 'scale(0)',

      },
      // använder ej dessa nedan längre
      // animation: {
      //   blob: "blob 7s infinite"
      // },

      // keyframes:{
      //   blob:{
      //     "0%":{
      //       transform: "translate(0px, 0px) scale(1)",
      //     },
      //     "33%": {
      //       transform: "translate(30px, -50px) scale(1.1)",
      //     },
      //     "66%": {
      //       transform: "translate(-20px, 20px) scale(0.9)",
      //     },
      //     "100%": {
      //       transform: "translate(0px, 0px) scale(1)",
      //     },
      //   },
      // },
    },
  },
  plugins: [
    // ..
  ]
}
