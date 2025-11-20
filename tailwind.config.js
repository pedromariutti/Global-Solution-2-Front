/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        primary: '#6366f1', 
        secondary: '#ec4899', 
        darkBg: '#0f172a', 
        lightBg: '#f8fafc', 
      }
    },
  },
  plugins: [],
}