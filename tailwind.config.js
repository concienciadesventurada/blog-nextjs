/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'gris': '#1E2022',
        'negrito': '#1A1A1B',
        'negrito2': '#151515',
        'celestucho': '#d6e0f0',
        'celestucho2': '#c9d6df',
        'grisstacy': '#8d93ab',
        'blancucho': '#F1F3F8',
        'cv': '#f0f5f9',
        'dorado': '#FFE194',
        'verde': '#C9F4AA',
        'rojo': '#F48484',
        'azulito': '#AEE2FF'
      }
    },
  },
  plugins: [],
}
