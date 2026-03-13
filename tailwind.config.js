/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        darkerGrotesque: ['Darker Grotesque', 'serif'],
        roboto: ['Roboto', 'serif'],
        ebgaramond: ['EB Garamond', 'serif'],
        cormorantUpright: ['Cormorant Upright', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: '#F1FCF1',
        secondary: '#2C2929',
        darkestMain: '#0B0D28',
        customBlue: {
          light: '#F7F7F8',
          DEFAULT: '#00a6e6',
          dark: '#0B0D28',
        },
        customGreen: {
          light: '#f6edd9',
          DEFAULT: '#3ba44e',
          dark: '#4B5563',
        },
        // New botanical editorial palette
        ivory: '#f5f0e8',
        forest: {
          50: '#f2f7f4',
          100: '#e0ede4',
          200: '#c3dccb',
          300: '#97c3a5',
          400: '#6aa67e',
          500: '#478a60',
          600: '#2d6a4f',
          700: '#275841',
          800: '#1a3a2a',
          900: '#162e23',
          950: '#0b1914',
        },
        sage: {
          DEFAULT: '#8b9e8b',
          light: '#b5c4b5',
          dark: '#6b7e6b',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
      },
    },
  },
  plugins: [],
};
