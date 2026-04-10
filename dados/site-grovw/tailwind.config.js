/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./links/*.html"],
  darkMode: 'class',
  theme: {
      extend: {
          fontFamily: { 
              sans: ['Inter', 'sans-serif'], 
              mono: ['JetBrains Mono', 'monospace'] 
          },
          colors: { 
              grovw: { 
                  bg: '#0A0711', 
                  section: '#0f0f0f', 
                  surface: '#32373c', 
                  accent: '#cdff00', 
                  accentHover: '#d0ff0f', 
                  border: 'rgba(255,255,255,0.1)' 
              } 
          },
          animation: { 
              'spin-slow': 'spin 8s linear infinite' 
          }
      }
  },
  plugins: [],
}
