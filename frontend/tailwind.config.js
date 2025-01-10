/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-bar-color': '#1A1D22',
        'search-bar-color': '#',
      },
    },
  },
  plugins: [],
}