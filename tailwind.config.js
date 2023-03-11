/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#7c3aed",
        secondary: { 100: "#c4b5fd", 200: "#6b7280", 300: "#e5e7eb" },
        accent: { 100: "#ede9fe", 200: "#0f172a" },
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
