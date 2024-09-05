/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#FF5926',
        'second-color': '#FF7E56',
        'main-white': '#FFFFFF',
        'main-dark': '#000000',
        'main-gray': '#9CA3AF',
        'second-gray': '#D7E3E7',
        'main-yellow': '#FED500',
        'main-green': '#01D434',
      },
      fontFamily: {
        'euclid': ['Euclid Circular A', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


