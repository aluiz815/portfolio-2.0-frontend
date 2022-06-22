/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", 
  important: true,
  content: [  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes: {
        transform: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" }
        },
        transitionDarkMode: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
      },
      animation: {
        navTransition: "transform 500ms ease-in-out",
        navTransitionDarkMode: "transitionDarkMode 500ms ease-in-out",
      },
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
