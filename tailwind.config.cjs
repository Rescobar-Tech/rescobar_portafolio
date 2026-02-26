/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",      // Fondo principal ultra oscuro
        secondary: "#aaa6c3",    // Gris para textos informativos
        tertiary: "#0C1427",     // Fondo de tarjetas: Azul Marino Azure
        "black-100": "#0A1221",  // Variación para gradientes oscuros
        "black-200": "#040A18",  // Variación más profunda
        "white-100": "#f3f3f3",
        "azure-blue": "#0078D4", // Color oficial Microsoft
      },
      boxShadow: {
        // Sombra con resplandor azul Azure
        card: "0px 35px 120px -15px #003E6E", 
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};