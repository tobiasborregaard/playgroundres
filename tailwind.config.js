/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#f4f9e9ff',
        'darkgreen': '#1a281fff',
        licorice: '#110407ff',
        'sandybrown': '#ee964bff',
        'whitesmoke': '#f4f2f3ff',
        background: '#f4f9e9ff',
        'textprimary': '#110407ff',
        'textsecondary': '#1a281fff',
        primary: '#ee964bff',
        secondary: '#1a281fff',
        accent: '#f4f2f3ff'
      },
      fontFamily: {
        sans: ['"Open Sans"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
