/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#f1c40f',
        danger: '#e74c3c',
      },
      fontFamily: {
        'primary' : [ "Nunito Sans", "sans-serif"],
        'secondary' : [ "Montserrat", "sans-serif" ]
      },
    }
  },
  plugins: [],
}