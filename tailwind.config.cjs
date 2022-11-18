/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'sha1': '0px 0.5px 20px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}