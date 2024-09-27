/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#e5eeee',
        'blue-1': '#5f839e',
        'blue-2': '#0b476a',
        'yellow-1': '#f8e888',
        'green-1': '#005034'
      }
    }
  },
  plugins: []
}
