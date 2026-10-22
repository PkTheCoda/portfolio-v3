/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'splash': ['Rock Salt', 'sans-serif'],
        'fig': ['Figtree', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
