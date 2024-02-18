/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NTR:"NTR"
      },
      colors: {
        'nice-dark':"rgb(10,25,47)",
        'other-dark':"rgb(17,34,64)",
        'hover-dark':"rgb(35,53,84)"
      }
    },
  },
  plugins: [],
}

