/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgba(33, 85, 205, 0.32)",
        secondaryColor: "rgba(0, 0, 0, 0.69)",
      }
    },
  },
  plugins: [],
}
