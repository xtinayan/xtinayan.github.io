/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        charcoal: '#2D2D2D',
        rose: '#E8A5A5',
        blue: '#A5B8E8',
        warm: '#C9B99A',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        mono: ['"Courier New"', 'Courier', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: "'Courier New', Courier, monospace",
            color: '#1a1a1a',
            maxWidth: '62ch',
            lineHeight: '1.9',
            p: {
              lineHeight: '1.9',
              marginTop: '1.6em',
              marginBottom: '1.6em',
            },
            h1: { fontWeight: '300', letterSpacing: '0.02em' },
            h2: { fontWeight: '300', letterSpacing: '0.02em' },
            h3: { fontWeight: '300', letterSpacing: '0.02em' },
            h4: { fontWeight: '300' },
            a: {
              color: '#999',
              textDecoration: 'none',
              '&:hover': {
                color: '#555',
                textDecoration: 'underline',
              },
            },
            blockquote: {
              borderLeftWidth: '1px',
              borderLeftColor: '#ccc',
              borderLeftStyle: 'solid',
              fontStyle: 'normal',
              paddingLeft: '1.5em',
              color: '#777',
              quotes: 'none',
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:last-of-type::after': { content: 'none' },
            code: {
              fontWeight: '400',
              fontSize: '0.9em',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}