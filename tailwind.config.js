/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Indie':['Indie Flower']
      },
      colors:{
        lightBlue :'#9da0dc'
      },
      backgroundImage:{
        'background':`url("https://janschreiber.github.io/img2/black-chalk.jpg")`
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

