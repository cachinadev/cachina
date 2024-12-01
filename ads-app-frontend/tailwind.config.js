/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Include all your source files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // Ensure this matches the installed plugin
  ],
};