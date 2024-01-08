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
        mindaro: {
          '50': '#f9ffe5',
          '100': '#eeffc8',
          '200': '#daff8c',
          '300': '#c4fb5b',
          '400': '#abf229',
          '500': '#8bd80a',
          '600': '#6bad03',
          '700': '#518308',
          '800': '#42670d',
          '900': '#385710',
          '950': '#1b3102',
        },
        loblolly: {
          '50': '#f6f8f9',
          '100': '#edeff1',
          '200': '#d6dde1',
          '300': '#b4c2c8',
          '400': '#899fa7',
          '500': '#6a838d',
          '600': '#556b74',
          '700': '#45575f',
          '800': '#3c4950',
          '900': '#353f45',
          '950': '#232a2e',
        },
      },
    },
  },
  plugins: [],
}
export default config
