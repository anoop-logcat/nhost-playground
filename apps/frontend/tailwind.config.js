/** @type {import('tailwindcss').Config} */
const path = require('path');

module.exports = {
  important: true,
  content: [
    path.resolve(
      __dirname,
      `./{layouts,components,pages}/**/*.{js,ts,jsx,tsx}`
    ),
  ],
  theme: {
    extend: {},
  },
};
