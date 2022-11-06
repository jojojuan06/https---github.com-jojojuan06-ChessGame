module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens:{
        'tablet': '680px',
        'midScreen':'880px',
      },
      keyframes: {
        slideRight: {
          '0%': {  transform:'translateX(1000px)',opacity:'0' },
          '100%': { transform:'translateX(0)',opacity:'1' },
        },
      },
      animation: {
        'slideRight': 'slideRight 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      colors: {
        'PinkTransparent': 'RGBA(237,105,189,0)',
      }, 
    },
  },
  plugins: [],
}
