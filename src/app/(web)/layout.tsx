import { Header } from '@/components/header'
import { ReactNode } from 'react'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="mx-auto min-h-screen w-full max-w-[1600px] px-2 py-7 md:px-8 lg:px-16">
        <Header />
        <div className="mb-10 mt-10 md:mt-14 lg:mt-16">{children}</div>
      </div>
    </>
  )
}
