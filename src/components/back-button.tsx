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
          className="group flex w-fit items-center justify-center gap-2 rounded-lg px-4 py-2 text-xl font-semibold text-neutral-800 md:text-xl"
        >
          <ChevronLeft className="transition-all duration-200 ease-in-out group-hover:-ml-2 group-hover:text-neutral-800/80" />
          <p className="transition-all duration-200 ease-in-out group-hover:ml-3 group-hover:text-neutral-800/80">
            Back
          </p>
        </button>
      ) : null}
    </div>
  )
}
