import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        stonkGreen: '#2e7d32',
        stonkTan: '#fdf6e3',
      },
    },
  },
  plugins: [],
};

export default config;