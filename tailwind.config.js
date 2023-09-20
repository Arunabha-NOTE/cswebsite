/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ieeegrey' : '#44475a',
        'ieeeyellow' : '#FFC72C',
        // 'ieeeyellow' : '#E87722',
        'ieeewhite' : '#f8f8f2',
      }
    },
  },
  plugins: [],
}