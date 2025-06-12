/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme'); // Import fontFamily
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Add this typography section
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            // Set the base color for prose content
            '--tw-prose-body': theme('colors.white'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-lead': theme('colors.white'),
            '--tw-prose-links': theme('colors.white'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-counters': theme('colors.white'),
            '--tw-prose-bullets': theme('colors.white'),
            '--tw-prose-hr': theme('colors.white'),
            '--tw-prose-quotes': theme('colors.white'),
            '--tw-prose-quote-borders': theme('colors.white'),
            '--tw-prose-captions': theme('colors.white'),
            '--tw-prose-code': theme('colors.white'),
            '--tw-prose-pre-code': theme('colors.white'),
            '--tw-prose-pre-bg': theme('colors.slate[800]'),
            '--tw-prose-th-borders': theme('colors.white'),
            '--tw-prose-td-borders': theme('colors.white'),

            'p': {
              marginTop: theme('spacing.6'), // Increased top margin
              marginBottom: theme('spacing.6'), // Increased bottom margin
            },
            'a': {
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: theme('colors.teal[300]'),
              },
            },
          },
        },
        xl: { // Add customizations for prose-xl
          css: {
            'p': {
              marginTop: theme('spacing.6'), // Ensure consistent paragraph spacing for xl
              marginBottom: theme('spacing.6'),
            },
            // If you have other DEFAULT prose styles (like link colors) that you want for prose-xl,
            // you might need to reiterate them here if prose-xl's defaults override them.
            // However, CSS variables like --tw-prose-body should generally cascade.
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
