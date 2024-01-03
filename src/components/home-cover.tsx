'use client'

import Image from 'next/image'
import Link from 'next/link'

interface LoaderProps {
  src: string
  width: number
  quality?: number
}

export function HomeCover() {
  const customLoader = ({ src, width, quality }: LoaderProps) => {
    return `${process.env.NEXT_PUBLIC_S3_BASE_URL}/${src}?w=${width}&q=${
      quality || 75
    }`
  }

  return (
    <Link
      href="/project/pirelli-christs-view"
      className="mt-8 flex w-full flex-col items-center overflow-hidden rounded-small md:mt-16 md:rounded-medium lg:mt-24 lg:rounded-extra"
    >
      <Image
        loader={customLoader}
        src="vanderson-cover.jpg"
        width={1520}
        height={816}
        alt="My picture on the head of Christ Redeemer"
        objectFit="cover"
        quality={100}
        className="h-auto w-full object-cover align-middle"
      />
    </Link>
  )
}
