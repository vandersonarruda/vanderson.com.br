'use client'

import Image from 'next/image'
import Link from 'next/link'
import { shimmer, toBase64 } from '@/utils/placeholder-shimmer'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function HomeCover() {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['end end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <motion.div
      style={{ scale: y }}
      transition={{
        opacity: { ease: 'linear' },
        layout: { duration: 0.3 },
        delay: 1,
      }}
      animate={{ opacity: 1 }}
      ref={container}
      className="mx-auto mt-12 w-11/12 overflow-hidden rounded-2xl md:mt-16 md:rounded-medium lg:mt-20 lg:rounded-extra"
    >
      <Link
        href="/project/pirelli-christs-view"
        className="flex w-full flex-col items-center "
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/vanderson-cover.jpg`}
          width={1475}
          height={680}
          quality={100}
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475),
          )}`}
          alt="Cover with me on the head of Christ Redeemer"
          className="h-auto w-full object-cover align-middle"
        />
      </Link>
    </motion.div>
  )
}
