'use client'

import Image from 'next/image'
import process from 'process'

interface ProjectImageProps {
  image: string
  slug: string
}

interface LoaderProps {
  src: string
  width: number
  quality?: number
}

export function ProjectImage({ image, slug }: ProjectImageProps) {
  const customLoader = ({ src, width, quality }: LoaderProps) => {
    return `${
      process.env.NEXT_PUBLIC_S3_BASE_URL
    }/projects/${slug}/${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <Image
      key={image}
      loader={customLoader}
      src={image}
      alt={`Pictures about the project`}
      width={800}
      height={600}
      quality={80}
      loading="lazy"
      className="h-auto max-h-[800px] w-full items-center rounded-xl object-cover"
    />
  )
}
