/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          screens:{
            'custom':'1024px' 
          },
          customFont:{
            'sans-serif':'sans-serif'
          }
     
    },
  },
  plugins: [],
}

