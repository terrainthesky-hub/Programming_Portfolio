/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      typography: ({ theme }) => ({
        // Refined palette for `prose-invert` (light text on the dark theme).
        invert: {
          css: {
            '--tw-prose-invert-body': theme('colors.slate[300]'),
            '--tw-prose-invert-headings': theme('colors.slate[50]'),
            '--tw-prose-invert-lead': theme('colors.slate[400]'),
            '--tw-prose-invert-links': theme('colors.teal[300]'),
            '--tw-prose-invert-bold': theme('colors.slate[100]'),
            '--tw-prose-invert-counters': theme('colors.slate[400]'),
            '--tw-prose-invert-bullets': theme('colors.teal[400]'),
            '--tw-prose-invert-hr': theme('colors.slate[700]'),
            '--tw-prose-invert-quotes': theme('colors.slate[200]'),
            '--tw-prose-invert-quote-borders': theme('colors.teal[400]'),
            '--tw-prose-invert-captions': theme('colors.slate[400]'),
            '--tw-prose-invert-code': theme('colors.teal[300]'),
            '--tw-prose-invert-pre-code': theme('colors.slate[200]'),
            '--tw-prose-invert-pre-bg': theme('colors.slate[900]'),
            '--tw-prose-invert-th-borders': theme('colors.slate[700]'),
            '--tw-prose-invert-td-borders': theme('colors.slate[800]'),
          },
        },
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.2s ease',
              '&:hover': {
                color: theme('colors.teal[200]'),
              },
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            code: {
              backgroundColor: theme('colors.slate[800]'),
              padding: '0.2em 0.4em',
              borderRadius: '0.375rem',
              fontWeight: '500',
            },
            pre: {
              border: `1px solid ${theme('colors.slate[800]')}`,
              borderRadius: '0.75rem',
            },
            img: {
              borderRadius: '0.75rem',
              border: `1px solid ${theme('colors.slate[800]')}`,
            },
            p: {
              marginTop: theme('spacing.8'),
              marginBottom: theme('spacing.8'),
              textIndent: theme('spacing.8'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
