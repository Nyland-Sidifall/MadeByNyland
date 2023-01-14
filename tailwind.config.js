/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      phone: "835px",
      // => @media (min-width: 1024px) { ... }

      tablet: "1193px",
      // => @media (min-width: 640px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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
