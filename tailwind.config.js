/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },

      fontFamily: {
        body: ['Plus Jakarta Sans']
      }
    },
  },
  plugins: [],
}

