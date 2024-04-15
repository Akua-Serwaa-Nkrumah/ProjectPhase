/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
        secondary: {
          100: '#e2ee205',
          200: '#888883',
        }
      },
      fontFamily:
        {
          body:["Nunito",]
        }
    },
  },
  plugins: [],
}

