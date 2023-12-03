/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        ugBlue: '#153D6F',
        lightUgBlue: '#153D6F55',
        ugGold: '#B69A64'
      },
      gridTemplateColumns: {
        grades: '150px 1fr 250px 70px',
        instruct: '50px, 1fr 170px 90px',
      }
    },
  },
  plugins: [],
}

