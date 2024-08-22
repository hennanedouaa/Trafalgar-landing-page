/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Muli: "Muli",
      },
      colors: {
        bblue : "#67C3F3",
        dblue : "#5A98F2",
        lblue: "#458FF6",
        Lblue:"#2D6AE5",
      }
    },
  },
  plugins: [
    require('tailwindcss-aspect-ratio'),
  ],
}

