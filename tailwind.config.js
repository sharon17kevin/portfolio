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
      },
    },
  },
  plugins: [],
};
