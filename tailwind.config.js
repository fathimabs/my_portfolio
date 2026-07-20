/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#f8fafc',
        surface: '#ffffff',
        text: '#0f172a',
        muted: '#64748b',
        border: '#e2e8f0',
        accent: '#0d9488',
        'accent-dark': '#0f766e',
        'accent-light': '#ccfbf1',
      },
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      maxWidth: {
        content: '1152px',
      },
    },
  },
  plugins: [],
}
