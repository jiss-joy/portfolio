import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: 'var(--font-nunito)',
      code: 'var(--font-dm-mono)',
      logo: 'var(--font-concert-one)',
    },
    extend: {
      colors: {
        primary: '#ED6A5A',
        secondary: '#202C39',
        accent: {
          DEFAULT: '#ED6A5A',
          hover: '#D74E09',
        },
        background: {
          // DEFAULT: '#D1DEDE',
          DEFAULT: '#f4f4f4',
          dark: '#1C0221',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
