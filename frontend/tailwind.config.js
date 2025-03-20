/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-bar-color": "#1A1D22",
        "search-bar-color": "#",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"], // Add the Dancing Script font
      },
    },
  },
  plugins: [],
};
