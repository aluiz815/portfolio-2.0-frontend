/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", 
  important: true,
  content: [  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
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
