/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Importante para o Tema Escuro manual
  theme: {
    extend: {
      colors: {
        primary: '#6366f1', // Indigo moderno
        secondary: '#ec4899', // Pink moderno
        darkBg: '#0f172a', // Slate 900
        lightBg: '#f8fafc', // Slate 50
      }
    },
  },
  plugins: [],
}