/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "gray-darkest": "#52555F",
        "gray-light": "#F5F6FB",
        "gray-light-2": "#F6F7FB",
        "gray-light-3": "#E0E5EB",
        "gray-lighter": "#DFE2EB",
        gray: "#A6ABB9",
        orange: "#FF751D",
        peach: "#FFDAC0",
        red: "#E53935",
        green: "#407946",
        black: "#000000",
        white: "#FFFFFF",
        navy: "#071F41",
      },
      boxShadow: {
        form: "0 10px 60px 0 rgba(170, 178, 197, 0.2)",
        google: "1px 2px 3px 0 rgba(170, 178, 197, 0.2)",
        "form-btn": "1px 3px 5px 0 rgba(82, 85, 95, 0.15)",
        "form-btn-hover": "1px 3px 5px 0 rgba(255, 107, 8, 0.35)",
        home: "0 10px 60px 0 rgba(170, 178, 197, 0.2)",
      },
      backgroundImage: {
        "desktop-cabbages": "url('/background/desktop-cabbages.png')",
        "desktop-cabbages-2": "url('/background/desktop-cabbages-2.png')",
      },
      backgroundSize: {
        "175%": "175%",
        "100%": "100%",
      },
      backgroundPosition: {
        "top-4": "left top 28px",
        "top-8": "left top 155px",
      },
    },
  },
  plugins: [],
};
