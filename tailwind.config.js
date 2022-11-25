/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      yellow: "#FFC93E",
      gray: "#725114",
      blue: "#111D5E",
      hero: "#BE229C",
    },
    fontSize: {
      h1: "140px",
      h2: "48px",
      h3: "20px",
      h4: "16px",
      h5: "12px",
    },
  },
  plugins: [],
};
