/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray1: "#E3E8EE"
      },
      fontSize: {
        "30px": "20px"
      },
      width: {
        65: "65px"
      }
    }
  },
  plugins: []
};
