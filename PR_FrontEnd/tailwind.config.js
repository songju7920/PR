/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray1: "#E3E8EE",
        gray2: "#817E7E",
        gray3: "#DBE0E9",
        gray4: "#A49F9F",
        purple1: "#4E5686"
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
