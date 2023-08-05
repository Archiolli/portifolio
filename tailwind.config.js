/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'image': "url('../app/utils/img/back.jpg')",
        'logoProdesan': "url('../app/utils/img/logoProdesan.jpeg')",
        'logoRodrimar': "url('../app/utils/img/logoRodrimar.jpeg')",
        'logoUdemy': "url('../app/utils/img/logoUdemy.png')",
        'logoUnisanta': "url('../app/utils/img/logoUnisanta.png')",
        'logoDiome': "url('../app/utils/img/logoDiome.png')",
        'logoCursoEmVideo': "url('../app/utils/img/cursoEmVideoLogo.png')" ,
        'logoOBTC': "url('../app/utils/img/OBTClogo.jpg')",
        'gifRodrimar': "url('../app/utils/gifs/videoOpGranel.gif')"
      }),
      colors: {
        'navzin': 'rgba(47, 57, 94, 0.49)',
        'mouseHoverNav' :  '#FF9900',
        'lineCard': '#7A85AD',
        'cardContent': '#2F395E',
        'inputColor': '#68568C'
      }
    },
  },
  plugins: [ 
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
  screens: {
    sm: '550px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
}
