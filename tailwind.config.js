/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1597E4',
        border: '#E6E6E6',
        dark: '#212121',
        light: '#FAFAFA',
        error: '#D86161',
        placeholder: '#7A7A7A',
        title: '#182021',
        borderCard: '#DADEDF',
        cardJob: {
          100: '#646464',
          200: '#212427',
        }
      },
      borderRadius: {
        none: '0px',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
        '10px': '10px'
      },
      fontFamily: {
        sans: [
          'Poppins'
        ]
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}