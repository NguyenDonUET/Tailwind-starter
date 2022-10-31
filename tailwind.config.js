/** @type {import('tailwindcss').Config} */
module.exports = {
   // xem classes trong all file html
   content: ['./*.html'],
   theme: {
      extend: {
         spacing: {
            128: '22rem'
         }
      }
   },
   plugins: []
}
