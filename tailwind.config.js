module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#034170',
        'custom-dark': '#2C2C2C',
        'custom-gray': '#E6E6E6',
        'primary': '#E99A27',
        'secondary': '#457B9D',
        'secondary-pastel': '#7CAFD4',
        'success': '#00B998',
        'failure': '#D51A52',
        'summer': '#FFB319',
        'winter': '#42C2FF',
      },
      fontFamily: {
        'poppins': ['"Poppins"', 'sans-serif']
      }
    }
  },
  plugins: [],
}
