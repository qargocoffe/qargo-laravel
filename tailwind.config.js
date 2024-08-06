/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
    "./resources/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'albert-sans': ['Albert Sans', 'sans-serif'],
        // Add other custom fonts if needed
      },
      width: {
        desktop: '1100px'
      },
      height: {
        desktop: '40rem'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        beige: '#B7AA8C',
        beigeStrong: '#917360',
        beigeLight: '#EEECE0',
        lavazzaBlue: '#00377A',
        gray: '#919191',
        graySoft: '#F1F1F1',
        grayLight: '#B8B8B8',
        grayBackground: '#D8D4D0',
        ceramic: '#FEFFFA',
        coffeStrong: '#1C0602',
        whiteBackground: '#FCFBF6',
      }
    },
  },
  plugins: [require('daisyui')],
}

