/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          screens:{
            'xl1440':'1440px' 
          },
          customFont:{
            'sans-serif':'sans-serif'
          }
     
    },
  },
  plugins: [],
}

