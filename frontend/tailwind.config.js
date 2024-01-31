/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          // 950: '#1a1a1a', // primary bg
          // 850: '#2d2d2d', // secondary bg
          // 750: '#333333', // border
          // 650: '#b3b3b3', // text secondary
          // 550: '#ffffff', // text primary
          950: '#0B0C10', // primary bg
          850: '#1F2833', // secondary bg
          750: '#45A29E', // border
          650: '#C5C6C7', // text secondary
          550: '#66FCF1', // text primary
          450: '#07f5e3', // text teriary
        }
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
}



