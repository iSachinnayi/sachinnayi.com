/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Warmer, deeper cream palette - NOT white
        cream: {
          50: '#f7f4ef',
          100: '#efe9e0',
          200: '#e5dcd0',
          300: '#d6cabb',
          400: '#c4b5a3',
        },
        // Deeper slate for text and dark sections
        slate: {
          800: '#1e2433',
          850: '#181d29',
          900: '#12161f',
          950: '#0c0f15',
        },
        // Copper accent
        copper: {
          400: '#d4956a',
          500: '#c27c4e',
          600: '#a66840',
          700: '#8a5535',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
