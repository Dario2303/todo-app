/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './**/*.jsx'],
  theme: {
    screens: {
      'sm': '376px',
      'md': '767px',
      'lg': '1440px',
    },
    extend: {},
  },
  plugins: [],
}
