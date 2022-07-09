/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif;"
      },
      colors: {
        'bg-primary': '#141414'
      },
      backgroundImage: {
        'bg-header': 'linear-gradient(to right bottom,rgba(0,0,0,.9),rgba(0,0,0,.7),rgba(0,0,0,.5),rgba(0,0,0,.3),transparent)',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(90px,1fr))'
      },
      boxShadow: {
        'img': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      },
    },
  },
  plugins: [],
}
