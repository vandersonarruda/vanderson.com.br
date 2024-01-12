import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScrolling from '@/components/smooth-scrolling'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Vanderson Arruda — Software Engineer',
    default: 'Vanderson Arruda — Software Engineer',
  },
  description:
    'Experienced Software Engineer skilled in React, TypeScript, React Native, and Node.js. Passionate about crafting innovative tech solutions from São Paulo, Brazil.',
  openGraph: {
    images: ['/share-cover.png'],
  },
  metadataBase: new URL('https://vanderson.com.br'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="m-5 bg-white text-zinc-950 antialiased">
        <SmoothScrolling>{children}</SmoothScrolling>
        <Analytics />
      </body>
    </html>
  )
}
