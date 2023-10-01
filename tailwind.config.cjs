const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      currentColor: 'currentColor',
      white: '#ffffff',
      'gray-100': '#212121',
      'gray-200': '#404040',
      'gray-300': '#808080',
      'gray-400': '#cccccc',
      'gray-500': '#fafafa',
      'blue-100': '#00103d',
      'blue-200': '#0a1a48',
      'blue-300': '#1d4ed8',
      'blue-400': '#8399d8',
      'blue-500': '#d0d9f0',
    },
    extend: {
      screens: {
        xs: '475px',
      },
      fontFamily: {
        sans: ['Karla Variable', defaultTheme.fontFamily.sans],
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray-100'),
            a: {
              fontWeight: theme('fontWeight.light'),
              color: theme('colors.blue-300'),
              '&:hover': {
                color: theme('colors.blue-400'),
                textDecoration: 'underline',
              },
              textDecoration: 'none',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
