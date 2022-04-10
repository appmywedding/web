module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'varelaround': ['VarelaRound'],
    },
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'semiwhite': '0 0 20px 4px rgba(193, 193, 193, 0.78)',
      },
    },
    neumorphismColor: {
      white: {
        100: '#FFFFFF',
        200: '#F3F3F3',
        300: '#EAEBEF',
      },
    },
  },
  plugins: [require('tailwindcss-neumorphism')],
}