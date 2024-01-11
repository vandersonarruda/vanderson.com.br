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
    title: 'Vanderson Arruda - Software Engineer',
    description:
      'Experienced Software Engineer skilled in React, TypeScript, React Native, and Node.js.',
    url: 'https://vanderson.com.br/',
    siteName: 'Vanderson Arruda',
    type: 'website',
    images: [
      {
        url: 'https://s3.us-east-2.amazonaws.com/vanderson.com.br/share-cover.png',
        secureUrl:
          'https://s3.us-east-2.amazonaws.com/vanderson.com.br/share-cover.png',
        width: 1200,
        height: 630,
        alt: 'Preview image for Vanderson Arruda',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-zinc-950 antialiased">
        <SmoothScrolling>{children}</SmoothScrolling>
        <Analytics />
      </body>
    </html>
  )
}
