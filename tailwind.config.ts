import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
      },
      borderRadius: {
        small: '1.8rem',
        medium: '2.4rem',
        extra: '3.2rem',
      },
      maxWidth: {
        limit: '1600px',
      },
      colors: {
        ebony: {
          '50': '#eef2ff',
          '100': '#e0e8ff',
          '200': '#c7d3fe',
          '300': '#a4b6fd',
          '400': '#808df9',
          '500': '#6267f2',
          '600': '#4b45e6',
          '700': '#3f37cb',
          '800': '#342fa4',
          '900': '#2f2d82',
          '950': '#0d0c22',
        },
        spring: {
          '50': '#f8f7f4',
          '100': '#efede5',
          '200': '#ddd9cb',
          '300': '#c8bfa9',
          '400': '#b1a186',
          '500': '#a18d6e',
          '600': '#947d62',
          '700': '#7b6753',
          '800': '#655447',
          '900': '#53463b',
          '950': '#2c241e',
        },
      },
    },
  },
  plugins: [],
}
export default config
