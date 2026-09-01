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
        obsidian: {
          950: '#020408',
          900: '#050914',
          850: '#091024',
          800: '#0E1733',
          750: '#142042',
        },
        electric: {
          cyan: '#00E5FF',
          blue: '#0088FF',
          emerald: '#00F59B',
          purple: '#A855F7',
          amber: '#FFB800',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 30px -5px rgba(0, 229, 255, 0.45), 0 0 10px -2px rgba(0, 229, 255, 0.3)',
        'glow-emerald': '0 0 30px -5px rgba(0, 245, 155, 0.45), 0 0 10px -2px rgba(0, 245, 155, 0.3)',
        'glow-purple': '0 0 30px -5px rgba(168, 85, 247, 0.45), 0 0 10px -2px rgba(168, 85, 247, 0.3)',
        'bento': '0 12px 35px -10px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.12)',
        'bento-hover': '0 20px 50px -10px rgba(0, 0, 0, 0.95), 0 0 25px -3px rgba(0, 229, 255, 0.35), 0 0 0 1px rgba(0, 229, 255, 0.5)',
      }
    },
  },
  plugins: [],
}
