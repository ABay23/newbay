/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkmode: 'class',
  theme: {
    fontFamily: {
      roboto: ['Roboto Mono', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
