module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      strokeWidth: {
       '3': '3',
       '4': '4',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
