/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'display': 'display'
      },
      fontFamily: {
        cairo: ['Cairo , sans-serif'],
      },
      colors: {
        layout: {
          primary: "var(--layout-primary)",
          secondary: "var(--layout-secondary)"
        },


      },
      textColor: {
        primary: 'var(--text-primary)',
        active: "var(--text-active)",
        secondary: "var(--text-secondary)",
        calendar: "var(--calendar-text)"
      },
      fill: {
        primary: 'var(--text-primary)',
        secondary: "var(--text-secondary)",

      },
      placeholderColor: {
        secondary: "var(--text-secondary)",
      },
      backgroundColor: {
        primary: 'var(--background-primary)',
        secondary: 'var(--background-secondary)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': 'bg-white',
          '50%': 'bg-gradient-to-r from-slate-500 to-slate-100',
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
      }
    },
    screens: {
      'sm': { 'min': '640px', 'max': '767px' },
      'md': { 'min': '768px', 'max': '1023px' },
      'lg': { 'min': '1024px', 'max': '1279px' },
      'xl': { 'min': '1280px', 'max': '1535px' },
      '2xl': { 'min': '1536px' },
    },
  },
  plugins: [],
};
