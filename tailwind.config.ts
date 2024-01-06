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
    },
  },
  plugins: [],
}
export default config
