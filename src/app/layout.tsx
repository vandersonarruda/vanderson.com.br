import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Vanderson Arruda',
    default: 'Vanderson Arruda',
  },
  description:
    'A software engineer focus on Web3, IoT & Generative AI, working remotely from São Paulo, Brazil. With over 20 years of coding experience, developing innovative projects for Netflix, Google, and Microsoft. Portfolio includes unique gadgets, web apps, and immersive tech experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="text-zinc-100 bg-zinc-950 antialiased">{children}</body>
    </html>
  )
}
