/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        screen: "#4f1559",
      },
      screens: {
        am: "350px",
      },
    },
  },
  plugins: [],
};
