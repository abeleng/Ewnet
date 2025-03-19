/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#121212',
          100: '#1E1E1E',
          200: '#2D2D2D',
          300: '#3D3D3D',
        }
      },
      spacing: {
        '128': '32rem',
      },
      transitionProperty: {
        'transform': 'transform',
      },
      transitionDuration: {
        '700': '700ms',
      }
    },
  },
  plugins: [],
};