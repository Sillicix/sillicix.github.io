/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.html"],
  theme: {
    extend: {
      width: {
        'bg-image': '400px',
      }
    }
  },
  plugins: [],
}