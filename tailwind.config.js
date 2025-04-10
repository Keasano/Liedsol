/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-up-parallax': 'fadeUpParallax 1s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'float': 'float 3s ease-in-out infinite',
        'spin-left': 'spinLeft 20s linear infinite',
        'spin-right': 'spinRight 20s linear infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards'
      },
      keyframes: {
        fadeUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(40px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeUpParallax: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(100px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        spinLeft: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(-360deg)' },
        },
        spinRight: {
          '0%': { transform: 'translate(50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(50%, -50%) rotate(360deg)' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animationDelay: {
        '0': '0ms',
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
      },
      fontFamily: {
        'power-grotesk': ['PowerGroteskTrial', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const animationDelays = theme('animationDelay');
      const utilities = Object.entries(animationDelays).reduce((acc, [key, value]) => {
        acc[`.animate-delay-${key}`] = { animationDelay: value };
        return acc;
      }, {});
      addUtilities(utilities);
    },
  ],
}; 