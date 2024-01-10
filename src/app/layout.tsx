import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScrolling from '@/components/smooth-scrolling'

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
    'A software engineer focus on Web, IoT & Generative AI, working remotely from São Paulo, Brazil. With over 20 years of coding experience, developing innovative projects for Netflix, Google, and Microsoft. Portfolio includes unique gadgets, web apps, and immersive tech experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-slate-800 antialiased">
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  )
}
