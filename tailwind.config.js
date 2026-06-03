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
        darkBg: '#090D16',
        darkCard: '#121824',
        darkBorder: '#1E293B',
        accentTeal: '#00F2FE',
        accentIndigo: '#4FACFE',
        accentViolet: '#7F56D9',
        glassBg: 'rgba(18, 24, 36, 0.7)',
        glassBorder: 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'premium': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'premium-glow': '0 0 20px 0 rgba(79, 172, 254, 0.15)',
        'teal-glow': '0 0 20px 0 rgba(0, 242, 254, 0.2)',
      }
    },
  },
  plugins: [],
}
