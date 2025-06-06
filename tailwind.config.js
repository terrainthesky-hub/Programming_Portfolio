/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Add this typography section
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            // Target all paragraphs within the .prose class
            'p': {
              marginTop: theme('spacing.4'),    // e.g., 1rem or 16px
              marginBottom: theme('spacing.4'), // e.g., 1rem or 16px
            },
            // You can also style other elements!
            'h2': {
              marginTop: theme('spacing.10'), // Add more space before H2 headings
              marginBottom: theme('spacing.4'),
            },
            'h3': {
              marginTop: theme('spacing.8'), // Add space before H3 headings
              marginBottom: theme('spacing.3'),
            },
            // Make links a bit more stylish
            'a': {
              color: theme('colors.indigo.600'),
              '&:hover': {
                color: theme('colors.indigo.800'),
              },
              textDecoration: 'none', // Optional: remove underline
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
