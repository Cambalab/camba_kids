/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F8E5E5",
          100: "#F1CCCC",
          200: "#E4A8A8",
          300: "#D88383",
          400: "#CC5F5F",
          500: "#D66969",
          600: "#B34F4F",
          700: "#8A3C3C",
          800: "#622828",
          900: "#3A1414",
        },
        secondary: {
          50: "#EEF3E9",
          100: "#DCE7D4",
          200: "#BACDAA",
          300: "#99B480",
          400: "#779A56",
          500: "#567F2D",
          600: "#446624",
          700: "#334C1B",
          800: "#233316",
          900: "#121A0D",
        },
        "accent-p": {
          50: "#E6F8F8",
          100: "#B3E8E8",
          200: "#80D8D8",
          300: "#4DC9C9",
          400: "#33B3B3",
          500: "#299696",
          600: "#237474",
          700: "#1D5858",
          800: "#164545",
          900: "#0E3030",
        },
        "accent-s": {
          50: "#E6E6E6",
          100: "#CCCCCC",
          200: "#999999",
          300: "#666666",
          400: "#4D4D4D",
          500: "#333333",
          600: "#2D2D2D",
          700: "#262626",
          800: "#1F1F1F",
          900: "#030303",
        },
      },
      fontFamily: {
        sans: ["Montserrat-Thin", "Helvetica", "Arial", "sans-serif"],
        serif: ["MutantAcademyDCBB"],
        "serif-bold": ["MutantAcademyBB"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
