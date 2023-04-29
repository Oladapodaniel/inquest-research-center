/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // 'primary': '#0093DD',
        'primary': {
          50: "#E0F5FF",
          100: "#C7ECFF",
          200: "#8AD8FF",
          300: "#52C5FF",
          400: "#1AB2FF",
          500: "#0093DD",
          600: "#0077B3",
          700: "#005885",
          800: "#003A57",
          900: "#001F2E",
          950: "#000E14"
        },
        'primarydeep': '#0177b2',
        "bluetint": '#F8FCFF',
        'bluetintdeep': '#E5F4FB'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    }
  },
  darkMode: 'class',
  plugins: [require("tw-elements/dist/plugin")]
}
