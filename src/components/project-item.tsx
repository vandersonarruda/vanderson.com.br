'use client'

import { Project } from '@/data/types/project'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface ProjectItemProps {
  data: Project
}

export function ProjectItem({ data }: ProjectItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex flex-col">
      <Link
        href="/"
        className="group h-auto max-w-full overflow-hidden rounded-3xl md:rounded-medium"
      >
        <Image
          className="transition-transform duration-500 group-hover:scale-105"
          src={isHovered ? data.hover : data.cover}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          width={828}
          height={640}
          quality={100}
          alt=""
        />
      </Link>
      <p>{data.title}</p>
      <p>{data.tags}</p>
    </div>
  )
}
