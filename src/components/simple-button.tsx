'use client'

import * as Icons from 'lucide-react'
import { useRouter } from 'next/navigation'

interface SimpleButtonProps {
  title: string
  link: string
  iconName: keyof typeof Icons
  size?: number
}

export function SimpleButton({
  title,
  link,
  iconName,
  size,
}: SimpleButtonProps) {
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
      className="flex w-fit items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-violet-400 transition-colors duration-200 hover:bg-violet-800 hover:text-violet-200 md:text-base"
    >
      {IconComponent && <IconComponent size={size || 16} />}
      {title}
    </button>
  )
}
