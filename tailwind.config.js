/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0b5394',
        accent: '#f6b100',
        dark: '#0a1f33',
      },
    },
  },
  plugins: [],
};

