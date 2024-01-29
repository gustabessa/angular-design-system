const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        contrast: {
          DEFAULT: 'var(--contrast)',
          100: 'var(--contrast-100)',
          200: 'var(--contrast-200)',
          300: 'var(--contrast-300)',
          400: 'var(--contrast-400)',
          500: 'var(--contrast-500)',
        },
        secondary: 'var(--secondary)',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
