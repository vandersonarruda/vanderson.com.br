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
    <div>
      {pathname !== '/' ? (
        <button
          onClick={handleClick}
          className="group flex w-fit items-center justify-center gap-2 rounded-lg px-4 py-2 text-xl font-semibold text-white md:text-xl"
        >
          <MoveLeft className="transition-all duration-100 ease-in group-hover:-ml-3 group-hover:text-violet-400" />
          <p className="transition-all duration-100 ease-in group-hover:ml-3 group-hover:text-violet-400">
            Back
          </p>
        </button>
      ) : null}
    </div>
  )
}
