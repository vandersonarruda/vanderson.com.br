'use client'

import { Project } from '@/data/types/project'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectItemProps {
  data: Project
}

export function ProjectItem({ data }: ProjectItemProps) {
  return (
    <div className="group flex flex-col">
      <Link
        href={`/project/${data.slug}`}
        className="h-auto max-w-full overflow-hidden rounded-2xl md:rounded-3xl"
      >
        <Image
          className="transition-all duration-500 group-hover:scale-105 group-hover:brightness-125"
          src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/projects${data.cover}`}
          width={800}
          height={600}
          quality={100}
          alt={`Cover image about to ${data.title} project`}
        />
      </Link>
      {/* <p>{data.title}</p> */}
    </div>
  )
}
