/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        hover: {
          "0% , 100%": {
            transform: "translateY(-4.5%)",
          },
          "50%": { transform: "translateY(0)" },
        },
        light_pulse: {},
      },
      animation: {
        hover: "hover 3s ease-in-out infinite",
        hover_slow: "hover 5s ease-in-out infinite",
        hover_slowest: "hover 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
