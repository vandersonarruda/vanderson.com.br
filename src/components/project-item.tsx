import { toBase64, shimmer } from '@/utils/placeholder-shimmer'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectItemProps {
  cover: string
  slug: string
  title: string
}

export function ProjectItem({ cover, slug, title }: ProjectItemProps) {
  return (
    <div className="overflow-hidden rounded-2xl">
      <Link
        href={`/project/${slug}`}
        className="items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-95"
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/projects/${slug}/${cover}`}
          width={800}
          height={600}
          quality={80}
          style={{
            objectFit: 'cover',
          }}
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475, false),
          )}`}
          alt={`Thumbnail about the project ${title}`}
          className="h-48 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-[115%] group-hover:brightness-125 md:h-60"
        />
      </Link>
    </div>
  )
}
