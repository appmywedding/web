module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'varelaround': ['VarelaRound']
    },
    neumorphismColor: {
      white: {
        100: '#FFFFFF',
        200: '#F3F3F3',
        300: '#EAEBEF',
      },
    },
    extend: {},
  },
  plugins: [require('tailwindcss-neumorphism')],
}