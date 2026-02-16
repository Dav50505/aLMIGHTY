import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: '#E07B54',
          dark: '#C96845',
        },
        teal: {
          DEFAULT: '#2A9D8F',
          dark: '#238B7E',
        },
        cream: '#FDF8F3',
        dark: '#1A1A1A',
        gold: '#D4A85A',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
