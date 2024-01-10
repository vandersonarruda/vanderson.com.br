'use client'

import { Project } from '@/data/types/project'
import { toBase64, shimmer } from '@/utils/placeholder-shimmer'
import { Variants, motion } from 'framer-motion'

import Image from 'next/image'
import Link from 'next/link'

interface ProjectItemProps {
  data: Project
}

export function ProjectItem({ data }: ProjectItemProps) {
  const imgVariants: Variants = {
    offscreen: {
      x: 300,
      y: 300,
      rotate: -15,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: `${0.8}`,
      },
    },
  }

  return (
    <motion.div
      key={data.id}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="group flex flex-col"
    >
      <motion.div
        variants={imgVariants}
        className="overflow-hidden rounded-2xl"
      >
        <Link
          href={`/project/${data.slug}`}
          className="items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-95"
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
              shimmer(700, 475, false),
            )}`}
            alt={`Thumbnail about the project ${data.title}`}
            className="h-48 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-[115%] group-hover:brightness-125 md:h-60"
          />
        </Link>
      </motion.div>
    </motion.div>
  )
}
