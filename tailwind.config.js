/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        'ibm-plex-mono': ['IBM Plex Mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
