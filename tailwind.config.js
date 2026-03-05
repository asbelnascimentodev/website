/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          purple: "#bc13fe",
          blue: "#01ffff",
          pink: "#ff00e6",
          green: "#05ffa1",
          red: "#ff3131",
          dark: "#0a0a0b",
          panel: "rgba(10, 10, 11, 0.8)",
        },
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        exo: ["'Exo 2'", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "neon-blue": "0 0 5px #01ffff, 0 0 20px #01ffff",
        "neon-purple": "0 0 5px #bc13fe, 0 0 20px #bc13fe",
        "neon-pink": "0 0 5px #ff00e6, 0 0 20px #ff00e6",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
