/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",  // Páginas do Next.js
    "./components/**/*.{js,ts,jsx,tsx}", // Componentes do Next.js
    "./app/**/*.{js,ts,jsx,tsx}", // Se estiver usando a nova estrutura app
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

