/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#BA2C1C',
      secondary: '#992C1C',
      white: '#eee',
      base: '#181818',
      accent: '#FFED86', 
      alert: '#FF2F24',
      success: '#71E680',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
