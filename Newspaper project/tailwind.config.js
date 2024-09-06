/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      colors: {
        beige: '#e0c9a6',       // Beige
        'light-beige': '#f3dfc1', // Light Beige
        peach: '#f3cea1',       // Peach
        'dark-gray': '#1a1c1a',  // Dark Gray
      },
    },
  },
  plugins: [],
}

