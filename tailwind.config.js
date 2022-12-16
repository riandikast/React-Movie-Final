/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      width: {
        '800p': '800px',
      },
      screens: {
        'm685': {'min': '0px', 'max': '685px'},
        'min685': {'min': '685px'},
        'min540': {'min': '541px'},
        'max540': {'max': '540px'},
        'min1200': {'min': '1201px'},
        'max1200': {'max': '1200px'},
        'max1000': {'max': '1000px'},
        'max800': {'max': '800px'},
        'max700': {'max': '700px'},
        'max630': {'max': '630px'},
        'max570': {'max': '570px'},
        'max450': {'max': '450px'},
        'max380': {'max': '380px'},
        'max320': {'max': '320px'},
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
