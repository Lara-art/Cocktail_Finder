/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  /*Aqui podemos crear nuestro código css*/
  theme: {
    extend: {
      backgroundImage:{
        "header" : "url(/bg.jpg)"
      }
    },
  },
  plugins: [],
}

