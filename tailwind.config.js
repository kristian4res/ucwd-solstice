module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#2C2C2C',
        'custom-gray': '#E6E6E6',
        'primary': '#E99A27',
        'secondary': '#457B9D',
        'success': '#00B998',
        'failure': '#D51A52',
        'summer': '#FFB319',
        'winter': '#42C2FF',
        'selected-text': '#89e497'
      },
      fontFamily: {
        'poppins': ['"Poppins"', 'sans-serif']
      }
    }
  },
  plugins: [],
}
