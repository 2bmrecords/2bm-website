/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors:{
        brand:{
          yellow:'#FFD500',
          blue:'#002BFF',
          red:'#FF3131',
          black:'#000000'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', "system-ui", "sans-serif"],
      },
      borderRadius:{
        xl:'1rem',
        '2xl':'1.25rem'
      },
      boxShadow:{
        card:'0 10px 30px rgba(0,0,0,.08)'
      }
    },
  },
  plugins: [],
}
