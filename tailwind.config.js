/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {


    extend: {
      fontSize: {
        "custom": "0.875rem"
      },
      transitionProperty: {
        'height': 'height',
        'display': 'display'
      },
      fontFamily: {
        cairo: ['Public Sans , sans-serif'],
      },
      colors: {
        layout: {
          primary: "var(--layout-primary)",
          secondary: "var(--layout-secondary)"
        },
        theme: {
          primary: "var(--theme-primary)",
          secondary: "var(--theme-secondary)"
        },
        gray: "#637381",
        "main-border": "rgba(145, 158, 171, 0.24)"

      },
      textColor: {
        primary: 'var(--text-primary)',
        active: "var(--text-active)",
        secondary: "var(--text-secondary)",
        calendar: "var(--calendar-text)"
      },
      fill: {
        primary: 'var(--theme-primary)',
        secondary: "#637381",

      },
      stroke: {
        primary: "var(--stroke-primary)",

      }
      ,
      placeholderColor: {
        secondary: "var(--text-secondary)",
      },
      backgroundColor: {
        primary: 'var(--background-primary)',
        secondary: 'var(--background-secondary)',
        active: "var(--bg-active)",
        blurred: "var(--bg-blurred)",
        "blurred-secondary": "var(--bg-blurred-secondary)"
      },
      backgroundImage: {
        doctor: "url('../src/assets/mainBg.jpg')",
        "landing-search": "url('../src/assets/search-bg.png')"
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
      'xs': { 'min': "450px", 'max': '639px' },
      'sm': { 'min': '640px', 'max': '767px' },
      'md': { 'min': '768px', 'max': '1023px' },
      'lg': { 'min': '1024px', 'max': '1279px' },
      'xl': { 'min': '1280px', 'max': '1535px' },
      '2xl': { 'min': '1536px' },
    },
  },
  plugins: [],
};
