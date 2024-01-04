import { shimmer, toBase64 } from '@/utils/placeholder-shimmer'
import Image from 'next/image'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      // className={twMerge('animate-pulse rounded-xl bg-zinc-50/10', className)}
      className={twMerge('overflow-hidden rounded-xl', className)}
      {...props}
    >
      <Image
        src={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        alt=""
        width={10}
        height={10}
        className="h-full w-full object-cover"
      />
    </div>
  )
}
