import { Header } from '@/components/header'
import { ReactNode } from 'react'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <div className="max-w-limit mx-auto min-h-screen w-full px-2 py-7 md:px-8 lg:px-16"> */}
      <div className="min-h-screen w-full py-7">
        {/* max-w-limit mx-auto px-4 md:px-8 lg:px-16 */}
        <Header />
        <div className="my-10 md:my-14 lg:my-16">{children}</div>
      </div>
    </>
  )
}
