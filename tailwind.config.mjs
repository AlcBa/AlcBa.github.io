/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
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
};
