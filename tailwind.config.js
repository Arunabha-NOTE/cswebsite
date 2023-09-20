/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color: {
        'primary' : '#44475a',
        'secondary' : '#FFC72C',
        // 'secondary' : '#E87722',
        'Tertiary' : '#f8f8f2',
      }
    },
  },
  plugins: [],
}