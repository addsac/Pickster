module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
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
