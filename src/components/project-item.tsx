import { Project } from '@/data/types/project'
import { toBase64, shimmer } from '@/utils/placeholder-shimmer'
import Image from 'next/image'
import Link from 'next/link'
import process from 'process'

interface ProjectItemProps {
  data: Project
}

export function ProjectItem({ data }: ProjectItemProps) {
  return (
    <div className="group flex flex-col">
      <Link
        href={`/project/${data.slug}`}
        className=" items-center justify-center overflow-hidden rounded-xl transition-all duration-500 ease-in-out group-hover:scale-95 md:rounded-2xl"
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/projects/${data.slug}/${data.cover}`}
          width={800}
          height={600}
          quality={80}
          style={{
            objectFit: 'cover',
          }}
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475),
          )}`}
          alt={`Cover image about to ${data.title} project`}
          className="h-48 w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-[115%] group-hover:brightness-125 md:h-60"
        />
      </Link>
    </div>
  )
}
