/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html", "./src/**/*.js", "./assets/**/*.jpg"],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#BA2C1C',
      secondary: '#992C1C',
      white: '#eee',
      base: '#101010',
      accent: '#FFED86', 
      alert: '#FF2F24',
      success: '#71E680',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
