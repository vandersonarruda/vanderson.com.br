'use client'

import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

interface VideoPlayerProps {
  src: string
}

export default function VideoPlayer({ src }: VideoPlayerProps) {
  // to solve hydration issue
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  if (!src) return null

  return (
    <div className="aspect-video overflow-hidden rounded-xl">
      <ReactPlayer
        width="100%"
        height="100%"
        url={src}
        controls={true}
        config={{}}
      />
      <source src={src} type="video/mp4" />
    </div>
  )
}
