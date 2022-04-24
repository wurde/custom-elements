const { breakpoints } = require('@wurde/comic.style.tokens.breakpoints');
const { colors } = require('@wurde/comic.style.tokens.colors');
const { fontFamily } = require('@wurde/comic.style.tokens.font-family');
const { spacing } = require('@wurde/comic.style.tokens.spacing');

module.exports = {
  // https://tailwindcss.com/docs/content-configuration
  content: ['./**/*.tsx', './**/{*.html,*.js,*.md,*.mdx}'],
  // https://tailwindcss.com/docs/theme
  theme: {
    // Extend TailwindCSS's default theme.
    extend: {
      // https://tailwindcss.com/docs/responsive-design
      screens: breakpoints,
      colors,
      fontFamily,
      spacing,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
