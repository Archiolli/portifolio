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
      }),
      colors: {
        'navzin': 'rgba(47, 57, 94, 0.49)',
        'mouseHoverNav' :  '#FF9900',
        'lineCard': '#7A85AD',
        'cardContent': '#2F395E',
        'inputColor': '#68568C'
      },
    },
  },
  plugins: [],
}
