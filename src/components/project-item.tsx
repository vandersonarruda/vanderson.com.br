'use client'

import { Project } from '@/data/types/project'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectItemProps {
  data: Project
}

interface LoaderProps {
  src: string
  width: number
  quality?: number
}

export function ProjectItem({ data }: ProjectItemProps) {
  const customLoader = ({ src, width, quality }: LoaderProps) => {
    return `${process.env.NEXT_PUBLIC_S3_BASE_URL}/projects/${
      data.slug
    }/${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <div className="group flex flex-col">
      <Link
        href={`/project/${data.slug}`}
        className=" items-center justify-center overflow-hidden rounded-xl transition-all duration-500 ease-in-out group-hover:scale-95 md:rounded-2xl"
      >
        <Image
          loader={customLoader}
          src={`${data.cover}`}
          width={800}
          height={600}
          quality={80}
          alt={`Cover image about to ${data.title} project`}
          className="h-48 w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-[115%] group-hover:brightness-125 md:h-60"
        />
      </Link>
      {/* <p>{data.title}</p> */}
    </div>
  )
}
