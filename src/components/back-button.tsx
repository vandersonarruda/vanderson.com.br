'use client'

import { MoveLeft } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

export function BackButton() {
  const router = useRouter()
  const pathname = usePathname()

  function handleClick() {
    router.push('/')
  }

  return (
    <div className="">
      {pathname !== '/' ? (
        <button
          onClick={handleClick}
          className="flex w-fit items-center justify-center gap-2 rounded-full px-4 py-2 text-xl font-semibold text-white transition-colors duration-200 hover:text-violet-500 md:text-xl"
        >
          <MoveLeft />
          Back
        </button>
      ) : null}
    </div>
  )
}
