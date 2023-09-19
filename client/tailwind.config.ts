/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.svelte',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f7fb',
          100: '#e8eff6',
          200: '#ccdeeb',
          300: '#9fc2da',
          400: '#5f9abf',
          500: '#4987ae',
          600: '#376c92',
          700: '#2e5776',
          800: '#294a63',
          900: '#263f54',
          950: '#1a2937',
        },
        secondary: {
          50: '#fefde8',
          100: '#fffdd0',
          200: '#fff688',
          300: '#ffea44',
          400: '#fed811',
          500: '#eebf04',
          600: '#cd9401',
          700: '#a46904',
          800: '#87520c',
          900: '#734310',
          950: '#432305',
        },
      },
    },
  },
  plugins: [],
};
