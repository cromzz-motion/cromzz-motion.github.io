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
        'top-card': "url('./assets/img/top-card-bg.png')",
        'bottom-card': "url('./assets/img/bottom-card-bg.png')"
      }
    }
  },
  plugins: []
}
