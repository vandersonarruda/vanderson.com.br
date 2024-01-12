'use client'

import * as Icons from 'lucide-react'
import { useRouter } from 'next/navigation'

interface ButtonProps {
  title?: string
  link: string
  iconName: keyof typeof Icons
  size?: number
}

export function Button({ title, link, iconName, size }: ButtonProps) {
  const router = useRouter()

  const IconComponent = iconName
    ? (Icons[iconName] as React.ComponentType<{
        size: number
        className: string
      }>)
    : null

  function handleClick() {
    if (link.startsWith('http') || link.startsWith('https')) {
      window.open(link)
    } else if (link.startsWith('mailto')) {
      window.location.href = link
    } else {
      router.push(link)
    }
  }

  return (
    <button
      onClick={handleClick}
      className="group relative w-fit overflow-hidden rounded-full bg-white px-6 py-3 text-base font-semibold text-neutral-800 md:px-8 md:py-3 md:text-lg"
    >
      <div className="flex flex-row items-center justify-center gap-2 md:gap-3">
        <div className="z-20 group-hover:text-black">
          {IconComponent && (
            <IconComponent
              size={size || 16}
              className="h-4 w-4 md:h-5 md:w-5"
            />
          )}
        </div>

        {title && (
          <div className="z-20 flex h-6 flex-col overflow-hidden md:h-7">
            <span className="-translate-y-[100%] text-black transition-transform duration-200 group-hover:translate-y-0">
              {title}
            </span>
            <span className="-translate-y-[100%] text-black transition-transform duration-200 group-hover:translate-y-0">
              {title}
            </span>
          </div>
        )}
      </div>
      <div className="absolute left-[50%] top-[50%] z-10 h-1 w-1 -translate-x-[50%] -translate-y-[50%] scale-100 rounded-full bg-mindaro-200 opacity-0 transition-all duration-200 ease-in-out group-hover:h-full group-hover:w-full group-hover:opacity-100 " />
    </button>
  )
}
