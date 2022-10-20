/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: { 
     fontSize:{
   xs: 14,
   sm: 16,
   md: 18,
   lg: 20,
   xl: 24,
   '2xl': 32,
  },
   
  
  
    colors: {

      transparent: 'transparent',

      black: '#121214',
      white: '#FFF',

      red: {
       300 : '#4E0404',
       100 : '#580B0B',
      },

      gray: {
      400: '#AE9F9F',
      200: '#E1E1E6',
      100: '#D9D9D9'
      },

      
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    }
  },
  plugins: []
}
