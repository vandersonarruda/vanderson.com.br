'use client'

import { Project } from '@/data/types/project'
import { Variants, motion } from 'framer-motion'
import { ProjectItem } from './project-item'
import { useState, useEffect } from 'react'

interface ProjectListProps {
  data: Project[]
}

export default function ProjectList({ data }: ProjectListProps) {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="mx-auto grid w-[100%] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {data.map((project, index) => {
        const coverPerColumns =
          windowWidth > 1024 ? 3 : windowWidth > 768 ? 2 : 1
        const increaseDelayIntro = (index % coverPerColumns) / 5

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
              duration: `${0.8 + increaseDelayIntro}`,
            },
          },
        }

        return (
          <motion.div
            key={project.id}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="group flex flex-col"
          >
            <motion.div variants={imgVariants}>
              <ProjectItem
                key={project.id}
                cover={project.cover}
                slug={project.slug}
                title={project.title}
              />
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}
