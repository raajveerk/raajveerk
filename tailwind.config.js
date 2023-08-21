/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'pop': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'grad-uno': '#2d6ed6',
        'grad-dos': '#f146aa',
        'grad-tres': '#2e5984',
      },
    },
  },
  plugins: [],
}
