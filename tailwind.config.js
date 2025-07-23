/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        green: {
          400: '#00ff41',
          300: '#33ff66',
        },
        blue: {
          400: '#00ccff',
        },
        purple: {
          400: '#cc66ff',
        },
        yellow: {
          400: '#ffcc00',
        }
      },
      animation: {
        'pulse': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
      }
    },
  },
  plugins: [],
};