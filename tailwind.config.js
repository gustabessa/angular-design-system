/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        buttons: 'var(--color-buttons)',
        typography: 'var(--color-typography)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
