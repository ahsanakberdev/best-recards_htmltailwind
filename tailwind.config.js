/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Agatho': ['Agatho'],
      'Monsterrat': ['Montserrat'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '0rem',
      },
    },
    extend: {
      fontSize: {
        'XlargeFont': '65px',
        'Mfont' : '45px',
      },
      backgroundSize: {
        '100%': '100% 100%',
        'Full' : '100%'
      },
      colors: {
        'primary' : '#006E87',
        'primary2' : '#013A47',
        'primary3' : '#001C2D',
        'primary4' : '#416F8A',
        'lightblue' : '#57C1D9',
        'lightblue2' : '#00D0FF',
        'dark' : '#010101',
        'secondary' : '#FECB9D',
        'secondary2' : '#FCD2AC',
        'reded' : '#6A3200',
        'grey' : '#4E8A7D',
        'dark2' : '#00100C',
        'dark3' : '#1A1A1A',
        'light' : '#D2EDFD',
      },
      backgroundImage: {
        'banner': "url('../src/img/banner.jpg')",
        'registerBg': "url('../src/img/register-bg.jpg')",
        'lineDots': "url('../src/img/line-dot.svg')",
        'regards': "url('../src/img/regards.svg')",
        'work': "url('../src/img/dott.png')",
        'footer': "url('../src/img/footer-bg.svg')",
        'admin': "url('../src/img/admin.svg')",
        'cart': "url('../src/img/cart.svg')",
        'search': "url('../src/img/search.svg')",
        'heart': "url('../src/img/heart.svg')",
        'cartitem': "url('../src/img/cart-item.svg')",
        'searchbig': "url('../src/img/search-big.svg')",
      }
    },
  },
  plugins: [],
}

