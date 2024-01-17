/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'dark': '#000000',
      'gray': '#a8a29e',
      'green1': '#066650',
      'green1hover': '#044a3a',
      'green2': '#083329',
      'green2hover': '#25806b',
      'green3': '#c7f0db',
      'green4': '#93c2b5',
      'green3hover': '#136955',
      'ocher1': '#a69e60',
      'ocher2': '#7a7440',
    },
  },
  plugins: [],
};
