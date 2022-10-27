/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './**.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'liv': ['Livvic', 'sans-serif'],
      },
      colors: {
        'primary_green': '#014E56',
        'primary_coral': '#F67E7E',
        'light_blue': '#79C8C7',
        'dark_blue': '#2C6269',
        'jungle_green': '#004047',
        'state_green': '#012F34',
        'dark_green': '#002529',
      }
    },
  },
  plugins: [],
}
