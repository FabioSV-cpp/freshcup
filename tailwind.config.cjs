/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {
      fontFamily: {
        cavolini: 'Cavolini',
      },
      borderWidth: {
        1: '1px',
      },
      colors: {
        black: '#040503',
      },
    },
  },
  plugins: [],
};
