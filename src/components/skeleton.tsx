import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge('animate-pulse rounded-xl bg-zinc-900/20', className)}
      {...props}
    />
  )
}
