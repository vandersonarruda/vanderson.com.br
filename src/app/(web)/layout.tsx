import { Header } from '@/components/header'
import { ReactNode } from 'react'

export default function HomeLayout({
  children,
  modal,
}: {
  children: ReactNode
  modal: React.ReactNode
}) {
  return (
    <>
      <div className="mx-auto min-h-screen w-full max-w-[1600px] px-2 py-7 md:px-10">
        <Header />
        <div className="mt-10 md:mt-14 lg:mt-16">
          {children}
          {modal}
        </div>
        <div id="modal-root" />
      </div>
    </>
  )
}
