'use client'

import { ChevronLeft } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

export function BackButton() {
  const router = useRouter()
  const pathname = usePathname()

  function handleClick() {
    router.push('/')
  }

  return (
    <div>
      {pathname !== '/' ? (
        <button
          onClick={handleClick}
          className="group flex w-fit items-center justify-center gap-2 rounded-lg px-4 py-2 text-xl font-semibold text-black "
        >
          <ChevronLeft className="transition-all duration-200 ease-in-out group-hover:-ml-2 " />
          <p className="transition-all duration-200 ease-in-out group-hover:ml-3 ">
            Back
          </p>
        </button>
      ) : null}
    </div>
  )
}
