/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "640px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1320px", max: "1920px" },
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        scolor: "#1C1C1C",
        rcolor: "#0E43FF",
      },
      fontFamily: {
        mon: ["Montserrat", "sans-serif"],
        pop: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
