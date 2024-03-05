/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'clback': '#222222',
      'clfore': '#ffffff',
      'clshadow': '#00000043',
      'clfont': '#222222',
      'clfont2': '#d9d9d9',
      'clactive': '#d9d9d9',
      'clactivehover': '#c2c2c2',
      'clsuccess': '#54f076',
      'clfailure': '#e7a4a4',
      'clbtn': '#5d3587',
      'cllink': '#5d3587',
      'cltable': '#0000005e',
    },
    extend: {
      aspectRatio: {
        '5/7': '5 / 7',
      }
    },
  },
  plugins: [],
}