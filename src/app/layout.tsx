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
    'Experienced Software Engineer in Web, Mobile & IoT from São Paulo, Brazil. Leading innovative projects for giants like Netflix, Google, Microsoft. Passionate about crafting cutting-edge tech solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-zinc-950 antialiased">
        <SmoothScrolling>
          {children}
          <Analytics />
        </SmoothScrolling>
      </body>
    </html>
  )
}
