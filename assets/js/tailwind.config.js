/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"], // tells Tailwind to scan all your HTML files
    theme: {
      extend: {
        fontFamily: {
          bebas: ['"Bebas Neue"', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  