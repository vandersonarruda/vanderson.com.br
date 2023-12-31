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
        href="/"
        className="border-portage-500/0 group-hover:border-portage-500 h-auto max-w-full overflow-hidden rounded-3xl border-8 border-solid transition-all duration-200 md:rounded-medium"
      >
        <Image
          className="transition-transform duration-500 group-hover:scale-105 "
          src={data.cover}
          width={490}
          height={275}
          quality={100}
          alt=""
        />
      </Link>
      <p>{data.title}</p>
      <p>{data.tags}</p>
    </div>
  )
}
