'use client'

import * as Icons from 'lucide-react'
import { useRouter } from 'next/navigation'

interface ButtonProps {
  title: string
  link: string
  iconName: keyof typeof Icons
  size?: number
}

export function Button({ title, link, iconName, size }: ButtonProps) {
  const router = useRouter()

  const IconComponent = iconName
    ? (Icons[iconName] as React.ComponentType<{ size: number }>)
    : null

  function handleClick() {
    if (link.startsWith('http') || link.startsWith('https')) {
      window.open(link, '_blank')
    } else if (link.startsWith('mailto')) {
      window.location.href = link
    } else {
      router.push(link)
    }
  }

  return (
    <button
      onClick={handleClick}
      className="group relative w-fit overflow-hidden rounded-full bg-zinc-950/5 px-4 py-3 text-sm font-semibold text-zinc-900 md:px-6 md:py-4 md:text-base"
    >
      <div className="flex flex-row items-center justify-center gap-2">
        <div className="group-hover:text-white">
          {IconComponent && <IconComponent size={size || 16} />}
        </div>

        <div className="flex h-5 flex-col overflow-hidden md:h-6">
          <span className="-translate-y-[100%] text-white transition-transform duration-200 group-hover:translate-y-0">
            {title}
          </span>
          <span className="-translate-y-[100%] text-zinc-950 transition-transform duration-200 group-hover:translate-y-0">
            {title}
          </span>
        </div>

        <div className="absolute -left-[100%] top-auto -z-10 h-full w-full rounded-full bg-zinc-900 transition-all duration-200 ease-out group-hover:left-0 " />
      </div>
    </button>
  )
}