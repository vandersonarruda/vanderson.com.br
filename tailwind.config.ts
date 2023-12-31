import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-inter)',
    },
    extend: {
      borderRadius: {
        small: '1.8rem',
        medium: '2.4rem',
        extra: '3.2rem',
      },
      colors: {
        portage: {
          '50': '#F0F2FD',
          '100': '#E4E8FB',
          '200': '#CED4F7',
          '300': '#B0B7F1',
          '400': '#989BEB',
          '500': '#7774E0',
          '600': '#675AD1',
          '700': '#584AB8',
          '800': '#483E95',
          '900': '#3E3877',
          '950': '#252145',
        },
      },
    },
  },
  plugins: [],
}
export default config
