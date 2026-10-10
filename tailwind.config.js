/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f7f8f5',
          100: '#eceee5',
          200: '#d8ddca',
          300: '#bbc4a2',
          400: '#97a47b',
          500: '#768459',
          600: '#5b6a45',
          700: '#48543a',
          800: '#3a4431',
          900: '#2f3729',
          950: '#1e2417',
        },
        clay: {
          50: '#fdfaf7',
          100: '#f7f0e8',
          200: '#edddc9',
          300: '#e0c5a4',
          400: '#cfa67c',
          500: '#bd895b',
          600: '#a36f49',
          700: '#87573c',
          800: '#6f4835',
          900: '#5b3c2e',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        arabic: ['"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
      },
      maxWidth: {
        'prose-narrow': '38rem',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
};
