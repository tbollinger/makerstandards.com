/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'sun': {
          DEFAULT: '#FFF200',
          50: '#FFFBB8',
          100: '#FFFAA3',
          200: '#FFF87A',
          300: '#FFF652',
          400: '#FFF429',
          500: '#FFF200',
          600: '#C7BD00',
          700: '#8F8800',
          800: '#575200',
          900: '#1F1D00'
        },
        'ocean': {
          DEFAULT: '#000DFF',
          50: '#B8BBFF',
          100: '#A3A8FF',
          200: '#7A81FF',
          300: '#525AFF',
          400: '#2934FF',
          500: '#000DFF',
          600: '#000AC7',
          700: '#00078F',
          800: '#000457',
          900: '#00021F'
        },
        'grass': {
          DEFAULT: '#00FF72',
          50: '#B8FFD8',
          100: '#A3FFCC',
          200: '#7AFFB6',
          300: '#52FF9F',
          400: '#29FF89',
          500: '#00FF72',
          600: '#00C759',
          700: '#008F40',
          800: '#005727',
          900: '#001F0E'
        },
        'darling': {
          DEFAULT: '#FF008C',
          50: '#FFB8DF',
          100: '#FFA3D6',
          200: '#FF7AC3',
          300: '#FF52B1',
          400: '#FF299E',
          500: '#FF008C',
          600: '#C7006D',
          700: '#8F004E',
          800: '#570030',
          900: '#1F0011'
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }
}