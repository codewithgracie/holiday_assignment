/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'dark-charcoal': '#333333',
        'nav-default': '#5A4A79',
        'nav-hover': '#FF6B6B',
        'nav-active': '#FFFFFF',
        'subtitles': '#6A4E74'
      },
      fontFamily: {
        'body': ['inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

