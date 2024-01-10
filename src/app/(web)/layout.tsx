import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ReactNode } from 'react'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full max-w-limit rounded-2xl bg-stone-100 pt-6">
      <Header />
      <div className="mt-16 md:mt-20 lg:mt-24">{children}</div>
      <Footer />
    </div>
  )
}
