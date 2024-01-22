/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      padding: {
        '12px': '12px',
        '18px': '18px',
        '23px': '23px',
        '28px': '28px',
        '55px': '55px',
      },
      margin: {
        '84px': '84px',
      },
      colors: {
        'button-blue': '#3482FF',
        'text-blue': '#3486FA',
      },
      backgroundImage: {
        'hero-pattern': "url('./images/hero/background.svg')",
      },
    },
  },
  plugins: [],
};
