/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#50d3b9",
        
"secondary": "#8f33f7",
        
"accent": "#e28abc",
        
"neutral": "#332234",
        
"base-100": "#F6F6F8",
        
"info": "#8BB1EA",
        
"success": "#60DCCE",
        
"warning": "#F2B064",
        
"error": "#E46280",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
