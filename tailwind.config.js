/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", 
  important: true,
  content: [  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 3px 3px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        rocket: {
          700:"#42446e"
        },
      },
      fontFamily: {
      'poppins': ['Poppins'],
      'dm-sans': ['DM Sans']
      }
    },
  },
  plugins: [],
}
