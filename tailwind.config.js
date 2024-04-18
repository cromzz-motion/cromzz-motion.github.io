/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Sansation', 'sans-serif']
    },
    extend: {
      colors: {
        'background-main': '#210940',
        'font-darker': '#AB8DFF',
        'font-lighter': '#D0DBFF'
      },
      backgroundImage: {
        hero: "url('./assets/img/hero.png')",
        radial: 'radial-gradient(#4D3589, #210940 40%)'
      }
    }
  },
  plugins: []
}
